<template>
  <div class="accont">
    <div class="container transparentDiv mt-5" style="padding-bottom:100px;">
        <div class="row">
            <div class="col-12 text-center">
                <figure>
                    <img src="@/assets/img/red-de-egresados.svg" alt="Red de egresados" width="40%">
                </figure>
                <figure class="col-10 mt-5 text-right">
                    <img src="@/assets/img/guerrero-egresado.svg" width="20%" alt="Guerrero  Egresado">
                </figure>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center bg-gray">
                <p><strong>Comienza a reconectar con tus ex compañeros de generación</strong>, y recibe todos los beneficios que la Universidad Cuauhtémoc tiene para ti. No olvides unirte al grupo privado de Guerreros Egresados. </p>
            </div>
        </div>
        <div class="row">
            <div class="col-6 text-center">
                <figure class="mt-5 displayInlineX">
                    <img src="@/assets/img/uc-preparado.png" width="60%" alt="Guerrero  Egresado">
                </figure>
            </div>
            <div class="col-6 text-center">
                <figure class="mt-5 displayInlineX">
                    <img src="@/assets/img/red-facebook.png" width="60%" alt="Guerrero  Egresado">
                </figure>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center rec mt-5">
                <h2>RECONECTA</h2>
                <h3>CON TU GENERACIÓN</h3>
                <h3>-</h3>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-center mt-5">
                <b-col lg="6" class="my-1">
                    <b-form-group
                    label="Filter"
                    label-for="filter-input"
                    label-cols-sm="3"
                    label-align-sm="right"
                    label-size="sm"
                    class="mb-0">
                    <b-input-group size="sm">
                        <b-form-input
                        id="filter-input"
                        v-model="filter"
                        type="search"
                        placeholder="Type to Search"
                        ></b-form-input>

                        <b-input-group-append>
                        <b-button :disabled="!filter" @click="filter = ''">Clear</b-button>
                        </b-input-group-append>
                    </b-input-group>
                    </b-form-group>
                </b-col>
                <b-table :items="items" :fields="fields" striped responsive="sm" @filtered="onFiltered">
                    <template #cell(actions)="row">
                        <b-button size="sm" @click="row.toggleDetails">
                            {{ row.detailsShowing ? 'Ocultar' : 'Mostrar' }} Details
                        </b-button>
                    </template>
                    <template #row-details="row">
                        <b-card class="cardEgresado">
                            <div class="col-12 card-body">
                                <div class="row">
                                    <div class="col-md-3 col-4 offset-md-0 offset-4">
                                        <img :src="'http://ucq.edu.mx/qroodigo/images/' + row.item.foto" width="100%" :alt="row.item.fullname">
                                    </div>
                                <div class="col-md-9">
                                    <div class="row">
                                        <div class="col-12">
                                            <h2>{{row.item.fullname}}</h2>
                                            <h3>{{row.item.carrera}}</h3>
                                            <h3>{{row.item.generacion}}</h3>
                                            <h2>Acerca de mí:</h2>
                                            <p><b>{{row.item.descripcion}}</b></p>
                                        </div>
                                        <div class="col-md-6 mt-3">
                                            <a :href="row.item.facebook" target="_blank" class="row">
                                                <div class="col-2">
                                                    <img src="@/assets/img/facebook.svg" alt="mail" class="w-100">
                                                </div>
                                                <div class="col-10"> {{row.item.facebook}} </div>
                                            </a>
                                        </div>
                                        <div class="col-md-6">
                                            <a :href="row.item.linkedin" target="_blank" class="row">
                                                <div class="col-2">
                                                    <img src="@/assets/img/link.svg" alt="mail" class="w-100">
                                                </div>
                                                <div class="col-10"> {{row.item.linkedin}} </div>
                                            </a>
                                        </div>
                                        <div class="col-md-6">
                                            <a :href="row.item.email" target="_blank" class="row">
                                                <div class="col-2">
                                                    <img src="@/assets/img/mail.svg" alt="mail" class="w-100">
                                                </div>
                                                <div class="col-10"> {{row.item.email}} </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </b-card>
                    </template>
                </b-table>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import formatData from '@/mixins/formatAxios'
import axiosAdelaService from '@/axios/axiosAdelaService'
import {
  BTable,
  BButton,
  BCard,
  BCol,
  BFormGroup,
  BInputGroup,
  BInputGroupAppend,
  BFormInput
} from 'bootstrap-vue'

export default {
  mixins: [formatData],
  components: {
    BTable,
    BButton,
    BCard,
    BCol,
    BFormGroup,
    BInputGroup,
    BFormInput,
    BInputGroupAppend
  },
  data () {
    return {
      file: [],
      email: '',
      linkedind: '',
      facebook: '',
      about: '',
      fields: [
        { key: 'fullname', label: 'Nombre', sortable: true, sortDirection: 'desc' },
        { key: 'carrera', label: 'Carrera', sortable: true, class: 'text-center' },
        {
          key: 'generacion',
          label: 'Generacion',
          sortable: true
        },
        { key: 'contact', label: 'Contacto', sortable: true, class: 'text-center' },
        { key: 'actions', label: 'Actions' }],
      items: [],
      filter: null
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
      console.log(this.file)
    },
    async saveChanges () {
      try {
        const params = await this.toFormData({
          function: 'updateEgresado',
          email: this.email,
          linkedind: this.linkedind,
          facebook: this.facebook,
          about: this.about,
          image: this.file
        })
        const response = await axiosAdelaService.post('/', params)
        console.log('updateEgresado', response)
      } catch (error) {
        this.isLoading = false
        this.showError(error.message)
      }
    },
    async getEgresado () {
      try {
        const params = await this.toFormData({
          function: 'getEgresado'
        })
        const response = await axiosAdelaService.post('/', params)
        console.log(response.data)
        if (response.status === 200) {
          this.items = response.data
        }
      } catch (error) {
        this.isLoading = false
        this.showError(error.message)
      }
    },
    onFiltered (filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length
      this.currentPage = 1
    }
  },
  mounted () {
    this.email = this.user.correo
    this.getEgresado()
  }
}
</script>
<style>
.bg-gray {
    background-color: #f0f0f0;
    text-align: justify;
    padding: 30px;
    font-size: 30px;
}
.transparentDiv {
    opacity: 0.8
}
.displayInlineX {
    display: inline-block;
}
.rec h2 {
    color: #0a3356;
    font-size: 4vw;
    font-weight: bolder;
}
.rec h3 {
    font-family: Bold;
    color: #749c40;
    font-size: 2vw;
    letter-spacing: 2px;
}
.cardEgresado {
    background: #0a3356;
    color: white;
}
</style>
