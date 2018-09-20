## Stripe utilities

Stripeの処理系で使いまわしたいものをまとめたやつ。

## Requirement
You should use Node8.10.0 or later

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

## Charge

### GetDeclineCode
Decline codeから説明文を取ってきます。
参照元: https://stripe.com/docs/declines/codes

```
const { getDeclineDescription } = require('stripe-utils')
const { code } = getDeclineDescription("try_again_later")
console.log(code)

{
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "Ask the customer to attempt the payment again. If subsequent payments are declined, the customer should contact their card issuer for more information."
}
```