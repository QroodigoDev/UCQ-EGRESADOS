<template lang="html">
  <b-container class="not-found bv-example-row text-center mt-5">
  <b-row class="justify-content-md-center">
    <b-col sm="8" class="mt-5 title">404</b-col>
  </b-row>
  <b-row class="justify-content-md-center">
    <b-col sm="8" class="subtitle mb-2">PÁGINA NO ENCONTRADA</b-col>
  </b-row>
  <b-row class="justify-content-md-center">
    <b-col sm="8" class="text mb-4">La página que estás buscando no existe o ha sido removida.</b-col>
  </b-row>
  <b-row class="justify-content-md-center">
    <b-col sm="8">
      <span @click="atras()" class="btn-back">
        REGRESAR
      </span>
    </b-col>
  </b-row>
  <b-row class="justify-content-md-center">
    <b-col sm="8"><img src="@/assets/img/page-not-found.svg" width="100%"></b-col>
  </b-row>
  </b-container>
  <!-- <div class="container errorpage">
    <div id="cloud"><span class='shadow'/></div>
    <p class="no404">4 0 4</p>
    <div class="row">
        <img src="@/assets/img/page-not-found.svg" width="90%">
    </div>
    <p>Estas perdido<br ><span
      @click="atras()"
      class="link">Regresa por donde venías.</span></p>
  </div> -->
</template>

<script>
import { BContainer, BRow, BCol } from 'bootstrap-vue'

export default {
  components: {
    BContainer,
    BRow,
    BCol
  },
  methods: {
    atras () {
      window.history.go(-1)
    }
  }
}
</script>

<style lang="css">
</style>
