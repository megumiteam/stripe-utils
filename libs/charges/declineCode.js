
const docVersion = '2018-09-20'
const declineCodes = {
  "approve_with_id": {
    "description": "The payment cannot be authorized.", 
    "nextSteps": "The payment should be attempted again. If it still cannot be processed, the customer needs to contact their card issuer.",
    "nextUserAction": "Please try again. If it still cannot be processed, the please contact your card issuer.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "call_issuer": {
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "The customer needs to contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "card_not_supported": {
    "description": "The card does not support this type of purchase.", 
    "nextSteps": "The customer needs to contact their card issuer to make sure their card can be used to make this type of purchase.",
    "nextUserAction": "Your card issuer may not support this type of purchase, please contact your card issues for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "card_velocity_exceeded": {
    "description": "The customer has exceeded the balance or credit limit available on their card.", 
    "nextSteps": "The customer should contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "currency_not_supported": {
    "description": "The card does not support the specified currency.", 
    "nextSteps": "The customer needs to check with the issuer whether the card can be used for the type of currency specified.",
    "nextUserAction": "Please contact your card issuer to verify this type of currency can be used for this payment.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "do_not_honor": {
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "The customer needs to contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "do_not_try_again": {
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "The customer should contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "duplicate_transaction": {
    "description": "A transaction with identical amount and credit card information was submitted very recently.", 
    "nextSteps": "Check to see if a recent payment already exists.",
    "nextUserAction": "Check to see if a recent payment already exists.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "expired_card": {
    "description": "The card has expired.", 
    "nextSteps": "The customer should use another card.",
    "nextUserAction": "Please use another card.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "fraudulent": {
    "description": "The payment has been declined as Stripe suspects it is fraudulent.", 
    "nextSteps": "Do not report more detailed information to your customer. Instead, present as you would the generic_declinedescribed below.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "generic_decline": {
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "The customer needs to contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "incorrect_number": {
    "description": "The card number is incorrect.", 
    "nextSteps": "The customer should try again using the correct card number.",
    "nextUserAction": "Please check your card numbers and try again. If it still cannot be processed, the please contact your card issuer.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "incorrect_cvc": {
    "description": "The CVC number is incorrect.", 
    "nextSteps": "The customer should try again using the correct CVC.",
    "nextUserAction": "Please check your card numbers and try again. If it still cannot be processed, the please contact your card issuer.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "incorrect_pin": {
    "description": "The PIN entered is incorrect. This decline code only applies to payments made with a card reader.", 
    "nextSteps": "The customer should try again using the correct PIN.",
    "nextUserAction": "Please check your PIN and try again. If it still cannot be processed, the please contact your card issuer.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "incorrect_zip": {
    "description": "The ZIP/postal code is incorrect.", 
    "nextSteps": "The customer should try again using the correct billing ZIP/postal code.",
    "nextUserAction": "Please try again using the correct ZIP/postal code.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "insufficient_funds": {
    "description": "The card has insufficient funds to complete the purchase.", 
    "nextSteps": "The customer should use an alternative payment method.",
    "nextUserAction": "Please try again using an alternative payment method.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "invalid_account": {
    "description": "The card, or account the card is connected to, is invalid.", 
    "nextSteps": "The customer needs to contact their card issuer to check that the card is working correctly.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "invalid_amount": {
    "description": "The payment amount is invalid, or exceeds the amount that is allowed.", 
    "nextSteps": "If the amount appears to be correct, the customer needs to check with their card issuer that they can make purchases of that amount.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "invalid_cvc": {
    "description": "The CVC number is incorrect.", 
    "nextSteps": "The customer should try again using the correct CVC.",
    "nextUserAction": "Please try again using the correct CVC.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "invalid_expiry_year": {
    "description": "The expiration year invalid.", 
    "nextSteps": "The customer should try again using the correct expiration date.",
    "nextUserAction": "Please try again using the correct expiration date.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "invalid_number": {
    "description": "The card number is incorrect.", 
    "nextSteps": "The customer should try again using the correct card number.",
    "nextUserAction": "Please try again using the correct card number.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "invalid_pin": {
    "description": "The PIN entered is incorrect. This decline code only applies to payments made with a card reader.", 
    "nextSteps": "The customer should try again using the correct PIN.",
    "nextUserAction": "Please try again using the correct card PIN.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "issuer_not_available": {
    "description": "The card issuer could not be reached, so the payment could not be authorized.", 
    "nextSteps": "The payment should be attempted again. If it still cannot be processed, the customer needs to contact their card issuer.",
    "nextUserAction": "Please try again. If it still cannot be processed, the please contact your card issuer.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "lost_card": {
    "description": "The payment has been declined because the card is reported lost.", 
    "nextSteps": "The specific reason for the decline should not be reported to the customer. Instead, it needs to be presented as a generic decline.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "merchant_blacklist": {
    "description": "The payment has been declined because it matches a value on the Stripe user's blocklist.", 
    "nextSteps": "Do not report more detailed information to your customer. Instead, present as you would the generic_declinedescribed above.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "new_account_information_available": {
    "description": "The card, or account the card is connected to, is invalid.", 
    "nextSteps": "The customer needs to contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "no_action_taken": {
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "The customer should contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "not_permitted": {
    "description": "The payment is not permitted.", 
    "nextSteps": "The customer needs to contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "pickup_card": {
    "description": "The card cannot be used to make this payment (it is possible it has been reported lost or stolen).", 
    "nextSteps": "The customer needs to contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "pin_try_exceeded": {
    "description": "The allowable number of PIN tries has been exceeded.", 
    "nextSteps": "The customer must use another card or method of payment.",
    "nextUserAction": "Please use another card or method of payment.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "processing_error": {
    "description": "An error occurred while processing the card.", 
    "nextSteps": "The payment should be attempted again. If it still cannot be processed, try again later.",
    "nextUserAction": "Please try again. If it still cannot be processed, the please contact your card issuer.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "reenter_transaction": {
    "description": "The payment could not be processed by the issuer for an unknown reason.", 
    "nextSteps": "The payment should be attempted again. If it still cannot be processed, the customer needs to contact their card issuer.",
    "nextUserAction": "Please try again. If it still cannot be processed, the please contact your card issuer.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "restricted_card": {
    "description": "The card cannot be used to make this payment (it is possible it has been reported lost or stolen).", 
    "nextSteps": "The customer needs to contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "revocation_of_all_authorizations": {
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "The customer should contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "revocation_of_authorization": {
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "The customer should contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "security_violation": {
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "The customer needs to contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "service_not_allowed": {
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "The customer should contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "stolen_card": {
    "description": "The payment has been declined because the card is reported stolen.", 
    "nextSteps": "The specific reason for the decline should not be reported to the customer. Instead, it needs to be presented as a generic decline.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "stop_payment_order": {
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "The customer should contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "testmode_decline": {
    "description": "A Stripe test card number was used.", 
    "nextSteps": "A genuine card must be used to make a payment.",
    "nextUserAction": "A genuine card must be used to make a payment.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "transaction_not_allowed": {
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "The customer needs to contact their card issuer for more information.",
    "nextUserAction": "Please contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "try_again_later": {
    "description": "The card has been declined for an unknown reason.", 
    "nextSteps": "Ask the customer to attempt the payment again. If subsequent payments are declined, the customer should contact their card issuer for more information.",
    "nextUserAction": "Please try again. If it still cannot be processed, the please contact your card issuer.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  },
  "withdrawal_count_limit_exceeded": {
    "description": "The customer has exceeded the balance or credit limit available on their card.", 
    "nextSteps": "The customer should use an alternative payment method.",
    "nextUserAction": "Please use another card or contact your card issuer for more information.",
    "translations": {
      "ja_JP": {
        "description": "",
        "nextUserAction": ""
      }
    }
  }
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