import moment from 'moment'
import Stripe from 'stripe'

type Plans = Array<Stripe.plans.IPlan>
type Subscriptions = Array<Stripe.subscriptions.ISubscription>

export class RenewalReminder {
  private stripe: Stripe
  private today: moment.Moment
  public constructor (stripe: Stripe, today: moment.Moment = moment()) {
    this.today = today
    this.stripe = stripe
  }
  private async getYearlyPlans (): Promise<Plans> {
    const plans = await this.stripe.plans.list({
      limit: 100
    })
    const yearlyPlans = plans.data.filter(plan => plan.interval === 'year')
    return yearlyPlans
  }
  private getLastSubscriptionId (subscription: Stripe.IList<Stripe.subscriptions.ISubscription>): string {
    const length = subscription.data.length
    const last = subscription.data[length - 1]
    return last.id
  }
  private async getSubscription (planId: string, lastId: string = ''): Promise<Subscriptions> {
    const param = this.getListSubscriptionParam(planId, lastId)
    const subscriptions = await this.stripe.subscriptions.list(param)
    if (!subscriptions.has_more) {
      return subscriptions.data
    } else {
      const lastSubId = this.getLastSubscriptionId(subscriptions)
      const moreSub = await this.getSubscription(planId, lastSubId)
      const lists = subscriptions.data
      Array.prototype.push.apply(lists, moreSub)
      return lists
    }
  }
  private async getSubscriptionsByPlans (plans: Plans): Promise<Subscriptions> {
    const subscriptions: Subscriptions = []
    await Promise.all(plans.map(async plan => {
      const data = await this.getSubscription(plan.id)
      Array.prototype.push.apply(subscriptions, data)
    }))
    return subscriptions
  }
  public async getNotificationTargetSubscription (targetDate: number = 30): Promise<Subscriptions> {
    // 年間プラン取得
    const plans = await this.getYearlyPlans()
    // プランについてるsubscription取得
    const subscriptions = await this.getSubscriptionsByPlans(plans)
    // あと${targetDate}日のものをピックアップ
    const targets = this.filterSubscriptions(subscriptions, targetDate)
    return targets
  }
  private filterSubscriptions (subscriptions: Subscriptions, targetDate: number = 30): Subscriptions {
    const targets = subscriptions.filter(subscription => {
      const end = moment.unix(subscription.current_period_end)
      const dateRemained = end.diff(this.today, 'day')
      return dateRemained === targetDate
    })
    return targets
  }
  private getListSubscriptionParam (planId: string, lastId: string = ''): Stripe.subscriptions.ISubscriptionListOptions {
    const param: Stripe.subscriptions.ISubscriptionListOptions = {
      plan: planId,
      limit: 100,
      created: {
        lte: String(moment().subtract(335, 'days').unix())
      }
    }
    if (lastId) param.starting_after = lastId
    return param
  }
}
export default RenewalReminder