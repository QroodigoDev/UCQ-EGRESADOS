var numeral = require('numeral')

const formatNumberCurrencyPlugin = {
  install (Vue) {
    Vue.prototype.$formatNumberCurrency = (value) => {
      let formatted = ''
      formatted = numeral(value).format('0,0.00')
      return formatted === 'NaN' ? value : formatted
    }
  }
}

export default formatNumberCurrencyPlugin
