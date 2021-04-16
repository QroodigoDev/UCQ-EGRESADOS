<template>
  <div>
    <vue-good-table
        mode="remote"
        theme="black-rhino"
        :columns="columns"
        :rows="rows"
        :totalRows="totalRecords"
        :sort-options="{
          enabled: true,
        }"
        :isLoading.sync="isLoading"
        styleClass="vgt-table bordered"
        :pagination-options="{
          enabled: true,
          mode: 'registros',
          position: 'top',
          perPage: 10,
          nextLabel: 'siguiente',
          prevLabel: 'anterior',
          rowsPerPageLabel: 'Filas por página',
          ofLabel: 'de',
          pageLabel: 'páginas', // for 'pages' mode
          allLabel: 'Todos',
        }"
      >
        <template slot="table-row" slot-scope="props">
          <span v-if="props.column.field == 'status'">
            <span style="font-weight: bold; color: blue;">{{props.row.active === "1" ? 'Activo' : 'Suspendido'}}</span>
          </span>
          <span v-else-if="props.column.field == 'actions'">
            <button type="button" class="btn btn-secondary" @click="configureUser(props)">
              Config
            </button>
          </span>
        </template>
      </vue-good-table>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import axiosAdelaService from '@/axios/axiosAdelaService'
import formatData from '@/mixins/formatAxios'

export default {
  mixins: [formatData],
  data () {
    return {
      rows: [],
      isLoading: false,
      totalRecords: 0,
      columns: [
        {
          label: 'Nombre',
          field: 'fullname',
          filterOptions: {
            placeholder: 'Nombre de Usuario',
            enabled: true
          }
        },
        {
          label: 'Correo',
          field: 'email',
          filterOptions: {
            placeholder: 'Correo Electronico',
            enabled: true
          }
        },
        {
          label: 'Teléfono',
          field: 'phone',
          filterOptions: {
            placeholder: 'Rol',
            enabled: true,
            filterMultiselectDropdownItems: []
          }
        },
        {
          label: 'Estatus',
          field: 'status',
          filterOptions: {
            placeholder: 'Empresa',
            enabled: true,
            filterMultiselectDropdownItems: []
          }
        },
        {
          label: 'Editar',
          field: 'actions',
          sortable: false
        }
      ]
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    }),
    userName () {
      return `${this.user.name} ${this.user.last_name_1}`
    }
  },
  methods: {
    async getEgresados () {
      try {
        const params = await this.toFormData({
          function: 'getEgresado'
        })
        const response = await axiosAdelaService.post('/', params)
        if (response.status === 200) {
          this.rows = response.data
        }
      } catch (error) {
        this.isLoading = false
        this.showError(error.message)
      }
    },
    configureUser (props) {
      this.$router.push({ name: 'config', params: props })
    }
  },
  mounted () {
    this.getEgresados()
  }
}
</script>
