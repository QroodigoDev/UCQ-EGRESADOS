<template>
  <button
    :class="computedClass"
    :type="type"
    :disabled="!loaded || disabled"
    :id="id">
    <slot/>
  </button>
</template>

<script type="text/javascript">

export default {
  props: {
    sitekey: {
      type: String,
      required: true,
      default: ''
    },
    badge: {
      type: String,
      required: false,
      default: ''
    },
    callback: {
      type: Function,
      required: true,
      default: () => {
        return {}
      }
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    id: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: false,
      default: ''
    }
  },

  data () {
    return {
      widgetId: false,
      loaded: false
    }
  },

  methods: {
    onRecaptchaExpired () {
      window.grecaptcha.reset(this.widgetId)
    },
    onRecaptchaError () {
      this.$toasted.show(`${this.$icon(this.$far.faExclamationCircle).html} Problemas con tu conexión a internet inténtalo de nuevo.`, {
        position: 'bottom-right',
        duration: 3000,
        type: 'error'
      })
      this.renderWait()
    },
    async renders () {
      try {
        this.widgetId = window.grecaptcha.render(this.id, {
          sitekey: this.sitekey,
          size: 'invisible',
          badge: this.badge || 'bottomright',
          theme: 'dark',
          'expired-callback': this.onRecaptchaExpired,
          'error-callback': this.onRecaptchaError,
          callback: token => {
            this.callback(token)
            window.grecaptcha.reset(this.widgetId)
          }
        })
        this.loaded = true
      } catch (error) {
        this.renderWait()
      }
    },
    renderWait () {
      var self = this
      setTimeout(() => {
        if (typeof window.grecaptcha !== 'undefined' && typeof window.grecaptcha.render === 'function' && typeof this.sitekey !== 'undefined' && typeof this.id !== 'undefined') {
          self.renders()
        } else {
          self.renderWait()
        }
      }, 1000)
    }
  },
  computed: {
    computedClass () {
      var classArray = ['g-recaptcha']
      return classArray
    }
  },
  async mounted () {
    console.log(window.grecaptcha)
    if (typeof window.grecaptcha !== 'undefined') {
      if (typeof window.grecaptcha.render === 'function' && typeof this.sitekey !== 'undefined' && typeof this.id !== 'undefined') {
        this.renders()
      } else {
        this.renderWait()
      }
    }
  },
  beforeDestroy () {
    window.grecaptcha.reset(this.widgetId)
  }
}
</script>
