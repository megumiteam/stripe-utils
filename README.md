## Stripe utilities

Utilify functions to develop Stripe integration scrips in Node.js

## Requirement
You should use Node8.10.0 or later

## subscriptions

### RenewalReminder

Get list subscriptions that the remain date is less than X day.

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
Get declines description and next steps bt decline_code
Ref: https://stripe.com/docs/declines/codes

```
const { getDeclineDescription } = require('stripe-utils')
const { code } = getDeclineDescription("try_again_later")
console.log(code)

{
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "Ask the customer to attempt the payment again. If subsequent payments are declined, the customer should contact their card issuer for more information."
}
```