<template>
  <div class="start-header mt-5">
    <div class="header-background">
      <div class="container-fluid bg-01" style="padding-bottom:100px;">
        <div class="row textHeader">
          <div class="col-md-10 col-sm-12 col-lg-6 col-xs-12 ml-5">
            <figure>
                <img src="@/assets/img/red-de-egresados.svg" alt="Red de egresados" width="80%">
            </figure>
            <p class="GothamBook"><b class="GothamBold">¡Hola! La Red de Egresados Cuauhtémoc</b> es una plataforma virtual
              donde podrás ponerte en contacto con tus compañeros de
              generación, también podrás recibir todos los beneficios que la
              Universidad Cuauhtémoc ofrece, además de recibir descuentos e
              invitaciones exlusivas, para participar en eventos y formar parte de
              nuestros programas de Educación Continua.
            </p>
            <p class="GothamBook">
              Cuando llenes el formulario de registro con todos tus datos te llegará
              <br />un correo de confirmación, con <b>tu contraseña para iniciar sesión.</b>
            </p>
            <ol>
                <li class="GothamBook"><b class="GothamBold">1. Envía el formulario</b> con todos tus datos.</li>
                <li class="GothamBook"><b class="GothamBold">2. Recibirás</b> un correo con <b class="GothamBold">tu contraseña.</b></li>
                <li class="GothamBook"><b class="GothamBold">3. Ingresa a la plataforma</b> para completar tu registro.</li>
                <li class="GothamBook"><b class="GothamBold">4.</b> Disfruta y <b>reconecta.</b></li>
            </ol>
          </div>
          <div class="col-md-10 col-sm-12 col-lg-5 col-xs-12">
            <div class="row">
              <!--  -->
              <div class="col-md-10 col-sm-12 col-lg-6 col-xs-12 text-center">
                <div class="form1">
                  <br>
                  <h2 class="text-center GothamUltra">REGÍSTRATE <br> Y  RECONECTA</h2>
                  <h3 class="text-center GothamBold">CON TU GENERACIÓN</h3>
                      <div class="form-group text-center">
                        <input type="text" v-model="name" placeholder="Nombre" class="form-control GothamLight inputFormX" required>
                      </div>
                      <div class="form-group">
                        <input type="text" v-model="lastname" placeholder="Apellidos" class="form-control GothamLight inputFormX" required>
                      </div>
                      <div class="form-group">
                        <select class="form-control GothamLight inputFormX" v-model="career" required>
                          <option value="">Selecciona una carrera</option>
                          <option v-for="(carrera, index) in carreras" :value="carrera" :key="index">{{carrera.nombre}}</option>
                        </select>
                      </div>
                      <div class="form-group">
                        <input type="email" v-model="email" placeholder="Correo (e-mail)" class="form-control GothamLight inputFormX" required>
                      </div>
                      <div class="form-group">
                        <input type="text" v-model="phone" placeholder="Número celular o Whatsapp" class="form-control GothamLight inputFormX" required>
                      </div>
                      <div class="form-group">
                        <input type="text" v-model="generation" placeholder="Generación de origen" class="form-control GothamLight inputFormX" required>
                      </div>
                      <div class="form-group">
                        <input type="text" v-model="curp" placeholder="CURP" class="form-control GothamLight inputFormX" required>
                      </div>
                      <!-- <div class="col-12">
                        <div class="row">
                          <div class="col-md-2" style="padding-top:5px;">
                            <input type="checkbox" name="tramite" class="form-control">
                          </div>
                          <div class="col-md-10" style="padding:10px 0px 0px 0px;">
                            <p style="color:white;font-size:12px;line-height:12px;font-family:'Light';font-weight:500;">Tengo trámites de egreso pendientes, quiero contactarme con la Universidad</p>
                          </div>
                        </div>
                      </div> -->
                      <h2 class="text-center mt-1">Únete a la Red</h2>
                      <button class="btnClick" @click="addEgresado">
                        <img src="@/assets/img/enviar.svg" class="w-75">
                      </button>
                  </div>
                </div>
                <div class="col-md-10 col-sm-12 col-lg-6 col-xs-12">
                  <br><br><br><br><br>
                  <div class="col-12 form2"><br>
                  <h2 class="text-center GothamUltra">¿YA ERES USUARIO?<br><font style="color:#0a3356;" class="GothamBold">INICIA SESIÓN</font></h2>
                    <div class="form-group">
                      <input type="email" v-model="loginEmail" placeholder="E-mail" class="form-control inputFormX GothamLight">
                    </div>
                    <div class="form-group">
                      <input type="password" v-model="loginPassword" placeholder="Password" class="form-control inputFormX GothamLight" required>
                    </div>
                    <br>
                    <button class="btnClick" @click="login">
                      <img src="@/assets/img/iniciar.svg" width="60%">
                    </button>
                </div>
                <div class="col-12 p-0 text-right mt-5">
                  <figure>
                    <img src="@/assets/img/guerrero-egresado.svg" width="70%" alt="Guerrero  Egresado">
                  </figure>
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
        if (response.status === 200) {
          this.carreras = response.data
        }
      } catch (error) {
        this.showError('No se pudieron obtener las carreras intentalo mas tarde.')
      }
    },
    async addEgresado () {
      try {
        const nameCarrera = this.$_.find(this.carreras, (column) => {
          return parseInt(column.id) === parseInt(this.career.id)
        })
        const items = {
          function: 'addEgresado',
          name: this.name,
          lastname: this.lastname,
          lastname2: this.lastname2,
          career: this.career.id,
          careerName: nameCarrera.nombre.trim(),
          email: this.email,
          phone: this.phone,
          generation: this.generation,
          curp: this.curp
        }
        const params = await this.toFormData(items)
        const response = await axiosAdelaService.post('/', params)
        if (response.status === 200) {
          if (response.data.error !== undefined) {
            this.showError(response.data.error)
          } else {
            if (response.data.verificado === 1) {
              this.$toastedPush({
                message: 'Egresado agregado correctamente',
                type: 'success'
              })
            } else {
              this.$toastedPush({
                message: 'Upps no logramos ubicarte, pero no te preocupes alguien se pondra en contacto contigo para solucionar el problema',
                type: 'success'
              })
            }
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
        if (login.authenticated && login.admin) {
          this.$router.push({ name: 'dashboard' })
        } else if (login.authenticated && !login.admin && !login.complete) {
          this.$router.push({ name: 'complete' })
        } else if (login.authenticated && login.complete) {
          this.$router.push({ name: 'egresados' })
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
  .inputFormX {
    width: 90%;
    background: hsla(0,0%,100%,.4);
    margin: auto;
    text-indent: 20px;
  }
  .textHeader {
    color: #0A3356;
    // font-size: 23px;
    font-size: clamp(10px, 1.5vw, 18px);
  }
  .ft1 {
    color: white;
  }
  .btnClick {
    border: none;
    background: transparent;
  }
  h2 {
    font-size: 1.5vw;
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
    margin: 0;
  }
  .form2 {
    background-image: url("./../../../public/img/bg-green.svg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    input::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #0A3356;
      opacity: 1; /* Firefox */
    }
  }
  .form-group {
    margin: 0;
    font-family: Light;
    color: #fff;
    border: 0;
    border-radius: 0;
    padding: 0 15px;
  }
  .form-control {
    font-size: 1vw;
    border: 0;
    border-bottom: 1px solid #fff;
    border-width: 0px 50%;
    padding: 0;
    color: #fff;
    font-family: Book;
  }
  input::placeholder {
    color: white;
  }
  .header-background {
    height: 100%;
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
      // .container-fluid {
      //   // display: none;
      //   width: 80%;
      // }
      h2 {
        font-size: 20px;
        font-family: Ultra;
        color: #fff;
      }
      h3 {
        font-size: 14px;
        font-family: Bold;
        color: #749c40;
      }
      .form1 {
        background-position: unset;
        background-size: cover;
        .form-control {
          font-size: 15px;
        }
      }
      .form2 {
        background-position: unset;
        background-size: cover;
        .form-control {
          font-size: 15px;
        }
      }
  }

  @media only screen and (max-width: 420px) {
    .start-header {
      width: 106%;
    }
  }

  @media only screen and (max-width: 375px) {
    // .start-header {
    //   width: 102%;
    // }
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
      // display: none;
    }
  }

  @media only screen and (max-width: 320px) {
    .start-header {
      width: 122%;
    }
  }
</style>
