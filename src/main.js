import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import Toasted from 'vue-toasted'
import { abilitiesPlugin } from '@casl/vue'
import { Ability } from '@casl/ability'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
// import config from '@/config'

import lodashPlugin from '@/plugins/LodashPlugin'
import toastedPlugin from '@/plugins/ToastedPlugin'
import fontAwesomePlugin from '@/plugins/FontAwesomePlugin'
import formatNumberCurrencyPlugin from '@/plugins/FormatNumberCurrency'
import VueGoodTablePlugin from 'vue-good-table'
import VueCarousel from 'vue-carousel'
import VModal from 'vue-js-modal'

import Multiselect from 'vue-multiselect'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import fontAwesomeIcons from '@/fontAwesomeIcons'

import { VBTogglePlugin } from 'bootstrap-vue'
import 'vue-good-table/dist/vue-good-table.css'
import '@/mixins/FormatNumberCurrency.js'

library.add(
  fontAwesomeIcons
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)
Vue.component('multiselect', Multiselect)

Vue.use(abilitiesPlugin, new Ability())
Vue.use(VModal)
Vue.use(lodashPlugin)
Vue.use(toastedPlugin)
Vue.use(fontAwesomePlugin)
Vue.use(VBTogglePlugin)
Vue.use(formatNumberCurrencyPlugin)
Vue.use(VueGoodTablePlugin)
Vue.use(VueCarousel)
Vue.use(Toasted, {
  theme: 'toasted-primary',
  iconPack: 'fontawesome'
})

Vue.mixin({
  methods: {
    showError (msg) {
      this.$toastedPush({
        message: msg,
        type: 'error'
      })
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
