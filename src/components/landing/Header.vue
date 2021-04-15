<template>
  <div class="start-header mt-5">
    <div class="header-background">
      <div class="container-fluid bg-01" style="padding-bottom:100px;">
        <div class="row">
          <div class="col-md-5 offset-md-1">
            <figure>
                <img src="@/assets/img/red-de-egresados.svg" alt="Red de egresados" width="80%">
            </figure>
            <p><strong>¡Hola! La Red de Egresados Cuauhtémoc</strong> es una plataforma virtual donde podrás ponerte en contacto con tus compañeros de generación, también podrás recibir todos los beneficios que la Universidad Cuauhtémoc ofrece, además de recibir descuentos e invitaciones exlusivas, para participar en eventos y programas.</p>
            <p>Cuando llenes el formulario de registro con todos tus datos te llegará un correo de confirmación, con <strong>tu contraseña para iniciar sesión</strong>.</p>

            <ol start="1">
                <li><strong>Envía el formulario</strong> con todos tus datos.</li>
                <li><strong>Recibirás</strong> un correo con <strong>tu contraseña</strong>.</li>
                <li><strong>Ingresa a la plataforma</strong> para completar tu registro.</li>
                <li>Disfruta y <strong>reconecta</strong>.</li>
            </ol>
          </div>
          <div class="col-md-6">
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <div class="col-md-6">
                    <div class="col-12 form1">
                      <br>
                      <h2 class="text-center">REGÍSTRATE <br> Y  RECONECTA</h2>
                      <h3 class="text-center">CON TU GENERACIÓN</h3>
                      <center>
                        <small  class="ft1">FAVOR DE USAR SÓLO MAYÚSCULAS SIN ACENTOS XD</small></center>
                          <div class="form-group">
                            <input type="text" v-model="name" placeholder="Nombre" class="form-control" required>
                          </div>
                          <div class="form-group">
                            <input type="text" v-model="lastname" placeholder="Apellido Paterno" class="form-control" required>
                          </div>
                          <div class="form-group">
                            <input type="text" v-model="lastname2" placeholder="Apellido Materno" class="form-control" required>
                          </div>
                          <div class="form-group">
                            <select class="form-control" v-model="career" required>
                              <option value="">Selecciona una carrera</option>
                              <option v-for="(carrera, index) in carreras" :value="carrera" :key="index">{{carrera.nombre}}</option>
                            </select>
                          </div>
                          <div class="form-group">
                            <input type="email" v-model="email" placeholder="Correo (e-mail)" class="form-control" required>
                          </div>
                          <div class="form-group">
                            <input type="text" v-model="phone" placeholder="Número celular o Whatsapp" class="form-control" required>
                          </div>
                          <div class="form-group">
                            <input type="text" v-model="generation" placeholder="Generación de origen" class="form-control" required>
                          </div>
                          <div class="form-group">
                            <input type="text" v-model="curp" placeholder="CURP" class="form-control" required>
                          </div>
                          <div class="col-12">
                            <div class="row">
                              <div class="col-md-2" style="padding-top:5px;">
                                <input type="checkbox" name="tramite" class="form-control">
                              </div>
                              <div class="col-md-10" style="padding:10px 0px 0px 0px;">
                                <p style="color:white;font-size:12px;line-height:12px;font-family:'Light';font-weight:500;">Tengo trámites de egreso pendientes, quiero contactarme con la Universidad</p>
                              </div>
                            </div>
                          </div>
                          <br>
                          <h2 class="text-center">Únete a la Red</h2>
                          <button class="btnClick" @click="addEgresado">
                            <img src="@/assets/img/enviar.svg" class="w-75">
                          </button>
                      </div>
                    </div>
                    <div class="col-md-6">
                      <br><br><br><br><br>
                      <div class="col-12 form2"><br>
                      <h2 class="text-center">¿Ya eres usuario?<br><font style="color:#0a3356;">inicia sesión</font></h2>
                        <div class="form-group">
                          <input type="email" v-model="loginEmail" placeholder="E-mail" class="form-control">
                        </div>
                        <div class="form-group">
                          <input type="password" v-model="loginPassword" placeholder="Password" class="form-control" required>
                        </div>
                        <br>
                        <button class="btnClick" @click="login">
                          <img src="@/assets/img/iniciar.svg" width="60%">
                        </button>
                    </div>
                    <br><br><br>
                    <div class="col-12 p-0 text-right">
                      <figure>
                        <img src="@/assets/img/guerrero-egresado.svg" width="70%" alt="Guerrero  Egresado">
                      </figure>
                    </div>
                    <br><br>
                  </div>
                </div>
              </div>
              <div class="col-md-12"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axiosAdelaService from '@/axios/axiosAdelaService'
import formatData from '@/mixins/formatAxios'
import { mapActions } from 'vuex'

export default {
  mixins: [formatData],
  data () {
    return {
      name: '',
      lastname: '',
      lastname2: '',
      career: '',
      email: '',
      phone: '',
      generation: '',
      curp: '',
      carreras: [],
      loginEmail: '',
      loginPassword: ''
    }
  },
  methods: {
    ...mapActions({
      signIn: 'signIn'
    }),
    async getCarreras () {
      try {
        const items = {
          function: 'getCarreras'
        }
        const params = await this.toFormData(items)
        const response = await axiosAdelaService.post('/', params)
        console.log('getCarreras', response)
        if (response.status === 200) {
          this.carreras = response.data
        }
      } catch (error) {
        console.log(error)
        this.showError('No se pudieron obtener las carreras intentalo mas tarde.')
      }
    },
    async addEgresado () {
      try {
        const items = {
          function: 'addEgresado',
          name: this.name,
          lastname: this.lastname,
          lastname2: this.lastname2,
          career: this.career.id,
          email: this.email,
          phone: this.phone,
          generation: this.generation,
          curp: this.curp
        }
        const params = await this.toFormData(items)
        const response = await axiosAdelaService.post('/', params)
        console.log('addEgresado', response)
        if (response.status === 200) {
          if (response.data.error !== undefined) {
            this.showError(response.data.error)
          } else {
            this.$toastedPush({
              message: 'Egresado agregado correctamente',
              type: 'success'
            })
          }
        }
      } catch (error) {
        console.log(error)
        this.showError('No se pudo agregar el egresado, intentalo mas tarde.')
      }
    },
    async login () {
      try {
        const params = await this.toFormData({
          function: 'login',
          email: this.loginEmail,
          password: this.loginPassword
        })
        const login = await this.signIn(params)
        console.log('Login login', login, login.authenticated && login.forceResetPassword)
        if (login.authenticated && login.admin) {
          this.$router.push({ name: 'dashboard' })
        } else if (login.authenticated && !login.admin && !login.complete) {
          this.$router.push({ name: 'complete' })
        } else {
          this.showError('Usuario o contraseña incorretos, intentalo de nuevo.')
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        this.showError(error.message)
      }
    }
  },
  mounted () {
    this.getCarreras()
  }
}
</script>

<style scoped lang="scss">
  .btnClick {
    border: none;
    background: transparent;
  }
  h2 {
    font-size: 2vw;
    font-family: Ultra;
    color: #fff;
  }
  h3 {
    font-size: 1.4vw;
    font-family: Bold;
    color: #749c40;
  }
  .form1 {
    background-image: url("./../../../public/img/bf-blue.svg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .form2 {
    background-image: url("./../../../public/img/bg-green.svg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .form-group {
    margin: 0;
    font-family: Light;
    color: #fff;
    background-color: hsla(0,0%,100%,.4);
    border: 0;
    border-radius: 0;
    padding: 0 15px;
  }
  .form-control {
    font-size: 1vw;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    border-bottom: 1px solid #fff;
    padding: 0;
    color: #fff;
    font-family: Book;
  }
  input::placeholder {
    color: white;
  }
  .header-background {
    background: url("./../../../public/img/fondo1.png") no-repeat;
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    margin-top: -40px;
    z-index: 99;
    padding-top: 80px;
  }
  ul li::before {
    content: url("./../../../public/img/circulo-signal.svg"); /* Add content: \2022 is the CSS Code/unicode for a bullet */
    font-size:14px;
    vertical-align:middle;
    line-height:20px;
    font-weight: bold; /* If you want it to be bold */
    display: inline-block; /* Needed to add space between the bullet and the text */
    width: 1em; /* Also needed for space (tweak if needed) */
    margin-left: -1em; /* Also needed for space (tweak if needed) */
  }
  .medida1 {
    position: relative;
    flex: 0 0 70%;
    max-width: 70%;
  }
  .medida2 {
    flex: 0 0 30%;
    max-width: 30%;
  }
  .line-baner {
    position: initial;
    background: url("./../../../public/img/puntos.svg") no-repeat;
    height: 280px;
    background-position: left;
  }

    @media only screen and (max-width:1920px){
      .medida1 {
        flex: 0 0 55%;
        max-width: 55%;
      }
      .medida2 {
        flex: 0 0 45%;
        max-width: 45%;
      }
      .banner-text {
            padding-top: 30px;
            padding-left: 220px;
            width: 500px !important;
      }
    }

    @media only screen and (max-width:1600px){
      .medida1 {
        flex: 0 0 90%;
        max-width: 90%;
      }
      .medida2 {
        flex: 0 0 40%;
        max-width: 40%;
      }
      .banner-text {
            padding-top: 30px;
            color: #503691;
            font-size: 22px;
            font-weight: bold;
            width: 200px;
            display:block;
            // margin:auto;
            text-align: right;
      }
    }

    @media only screen and (max-width: 1440px) {
      .container-fluid {
        .medida1 {
          height: 280px;
          flex: 0 0 66%;
          max-width: 66%;
        }
        .medida2 {
          flex: 0 0 34%;
          max-width: 34%;
        }
      }
      .banner-text {
            padding-top: 30px;
            color: #503691;
            font-size: 22px;
            font-weight: bold;
            width: 200px;
            display:block;
            // margin:auto;
            text-align: right;
      }
    }

    @media only screen and (max-width:1180px){
      .medida1 {
        flex: 0 0 70%;
        max-width: 70%;
      }
      .medida2 {
        flex: 0 0 30%;
        max-width: 30%;
      }
    }

    @media only screen and (max-width:850px) {
      .start-header {
        .card {
          .card-body {
            .vertical-alingn-right {
              border-left:#f5ad91 0px solid;
              padding-left: 0px;
            }
          }
          .medida2 {
            background-color: #503691;
            display: none;
          }
        }
      }
      .line-baner {
        position: initial;
        background: url("./../../../public/img/puntos.svg") no-repeat;
        height: 280px;
        background-position: left;
      }
      .container-fluid {
        display: none;
      }
  }

  @media only screen and (max-width: 420px) {
    .start-header {
      width: 106%;
    }
  }

  @media only screen and (max-width: 375px) {
    .start-header {
      width: 102%;
    }
  }

  @media only screen and (max-width:360px) {
    .start-header {
      width: 108%;
      .card {
        .card-body {
          .vertical-alingn-right {
            border-left:#f5ad91 0px solid;
            padding-left: 0px;
          }
        }
        .medida2 {
          background-color: #503691;
          display: none;
        }
      }
    }
    .line-baner {
      position: initial;
      background: url("./../../../public/img/puntos.svg") no-repeat;
      height: 280px;
      background-position: left;
    }
    .container-fluid {
      display: none;
    }
  }

  @media only screen and (max-width: 320px) {
    .start-header {
      width: 122%;
    }
  }
</style>
