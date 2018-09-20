const assert = require('power-assert')
const index = require('../../index')

describe('index.js', () => {
  describe('subscription', () => {
    const keys = Object.keys(index.subscriptions)
    it('should contain RenewalReminder method', () => {
      assert.notEqual(keys.indexOf('RenewalReminder'), -1)
    })
  })
  describe('charges', () => {
    const keys = Object.keys(index.charges)
    it('should contain getDeclineDescriptionmethod', () => {
      assert.notEqual(keys.indexOf('getDeclineDescription'), -1)
    })
  })
})