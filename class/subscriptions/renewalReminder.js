const moment = require('moment')

class RenewalReminder {
  constructor (stripe, today = moment()) {
    this.today = today
    this.stripe = stripe
  }
  async getYearlyPlans () {
    const plans = await this.stripe.plans.list({
      limit: 100
    })
    const yearlyPlans = plans.data.filter(plan => plan.interval === 'year')
    return yearlyPlans
  }
  getLastSubscriptionId (subscription) {
    const length = subscription.data.length
    const last = subscription.data[length - 1]
    return last.id
  }
  async getSubscription (planId, lastId = '') {
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
  async getSubscriptionsByPlans (plans) {
    const subscriptions = []
    await Promise.all(plans.map(async plan => {
      const data = await this.getSubscription(plan.id)
      Array.prototype.push.apply(subscriptions, data)
    }))
    return subscriptions
  }
  async getNotificationTargetSubscription (targetDate = 30) {
    const today = moment()
    // 年間プラン取得
    const plans = await this.getYearlyPlans()
    // プランについてるsubscription取得
    const subscriptions = await this.getSubscriptionsByPlans(plans)
    // あと${targetDate}日のものをピックアップ
    const targets = this.filterSubscriptions(subscriptions, today, targetDate)
    return targets
  }
  filterSubscriptions (subscriptions, today = moment(), targetDate = 30) {
    const targets = subscriptions.filter(subscription => {
      const end = moment.unix(subscription.current_period_end)
      const dateRemained = end.diff(today, 'day')
      return dateRemained === targetDate
    })
    return targets
  }
  getListSubscriptionParam (planId, lastId = '') {
    const param = {
      plan: planId,
      limit: 100,
      created: {
        lte: moment().subtract(335, 'days').unix()
      }
    }
    if (lastId) param.starting_after = lastId
    return param
  }
}
module.exports = RenewalReminder