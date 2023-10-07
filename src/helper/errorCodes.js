export const errorCodes = {
  40001: {
    reason: "ValidationInvalidField",
    message: "Invalid parameter(s)"
  },
  40002: {
    reason: "ValidationExpired",
    message: "secretCode is invalid/expired"
  },
  40003: {
    reason: "ValidationError",
    message: "Message sent failed"
  },
  40005: {
    reason: "ValidationError",
    message: "Email is already in use"
  },
  40006: {
    reason: "ValidationError",
    message: "Phone is already in use"
  },
  40007: {
    reason: "ValidationInvalidField",
    message: "Email format is not valid"
  },
  40008: {
    reason: "ValidationInvalidField",
    message: "Phone format is not valid"
  },
  40009: {
    reason: "ValidationError",
    message: "Phone number is not valid"
  },
  40010: {
    reason: "ValidationInvalidField",
    message: "User doesn't have any preferred card currency"
  },
  40012: {
    reason: "ValidationError",
    message: "Requested planId is not subscribed"
  },
  40013: {
    reason: "ValidationError",
    message: "planId does not belongs to the partner"
  },
  40014: {
    reason: "ValidationError",
    message: "upgradePlanId does not belongs to the partner"
  },
  40015: {
    reason: "ValidationError",
    message: "Requested plan is not accepted without payment."
  },
  40016: {
    reason: "PasswordValidationError",
    message: "You are using old password. Please use different password. "
  },
  40054: {
    reason: "ValidationError",
    message: "Account is inactive."
  },
  400101: {
    reason: "ValidationError",
    message: "Invalid invoice status for payment"
  },
  400102: {
    reason: "ValidationError",
    message: "Invoice has been expired"
  },
  400103: {
    reason: "TransactionFailed",
    message: "Transaction adapter has failed"
  },
  400104: {
    reason: "ValidationError",
    message: "Currency is not supported for this partner"
  },
  40101: {
    reason: "NoUser",
    message: "User doesn't exists"
  },
  40102: {
    reason: "InvalidPassword",
    message: "User password is invalid"
  },
  40103: {
    reason: "Blocked",
    message: "Your account is blocked. Please contact to customer support."
  },
  40104: {
    reason: "NewUser",
    message: "New user must complete subscription"
  },
  40105: {
    reason: "UserUnverified",
    message: "User must verify email address"
  },
  40106: {
    reason: "UserUnverified",
    message: "User must verify phone number"
  },
  // ================== Authorizer error codes ==================
  40110: {
    reason: "TokenExpired",
    message: "Token expired"
  },
  40111: {
    reason: "InvalidToken",
    message: "Token validation fail"
  },
  40112: {
    reason: "InvalidToken",
    message: "Token verification fail"
  },
  40125: {
    reason: "PasswordValidationError",
    message: "Wrong password."
  },
  40401: {
    reason: "NotFound",
    message: "User not found"
  },
  40415: {
    reason: "SubscriptionNotFound",
    message: "Subscription not found for this shop."
  },
  40901: {
    reason: "ConflictAuthUser",
    message: "User is already exists"
  },
  40912: {
    reason: "ConflictSubscription",
    message: "Shop already have a subscription."
  }
};
