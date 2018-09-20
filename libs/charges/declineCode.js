
const docVersion = '2018-09-20'
const declineCodes = {
  "approve_with_id": {"description": "The payment cannot be authorized.", "nextSteps": "The payment should be attempted again. If it still cannot be processed, the customer needs to contact their card issuer."},
  "call_issuer": {"description": "The card has been declined for an unknown reason.", "nextSteps": "The customer needs to contact their card issuer for more information."},
  "card_not_supported": {"description": "The card does not support this type of purchase.", "nextSteps": "The customer needs to contact their card issuer to make sure their card can be used to make this type of purchase."},
  "card_velocity_exceeded": {"description": "The customer has exceeded the balance or credit limit available on their card.", "nextSteps": "The customer should contact their card issuer for more information."},
  "currency_not_supported": {"description": "The card does not support the specified currency.", "nextSteps": "The customer needs to check with the issuer whether the card can be used for the type of currency specified."},
  "do_not_honor": {"description": "The card has been declined for an unknown reason.", "nextSteps": "The customer needs to contact their card issuer for more information."},
  "do_not_try_again": {"description": "The card has been declined for an unknown reason.", "nextSteps": "The customer should contact their card issuer for more information."},
  "duplicate_transaction": {"description": "A transaction with identical amount and credit card information was submitted very recently.", "nextSteps": "Check to see if a recent payment already exists."},
  "expired_card": {"description": "The card has expired.", "nextSteps": "The customer should use another card."},
  "fraudulent": {"description": "The payment has been declined as Stripe suspects it is fraudulent.", "nextSteps": "Do not report more detailed information to your customer. Instead, present as you would the generic_declinedescribed below."},
  "generic_decline": {"description": "The card has been declined for an unknown reason.", "nextSteps": "The customer needs to contact their card issuer for more information."},
  "incorrect_number": {"description": "The card number is incorrect.", "nextSteps": "The customer should try again using the correct card number."},
  "incorrect_cvc": {"description": "The CVC number is incorrect.", "nextSteps": "The customer should try again using the correct CVC."},
  "incorrect_pin": {"description": "The PIN entered is incorrect. This decline code only applies to payments made with a card reader.", "nextSteps": "The customer should try again using the correct PIN."},
  "incorrect_zip": {"description": "The ZIP/postal code is incorrect.", "nextSteps": "The customer should try again using the correct billing ZIP/postal code."},
  "insufficient_funds": {"description": "The card has insufficient funds to complete the purchase.", "nextSteps": "The customer should use an alternative payment method."},
  "invalid_account": {"description": "The card, or account the card is connected to, is invalid.", "nextSteps": "The customer needs to contact their card issuer to check that the card is working correctly."},
  "invalid_amount": {"description": "The payment amount is invalid, or exceeds the amount that is allowed.", "nextSteps": "If the amount appears to be correct, the customer needs to check with their card issuer that they can make purchases of that amount."},
  "invalid_cvc": {"description": "The CVC number is incorrect.", "nextSteps": "The customer should try again using the correct CVC."},
  "invalid_expiry_year": {"description": "The expiration year invalid.", "nextSteps": "The customer should try again using the correct expiration date."},
  "invalid_number": {"description": "The card number is incorrect.", "nextSteps": "The customer should try again using the correct card number."},
  "invalid_pin": {"description": "The PIN entered is incorrect. This decline code only applies to payments made with a card reader.", "nextSteps": "The customer should try again using the correct PIN."},
  "issuer_not_available": {"description": "The card issuer could not be reached, so the payment could not be authorized.", "nextSteps": "The payment should be attempted again. If it still cannot be processed, the customer needs to contact their card issuer."},
  "lost_card": {"description": "The payment has been declined because the card is reported lost.", "nextSteps": "The specific reason for the decline should not be reported to the customer. Instead, it needs to be presented as a generic decline."},
  "merchant_blacklist": {"description": "The payment has been declined because it matches a value on the Stripe user's blocklist.", "nextSteps": "Do not report more detailed information to your customer. Instead, present as you would the generic_declinedescribed above."},
  "new_account_information_available": {"description": "The card, or account the card is connected to, is invalid.", "nextSteps": "The customer needs to contact their card issuer for more information."},
  "no_action_taken": {"description": "The card has been declined for an unknown reason.", "nextSteps": "The customer should contact their card issuer for more information."},
  "not_permitted": {"description": "The payment is not permitted.", "nextSteps": "The customer needs to contact their card issuer for more information."},
  "pickup_card": {"description": "The card cannot be used to make this payment (it is possible it has been reported lost or stolen).", "nextSteps": "The customer needs to contact their card issuer for more information."},
  "pin_try_exceeded": {"description": "The allowable number of PIN tries has been exceeded.", "nextSteps": "The customer must use another card or method of payment."},
  "processing_error": {"description": "An error occurred while processing the card.", "nextSteps": "The payment should be attempted again. If it still cannot be processed, try again later."},
  "reenter_transaction": {"description": "The payment could not be processed by the issuer for an unknown reason.", "nextSteps": "The payment should be attempted again. If it still cannot be processed, the customer needs to contact their card issuer."},
  "restricted_card": {"description": "The card cannot be used to make this payment (it is possible it has been reported lost or stolen).", "nextSteps": "The customer needs to contact their card issuer for more information."},
  "revocation_of_all_authorizations": {"description": "The card has been declined for an unknown reason.", "nextSteps": "The customer should contact their card issuer for more information."},
  "revocation_of_authorization": {"description": "The card has been declined for an unknown reason.", "nextSteps": "The customer should contact their card issuer for more information."},
  "security_violation": {"description": "The card has been declined for an unknown reason.", "nextSteps": "The customer needs to contact their card issuer for more information."},
  "service_not_allowed": {"description": "The card has been declined for an unknown reason.", "nextSteps": "The customer should contact their card issuer for more information."},
  "stolen_card": {"description": "The payment has been declined because the card is reported stolen.", "nextSteps": "The specific reason for the decline should not be reported to the customer. Instead, it needs to be presented as a generic decline."},
  "stop_payment_order": {"description": "The card has been declined for an unknown reason.", "nextSteps": "The customer should contact their card issuer for more information."},
  "testmode_decline": {"description": "A Stripe test card number was used.", "nextSteps": "A genuine card must be used to make a payment."},
  "transaction_not_allowed": {"description": "The card has been declined for an unknown reason.", "nextSteps": "The customer needs to contact their card issuer for more information."},
  "try_again_later": {"description": "The card has been declined for an unknown reason.", "nextSteps": "Ask the customer to attempt the payment again. If subsequent payments are declined, the customer should contact their card issuer for more information."},
  "withdrawal_count_limit_exceeded": {"description": "The customer has exceeded the balance or credit limit available on their card.", "nextSteps": "The customer should use an alternative payment method."}
  }

const getDeclineCode = (declineCode = '') => {
  if (!declineCode) return {}
  const code = declineCodes[declineCode]
  return code || {}
}

const getDeclineDescription = (declineCode = '') => {
  const code = getDeclineCode(declineCode)
  return {
    docVersion,
    code,
  }
} 

module.exports = getDeclineDescription