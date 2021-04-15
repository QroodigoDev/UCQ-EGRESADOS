<template>
  <div>
    <router-view/>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import config from '@/config'

export default {
  methods: {
    ...mapActions({
      setTransactionId: 'setTransactionId'
    })
  },
  created () {
    this.setTransactionId()
    if (!document.getElementById('__RECAPTCHA_SCRIPT')) {
      const script = document.createElement('script')
      script.id = '__RECAPTCHA_SCRIPT'
      script.src = `https://www.google.com/recaptcha/api.js?render=${config.reCAPTCHA.siteKey}`
      script.async = true
      script.defer = true

      document.head.appendChild(script)
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss">
@import '@/assets/sass/app.scss';
@import '@/assets/sass/styles/index.scss';
</style>
