import Vue from 'vue'

var numeral = require('numeral')

Vue.filter('formatNumberCurrency', (value) => {
  let formatted = ''
  if (value <= 0.01) {
    formatted = '0.00'
  } else {
    formatted = numeral(value).format('0,0.00')
  }
  return formatted === 'NaN' ? value : formatted
})
