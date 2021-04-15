<template>
  <div class="landing">
    <template>
      <div class="menu">
        <div class="container">
          <div class="container-fluid menu text-center">
            <img class="lazyload mt-4" width="30%" src="@/assets/img/logoUcq.png" />
          </div>
        </div>
      </div>
    </template>
    <router-view class="header-background" />
    <footer>
      <div class="container text-center mt-3">
        <br>
        <div class="mt-3">
          <small class="mt-3">
            Este espacio tiene como finalidad generar sinergia entre los egresados de la Universidad Cuauhtémoc,
            los datos aquí proporcionados serán utilizados principalmente con este fin.
            En este sitio podrás contactar y ser contactado por tus ex compañeros de generación y de carrera, acceder a contacto inmediato y redes sociales.
            Al subir tus fotografías e información aceptas el uso de tu imagen para esta plataforma, así como el uso de tus datos para el envío de información.
            Para mayor información puedes acceder al aviso de privacidad integral través de la dirección <a href="http://www.ucq.edu.mx" style="color: rgb(125, 172, 62);">http://www.ucq.edu.mx </a>en el apartado de contacto, opción Aviso de Privacidad en el link <a href="https://www.ucq.edu.mx/uc/docs/aviso-de-privacidad.pdf" style="color: rgb(125, 172, 62);">https://www.ucq.edu.mx/uc/docs/aviso-de-privacidad.pdf</a></small>
        </div>
        <div class="copy">
          © 2021 QROODIGO derechos reservados. QROODIGO S.A. de C.V.
        </div>
      </div>
    </footer>
  </div>
</template>

<script>

export default {
  components: {
  },
  mounted () {
    console.log('La resolución de tu pantalla es: ' + screen.width + ' x ' + screen.height)
  },
  methods: {
    openModal () {
      this.$modal.show('login')
    }
  }
}
</script>

<style scoped lang="scss">
.header-background {
    background: url("./../../public/img/fondo1.png") no-repeat;
    background-position: top;
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    margin-top: -40px;
    z-index: 99;
    padding-top: 80px;
  }
.modalLogin {
  z-index: 1000;
}
@media only screen and (max-width: 420px) {
  .landing {
    & .menu{
      width: 105%;
    }
    & footer {
      width: 106%;
    }
  }
}
@media only screen and (max-width:400px) {
  .footer {
    background-color: gray !important;
    .power-by {
      margin-top: 0px;
      & img {
        padding-bottom: 15px;
      }
    }
    & .politic {
      font-size: 17px;
      & a {
        color: #ffffff;
        text-decoration: none;
      }
      & ul li {
        padding-bottom: 15px;
        list-style-type: none;
        & img {
          padding-right: 20px;
          }
        }
      }
        & .copy {
            margin-top: 70px;
            font-size: 13px;
            vertical-align: middle;
        }
        & .linke {
            margin-left: 30px;
        }
    }
}

@media only screen and (max-width: 375px) {
  .landing {
    & .menu{
      width: 102%;
    }
    & footer {
      width: 102%;
    }
  }
}

@media only screen and (max-width: 360px) {
  .landing {
    color: #202020E6;
    & .menu{
      width: 106%;
    }
    & footer {
      width: 108%;
    }
  }
}

@media only screen and (max-width: 320px) {
  .landing {
    & .menu{
      width: 113%;
    }
    & footer {
      width: 122%;
    }
  }
}
</style>
