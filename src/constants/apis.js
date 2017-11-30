export const apiList = {
  login: {
    login: 'https://demo.ubanquity.io:8443/customer-aaa/v1/login',
    getCustomerInfo: 'https://demo.ubanquity.io:8443/infobanking/v1/customer',
    renewToken: 'https://demo.ubanquity.io:8443/customer-aaa/v1/renew_token'
  },
  register: {
    checkCredential: 'https://demo.ubanquity.io:8443/infobanking/v1/register',
    checkOTP: 'https://demo.ubanquity.io:8443/infobanking/v1/check_otp',
    checkDeviceOTP: 'https://demo.ubanquity.io:8443/infobanking/v1/check_device_otp',
    resendOTP: 'https://demo.ubanquity.io:8443/infobanking/v1/resend_otp',
    validateUserName: 'https://demo.ubanquity.io:8443/customer-aaa/v1/username/{{username}}/check',
    createUser: 'https://demo.ubanquity.io:8443/customer-aaa/v1/user',
  },
  cards: {
    card: 'https://demo.ubanquity.io:8443/infobanking/v1/card',
    stop: 'https://demo.ubanquity.io:8443/infobanking/v1/card/{id}/stop',
  },
  transactions: {
    transactions: 'https://demo.ubanquity.io:8443/infobanking/v1/transaction',
    claim: 'https://demo.ubanquity.io:8443/infobanking/v1/claim',
  },
  categories: {
    category: 'https://demo.ubanquity.io:8443/infobanking/v1/category',
  },
  transfer: { 
    beneficiary: 'https://demo.ubanquity.io:8443/txnbanking/v1/beneficiary',
    currency: 'https://demo.ubanquity.io:8443/infobanking/v1/currency?base={{rate}}',
    getCharges: 'https://demo.ubanquity.io:8443/txnbanking/v1/transfer/calculate_fees',
    transfer: 'https://demo.ubanquity.io:8443/txnbanking/v1/transfer/',
  },
  payment: {
    bill: 'https://demo.ubanquity.io:8443/payment/v1/bill',
    biller: 'https://demo.ubanquity.io:8443/payment/v1/biller',
  },
  locator: {
    atm: 'https://demo.ubanquity.io:8443/infobanking/v1/atm',
    branch: 'https://demo.ubanquity.io:8443/infobanking/v1/branch',
  },
  successApi: 'https://api.myjson.com/bins/b8mpp',
  errorApi: 'https://api.myjson.com/bins/nzwqp',
};
