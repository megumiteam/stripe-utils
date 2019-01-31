const RenewalReminder = require('./class/subscriptions/renewalReminder')
const getDeclineDescription = require('./libs/charges/declineCode')
module.exports = {
    RenewalReminder,
    getDeclineDescription,
    subscriptions: {
        RenewalReminder
    },
    charges: {
        getDeclineDescription
    }
}