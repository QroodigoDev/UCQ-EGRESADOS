import { icon } from '@fortawesome/fontawesome-svg-core'
import fontAwesomeIcons from '@/fontAwesomeIcons'

const fontAwesomePlugin = {
  // eslint-disable-next-line  space-before-function-paren
  install(Vue, options) {
    Vue.icon = Vue.prototype.$icon = icon
    Vue.fa = Vue.prototype.$fa = fontAwesomeIcons
  }
}

export default fontAwesomePlugin
