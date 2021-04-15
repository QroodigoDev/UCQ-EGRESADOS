<template>
    <div class="container">
        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    {{user}}
                <h5 class="card-title">{{user.fullname}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Configuracion de Egresado</h6>
                <img :src="'http://ucq.edu.mx/qroodigo/images/' + user.foto" width="60%" :alt="user.fullname">
                <div class="card mt-5">
                    <div class="card-header">
                    Informacion Basica
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-2">
                                <h6>Email</h6>
                            </div>
                            <div class="col-md-2">
                                <h6>Curp</h6>
                            </div>
                            <div class="col-md-2">
                                <h6>Teléfono</h6>
                            </div>
                            <div class="col-md-3">
                                <h6>Carrera</h6>
                            </div>
                            <div class="col-md-2">
                                <h6>Generacion</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <input type="text" class="form-control" v-model="user.email">
                            </div>
                            <div class="col-md-2">
                                <input type="text" class="form-control" v-model="user.curp">
                            </div>
                            <div class="col-md-2">
                                <input type="text" class="form-control" v-model="user.phone">
                            </div>
                            <div class="col-md-3">
                                <select v-model="user.id_carrera" class="col-md-12 form-control">
                                    <option v-for="(carrera, index) in carreras" :value="carrera" :key="index">{{carrera.nombre}}</option>
                                </select>
                                <!-- <input type="text" class="form-control" v-model="user.carrera"> -->
                            </div>
                            <div class="col-md-2">
                                <input type="text" class="form-control" v-model="user.generacion">
                            </div>
                        </div>
                        <div class="row mt-4">
                            <div class="col-md-2">
                                <h6>Nombre</h6>
                            </div>
                            <div class="col-md-2">
                                <h6>Apellido paterno</h6>
                            </div>
                            <div class="col-md-2">
                                <h6>Apellidio Materno</h6>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-2">
                                <input type="text" class="form-control" v-model="user.nombre">
                            </div>
                            <div class="col-md-2">
                                <input type="text" class="form-control" v-model="user.ap">
                            </div>
                            <div class="col-md-2">
                                <input type="text" class="form-control" v-model="user.am">
                            </div>
                        </div>
                        <div class="row">
                            <div class="card mt-3 col-12">
                                <div class="card-header">
                                    Redes Sociales
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4">
                                            <h6>LinkedIn</h6>
                                        </div>
                                    </div>
                                    <div class="row col-12">
                                        <div class="col-12">
                                            <input type="text" class="form-control" v-model="user.link">
                                        </div>
                                    </div>
                                </div>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-4">
                                            <h6>Facebook</h6>
                                        </div>
                                    </div>
                                    <div class="row col-12">
                                        <div class="col-12">
                                            <input type="text" class="form-control" v-model="user.facebook">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 text-center">
                        <button class="btn btn-purple col-4" @click="updateInfo()">Actualizar Información</button>
                    </div>
                </div>

                <div class="card mt-3">
                    <div class="card-header">
                        Acciones rapidas
                        </div>
                        <div class="card-body">
                            <button class="btn btn-purple mr-4" @click="resetPassword">Reset Password</button>
                            <button class="btn btn-purple mr-4" @click="suspended">Suspender Egresado</button>
                            <button class="btn btn-purple mr-4" @click="deleteEgresado">Eliminar Egresado</button>
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

export default {
  mixins: [formatData],
  data () {
    return {
      user: [],
      carreras: []
    }
  },
  methods: {
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
    async updateInfo () {
      try {
        const params = await this.toFormData({
          function: 'updateInfoAdmin',
          name: this.user.nombre,
          lastname: this.user.ap,
          lastname2: this.user.am,
          career: this.user.id_carrera.id,
          email: this.user.email,
          phone: this.user.phone,
          generation: this.user.generacion,
          curp: this.user.curp,
          linkedin: this.user.link,
          facebook: this.user.facebook,
          id: this.user.id
        })
        const response = await axiosAdelaService.post('/', params)
        console.log('updateInfoAdmin', response)
        if (response.status === 200) {
          this.$toastedPush({
            message: 'Egresado actualizado',
            type: 'success'
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async resetPassword () {
      try {
        const params = await this.toFormData({
          function: 'resetPassword',
          email: this.user.email,
          id: this.user.id
        })
        const response = await axiosAdelaService.post('/', params)
        if (response.status === 200) {
          this.$toastedPush({
            message: 'Se envio por correo las instrucciones del cambio de contraseña',
            type: 'success'
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async suspended () {
      try {
        const params = await this.toFormData({
          function: 'suspender',
          active: this.user.active,
          id: this.user.id
        })
        const response = await axiosAdelaService.post('/', params)
        if (response.status === 200) {
          this.$toastedPush({
            message: 'Egresado suspendido',
            type: 'success'
          })
        }
      } catch (error) {
        console.log(error)
      }
    },
    async deleteEgresado () {
      try {
        const params = await this.toFormData({
          function: 'deleteEgresado',
          id: this.user.id
        })
        const response = await axiosAdelaService.post('/', params)
        if (response.status === 200) {
          this.$toastedPush({
            message: 'Egresado eliminado',
            type: 'success'
          })
          this.$router.push({ name: 'dashboard' })
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  mounted () {
    console.log('Parametros de usuario', this.$route.params)
    this.user = this.$route.params.row
    this.getCarreras()
  }
}
</script>
