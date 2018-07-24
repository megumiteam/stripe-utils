## Stripe utilities

Stripeの処理系で使いまわしたいものをまとめたやつ。

## subscriptions

### RenewalReminder
年額プランの有効期限まであとX日になったsubscriptionだけをピックアップします。

```
const stripeUtils = require('stripe-utils')
const stripe = require("stripe")(
    "sk_test_XXXXXXXX"
)
const { RenewalReminder } = stripeUtils.subscriptions

const exec = async () => {
    const targetDate = 30
    const worker = new RenewalReminder(stripe)
    const subscriptions = await worker.getNotificationTargetSubscription(targetDate)
    subscriptions.forEach(subscription => {
      console.log(subscription.id)
    })
    console.log('Amount: %j', subscriptions.length)
}
exec()
```