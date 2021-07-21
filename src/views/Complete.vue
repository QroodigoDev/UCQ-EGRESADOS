<template>
  <div class="accont">
    <div class="container-fluid bg-01 mt-5" style="padding-bottom:100px;">
    <div class="row">
        <div class="col-md-5 offset-md-1 mt-5 fontblack ">
            <figure>
                <img src="@/assets/img/red-de-egresados.svg" alt="Red de egresados" width="90%">
            </figure>
            <strong><b class="GothamBlack">¡Bienvenido Guerrero (a)! Esta plataforma es para ti.</b></strong>
            <p>Completa tu registro y podrás ponerte en contacto con tus ex compañeros de generación. También podrás ingresar al grupo privado en Facebook, donde podrás generar vínculos de negocio con otros egresados. </p>

            <p>Formar parte de la Red de Egresados, tiene grandes beneficios para ti, eventos especiales, cursos de educación continua, descuentos y becas para posgrados y muchas cosas más que te ayudarán a continuar con tu desarrollo profesional.</p>

            <figure class="imagenGuerrero">
                <img src="@/assets/img/guerrero-egresado.svg" width="50%" alt="Guerrero  Egresado">
            </figure>
        </div>
        <div class="col-md-6">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div class="col-md-10">
                            <div class="col-12 form3"><br>
                                <h2 class="text-center GothamUltra">COMPLETA TUS DATOS</h2>
                                <h3 class="text-center textGreen GothamBold">PARA TU PERFIL</h3>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-4">
                                                <label class="GothamLight">Foto de perfil</label>
                                            </div>
                                            <div class="col-7">
                                                <input type="email" :placeholder="placeholderX" class="form-control clickInput" @click="subirFoto" readonly>
                                                <input type="file" id="file" ref="file" name="foto" style="display:none" class="form-control inputForm3 GothamLight" v-on:change="handleFileUpload()" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-4">
                                                <label class="GothamLight">Correo electrónico</label>
                                            </div>
                                            <div class="col-7">
                                                <input type="email" v-model="email" class="form-control inputForm3 GothamLight" readonly>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-4">
                                                <label class="GothamLight">Perfil de Linkedind</label>
                                            </div>
                                            <div class="col-7">
                                                <input type="text" v-model="linkedind" class="form-control inputForm3 GothamLight" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-4">
                                                <label class="GothamLight">Perfil de Facebook</label>
                                            </div>
                                            <div class="col-7">
                                                <input type="text" v-model="facebook" class="form-control inputForm3 GothamLight" required>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-4">
                                                <label class="GothamLight">Sobre mí</label>
                                            </div>
                                            <div class="col-7">
                                                <textarea class="form-control inputForm3 GothamItalik" v-model="about" placeholder="¿Que busco en la Red de Egresados?" rows="3" required></textarea>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <div class="row">
                                            <div class="col-2 text-right p-0">
                                                <input type="checkbox" class="checkbox inputForm3 GothamLight" style="transform: scale(2);" required>
                                            </div>
                                            <div class="col-9 text-center">
                                                <p class="aviso GothamItalik">Acepto el uso de mi imagen para esta plataforma, así como mis datos para el envío de información.</p>
                                                <button class="btnClick" @click="saveChanges">
                                                <img src="@/assets/img/enviar.svg" width="60%"></button><br><br>
                                            </div>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import formatData from '@/mixins/formatAxios'
import axiosAdelaService from '@/axios/axiosAdelaService'

export default {
  mixins: [formatData],
  data () {
    return {
      file: [],
      email: '',
      linkedind: '',
      facebook: '',
      about: '',
      placeholderX: '+ Subir Foto'
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
      this.placeholderX = this.file.name
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
        if (response.status === 200) {
          this.$toastedPush({
            message: 'Egresado actualizado correctamente',
            type: 'success'
          })
          this.$router.push({ name: 'egresados' })
        }
      } catch (error) {
        this.isLoading = false
        this.showError(error.message)
      }
    },
    subirFoto () {
      this.$refs.file.click()
    }
  },
  mounted () {
    this.email = this.user.correo
  }
}
</script>
<style>
.btnClick {
    border: none;
    background: transparent;
}
.form3 {
  width: 709.07px;
  height: 613.73px;
  background-image: url("./../../public/img/bf-blue.svg");
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  color: white;
  font-size: 1vw;
  background-color: hsla(0,0%,100%,.3);
  border: 0;
  border-radius: 0;
  padding: 0;
  font-family: Book;
}
.inputForm3::placeholder {
  color: white;
}
.inputForm3 {
  background: #6c859a;
  color: white;
}
.form-control:disabled, .form-control[readonly] {
  background: #6c859a;
  color: white;
}
label {
  margin-left: 3rem;
}
.fontblack p, strong {
  color: #0A3356;
  /* font-size: 18px; */
  /* font-size: clamp(10px, 1.5vw, 25px); */
  font-size: 23pt;
}
.checkbox {
  border: white;
  background: transparent;
}
.clickInput::-webkit-input-placeholder {
  text-align: center;
  line-height: 100px;/* Centrado vertical */
  color: white;
}
.textGreen {
  color: #749C40;
}
.aviso {
  font-size: 15px;
}
@media only screen and (max-width:850px) {
  .form3 {
    font-size: 15px;
  }
  label {
    margin-left: 20px;
  }
  .imagenGuerrero {
    display: none;
  }
}
</style>
