import * as Sentry from '@sentry/browser'
import { v1 as uuidv1 } from 'uuid'

const sentry = {
  state: {
    transactionId: ''
  },
  mutations: {
    storeTransactionId (state, id) {
      state.transactionId = id
    }
  },
  actions: {
    setTransactionId ({ commit }) {
      const transactionId = uuidv1()
      commit('storeTransactionId', transactionId)
      Sentry.configureScope((scope) => {
        scope.setTag('transaction_id', transactionId)
      })
    }
  },
  getters: {
    getTransactionId (state) {
      return state.transactionId
    }
  }
}

export default sentry
