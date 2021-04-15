const toastedPlugin = {
  install (Vue, options) {
    Vue.prototype.$toastedPush = (value) => {
      let iconfa = ''
      switch (value.type) {
        case 'success':
          iconfa = Vue.icon(Vue.fa.falCheck).html
          break
        case 'info':
          iconfa = Vue.icon(Vue.fa.falInfoSquare).html
          break
        case 'error':
          iconfa = Vue.icon(Vue.fa.falExclamationTriangle).html
          break
        default:
          iconfa = Vue.icon(Vue.fa.falCheck).html
          break
      }
      Vue.toasted.show(`${iconfa}&nbsp;${value.message} `, {
        position: 'bottom-right',
        duration: value.duration || 5000,
        type: value.type,
        action: value.action,
        ...value.options
      })
    }
  }
}

export default toastedPlugin
