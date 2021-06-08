<template lang="html">
  <div class="versionXD">
    Egresados-UCQ version: <span id="version-local">{{ currentVersion }}</span><span id="version-remote" class="d-none">{{ newVersion }}</span>
  </div>
</template>

<script>
import axiosAdelaService from '@/axios/axiosAdelaService'
import config from '@/config'

export default {
  data () {
    return {
      newVersion: ''
    }
  },
  methods: {
    async updateApp () {
      const keyList = await caches.keys()
      for (let index = 0; index < keyList.length; index++) {
        const key = keyList[index]
        const origin = location.origin
        if (key.indexOf(origin) !== -1) {
          const cache = await caches.open(key)
          const cacheKeysList = await cache.keys()
          for (let index = 0; index < cacheKeysList.length; index++) {
            const request = cacheKeysList[index]
            await cache.delete(request)
          }
          break
        }
      }
      setTimeout(() => {
        location.reload(true)
      }, 5000)
    },
    async getVersion (env) {
      const result = await axiosAdelaService.post('/getVersion', JSON.stringify({
        env: this.branch
      }))
      if (result.data.version) {
        this.newVersion = result.data.version
      }
    }
  },
  computed: {
    env () {
      return config.app.env
    },
    currentVersion () {
      return process.env.VUE_APP_VERSION
    },
    repo () {
      return process.env.VUE_APP_REPO
    },
    branch () {
      return this.env === 'production' ? 'master' : 'desarrollo'
    }
  },
  watch: {
    newVersion (val) {
      if (val !== this.currentVersion && this.env === 'production') {
        this.$toastedPush({
          message: `Nuevo contenido disponible. Ver. ${this.newVersion}.`,
          type: 'info',
          duration: 3 * 60 * 1000,
          action: {
            text: 'APLICAR',
            onClick: (e, toastObject) => {
              toastObject.goAway(0)
              this.updateApp()
            }
          }
        })
      }
    }
  },
  mounted () {
    this.getVersion()
    setInterval(this.getVersion, 1000 * 60 * 10)
  }
}
</script>

<style>
.versionXD {
}
</style>
