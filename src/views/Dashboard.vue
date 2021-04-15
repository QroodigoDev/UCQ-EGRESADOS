<template>
  <div class="reports">
    <b-breadcrumb :items="breadcrumb"></b-breadcrumb>
    <router-view></router-view>
  </div>
</template>
<script>
import { BBreadcrumb } from 'bootstrap-vue'

export default {
  components: {
    BBreadcrumb
  },
  data () {
    return {
      breadcrumb: [
        {
          text: 'Tablero',
          to: { name: 'dashboard' }
        },
        {
          text: 'Recibos',
          to: { name: 'receipts' }
        },
        {
          text: 'Lista',
          active: true
        }
      ]
    }
  }
}
</script>
