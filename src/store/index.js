import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import auth from '@/store/modules/auth'
import permissions from '@/store/modules/permissions'
import sentry from '@/store/modules/sentry'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    permissions,
    sentry
  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      paths: [
        'auth.autenticated',
        'auth.user',
        'auth.token',
        'permissions.rules',
        'permissions.menu'
      ]
    })
  ]
})
