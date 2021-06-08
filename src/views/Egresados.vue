<template>
  <div class="accont">
    <div class="col-1 ml-5 salirDiv" style="">
      <a class="dropdown-item" @click.prevent="logout">
        Salir
        <!-- <font-awesome-icon :icon="['fal', 'sign-out']" /> -->
      </a>
    </div>
    <!-- // transparentDiv -->
    <div class="container-fluid mt-5" style="padding-bottom:100px;">
        <div class="row">
            <div class="col-md-10 col-sm-12 col-lg-12 col-xs-12 text-center">
                <figure>
                    <img src="@/assets/img/red-de-egresados.svg" class="imgEgresados" alt="Red de egresados" width="40%">
                </figure>
                <figure class="col-10 mt-5 text-right">
                    <img src="@/assets/img/guerrero-egresado.svg" class="imgEgresados2" width="20%" alt="Guerrero  Egresado">
                </figure>
            </div>
        </div>
        <div class="row text-center">
            <div class="col-12 text-center">
                <p class="textHeaderXD GothamBook"><b class="GothamBlack">Comienza a reconectar con tus ex compañeros</b> de generación, y recibe todos los beneficios que la Universidad Cuauhtémoc tiene para ti. No olvides unirte al grupo privado de Guerreros Egresados. </p>
            </div>
        </div>
        <div class="row">
            <div class="col-6 text-center socialMedia1">
              <a href="https://www.ucq.edu.mx/uc/maestrias-y-diplomados" target="_blank">
                <figure class="mt-5 displayInlineX">
                  <img src="@/assets/img/uc-preparado.png" class="imgSocialMedia" width="60%" alt="Guerrero  Egresado">
                </figure>
              </a>
            </div>
            <div class="col-6 text-center socialMedia2">
              <a href="https://www.facebook.com/groups/4572306639461540/?ref=share" target="_blank">
                <figure class="mt-5 displayInlineX">
                  <img src="@/assets/img/red-facebook.png" class="imgSocialMedia" width="60%" alt="Guerrero  Egresado">
                </figure>
              </a>
            </div>
        </div>
        <div class="row franjaAzul"></div>
        <div class="row">
            <div class="col-12 rec mt-5 ml-5">
                <h2 class="GothamUltra">RECONECTA</h2>
                <h3 class="GothamBold">CON TU GENERACIÓN</h3>
                <h3 class="GothamBold">-</h3>
            </div>
        </div>
        <div class="row justify-content-end">
            <b-col lg="6" class="my-1 inputFilter text-rigth">
                <b-form-group
                  label=""
                  label-for="filter-input"
                  label-cols-sm="3"
                  label-align-sm="right"
                  label-size="sm"
                  class="mb-0"
                >
                  <b-input-group size="sm">
                    <b-form-input
                      id="filter-input"
                      v-model="filter"
                      type="search"
                      placeholder="Busca a tus compañeros"
                      class="searchInput GothamItalik"
                    ></b-form-input>

                    <b-input-group-append>
                      <b-button class="btnfilter" :disabled="!filter" @click="filter = ''">
                        <font-awesome-icon :icon="['fa', 'search']" class="fa-2x"/>
                      </b-button>
                    </b-input-group-append>
                  </b-input-group>
                </b-form-group>
              </b-col>
          </div>
        <div class="row">
            <div class="col-12 mt-5">
                <b-table :items="items" :fields="fields" striped responsive="sm" :tbody-tr-class="'GothamBlack'" @filtered="onFiltered" :filter="filter">
                  <template #cell(contact)="row" class="text-center">
                    <div class="row text-center">
                      <div class="col-2 text-center">
                        <a :href="row.item.facebook" target="_blank">
                          <img src="@/assets/img/facebook.svg" alt="mail" class="ziseImage">
                        </a>
                      </div>
                      <div class="col-2 text-center">
                        <a :href="row.item.linkedin" target="_blank">
                            <img src="@/assets/img/link.svg" alt="mail" class="ziseImage">
                        </a>
                      </div>
                      <div class="col-2 text-center">
                        <a :href="row.item.email" target="_blank">
                            <img src="@/assets/img/mail.svg" alt="mail" class="ziseImage">
                        </a>
                      </div>
                    </div>
                  </template>
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
                                    <div class="row text-left">
                                        <div class="col-12 fontInfoUser">
                                            <h2 class="GothamBlack">{{row.item.fullname}}</h2>
                                            <h3 class="GothamBook">{{row.item.carrera}}</h3>
                                            <h3 class="GothamBook">{{row.item.generacion}}</h3>
                                            <h2 class="GothamBlack">Acerca de mí:</h2>
                                            <p><b class="GothamBook">{{row.item.descripcion}}</b></p>
                                        </div>
                                        <div class="col-md-6 mt-3">
                                            <a :href="row.item.facebook" target="_blank" class="row">
                                                <div class="col-2">
                                                    <img src="@/assets/img/facebook.svg" alt="mail" class="w-100">
                                                </div>
                                                <div class="col-10 mt-4 GothamBook"> {{row.item.facebook}} </div>
                                            </a>
                                        </div>
                                        <div class="col-md-6 mt-3">
                                            <a :href="row.item.linkedin" target="_blank" class="row">
                                                <div class="col-2">
                                                    <img src="@/assets/img/link.svg" alt="mail" class="w-100">
                                                </div>
                                                <div class="col-10 mt-4 GothamBook"> {{row.item.linkedin}} </div>
                                            </a>
                                        </div>
                                        <div class="col-md-6 mt-3">
                                            <a :href="row.item.email" target="_blank" class="row">
                                                <div class="col-2">
                                                    <img src="@/assets/img/mail.svg" alt="mail" class="w-100">
                                                </div>
                                                <div class="col-10 mt-4 GothamBook"> {{row.item.email}} </div>
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
import { mapGetters, mapActions } from 'vuex'
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
        { key: 'contact', label: 'Contacto' },
        { key: 'actions', label: 'Actions' }],
      items: [],
      filter: null
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    }),
    sortOptions () {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key }
        })
    }
  },
  methods: {
    ...mapActions({
      signOut: 'signOut'
    }),
    handleFileUpload () {
      this.file = this.$refs.file.files[0]
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
        await axiosAdelaService.post('/', params)
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
    },
    logout () {
      this.signOut()
      this.$router.push({ name: 'start' })
    }
  },
  mounted () {
    this.email = this.user.correo
    this.getEgresado()
  }
}
</script>
<style>
.ziseImage {
  width: 30px;
}
.fontInfoUser p, h3{
  font-size: 25px;
}
.fontInfoUser h2{
  font-size: 28px;
}
.table-responsive-sm th {
  font-family: "Gotham-Black";
  background: #7DAC3E !important;
  color: white;
  height: 60px;
}
.table-responsive-sm td {
  color: #002C55;
}
.table-striped tbody tr:nth-of-type(odd) {
  background: #B1B1B1 !important;
}
.table-striped tbody tr {
  background: #F0F0F0 !important;
}
.franjaAzul {
  height: 70px;
  background: #0a3356;
}
.textHeaderXD {
  margin: auto;
  width: 90%;
  background: #f0f0f0;
  color: #0A3356;
  font-size: 25px;
  line-height: 1;
}
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
.salirDiv {
  margin-top: -100px;
  margin-bottom: 100px;
}
.socialMedia1 {
  /* background: #0A3356; */
}
.socialMedia2 {
  background: #7DAC3E;
}
.inputFilter {
  border-radius: 20px;
  border-color: #0A3356;
}
.searchInput::placeholder {
  color: #0A3356;
}
.searchInput {
  border: 4px solid;
  border-radius: 20px !important;
  border-color: #0A3356 !important;
}
.btnfilter {
  border: 2px;
  color: #002C55 !important;
  border-color: #0A3356 !important;
  background: transparent !important;
}
@media only screen and (max-width: 375px) {
  .transparentDiv p {
    font-size: 18px;
  }
  .imgEgresados {
    width: 90%;
  }
  .imgEgresados2 {
    width: 60%;
  }
  .imgSocialMedia {
    width: 100%;
  }
  .rec h2 {
    font-size: 10vw;
  }
  .rec h3 {
    font-size: 5vw;
  }
}
</style>
