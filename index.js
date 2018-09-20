module.exports = {
    subscriptions: {
        RenewalReminder: require('./class/subscriptions/renewalReminder')
    },
    charges: {
        getDeclineDescription: require('./libs/charges/declineCode')
    }
}