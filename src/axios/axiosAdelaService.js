import get from 'lodash/get'
import axios from 'axios'
import * as Sentry from '@sentry/browser'
import config from '@/config'
import store from '@/store'
import router from '@/router'

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json'
  },
  baseURL: config.adela.apiUrl
})

instance.interceptors.request.use((config) => {
  const token = get(store, 'state.auth.token', false)
  const transactionId = get(store, 'state.sentry.transactionId', false)
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  if (transactionId) {
    config.headers['X-Transaction-ID'] = transactionId
  }
  return config
}, (error) => {
  Sentry.captureException(error)
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  return response
}, (error) => {
  const status = get(error, 'response.status', 500)
  if (status === 401) {
    router.push({ name: 'signin', params: { session_expired: true } })
  } else {
    Sentry.captureException(error)
    return Promise.reject(error)
  }
})

export default instance
