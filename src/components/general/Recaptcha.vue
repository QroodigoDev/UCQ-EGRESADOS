<template>
  <button
    :class="computedClass"
    :type="type"
    :id="id"
    @click.prevent="execute">
    <slot :executing="executing"/>
  </button>
</template>

<script>
import axiosAdelaService from '@/axios/axiosAdelaService'

export default {
  props: {
    sitekey: {
      type: String,
      required: true,
      default: ''
    },
    action: {
      type: String,
      required: true,
      default: 'default'
    },
    successCallback: {
      type: Function,
      required: true,
      default: () => {}
    },
    errorCallback: {
      type: Function,
      required: false,
      default: () => {}
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
      executing: false
    }
  },
  computed: {
    computedClass () {
      var classArray = ['g-recaptcha']
      return classArray
    }
  },
  methods: {
    execute () {
      this.executing = true
      window.grecaptcha.ready((param) => {
        window.grecaptcha.execute(this.sitekey, { action: this.action }).then(async (token) => {
          const response = await axiosAdelaService.post('/validateCaptcha', JSON.stringify({
            captcha: token
          }))
          if (response.data.success) {
            await this.successCallback()
          } else {
            await this.errorCallback()
          }
          this.executing = false
        }).catch((error) => {
          this.executing = false
          console.log(error)
        })
      })
    }
  }
}
</script>

<style>

</style>
