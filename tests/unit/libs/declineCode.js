const assert = require('power-assert')
const getDeclineDescription = require('../../../libs/charges/declineCode')

const defaultResponse = {
  docVersion: '2018-09-20',
  code: {}
}

describe('./libs/charge/declineCode.js', () => {
  describe('getDeclineDescription()', () => {
    it('should return empty object if given nothing', () => {
      assert.deepEqual(getDeclineDescription(), defaultResponse)
    })
    it('should return valid object if given generic_decline', () => {
      assert.deepEqual(getDeclineDescription('generic_decline'), {
        docVersion: '2018-09-20',
        code: {
          "description": "The card has been declined for an unknown reason.",
          "nextSteps": "The customer needs to contact their card issuer for more information.",
          "nextUserAction": "Please contact your card issuer for more information.",
          "translations": {
            "ja_JP": {
              "description": "カードは未知の理由で拒否されました。",
              "nextUserAction": "詳しくはカード発行会社にお問い合わせください。"
            }
          }
        }
      })
    })
    it('should return empty object if given invalid_code', () => {
      assert.deepEqual(getDeclineDescription('hoge'), defaultResponse)
    })
  })
})