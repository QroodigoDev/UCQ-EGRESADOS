<!-- xlsx.js (C) 2013-present  SheetJS -- http://sheetjs.com -->
<template>
<div @drop="_drop" @dragenter="_suppress" @dragover="_suppress">
  <div class="row"><div class="col-xs-12">
    {{data}}
    <form class="form-inline">
      <div class="form-group">
        <label for="file">Spreadsheet</label>
        <input type="file" class="form-control" id="file" :accept="SheetJSFT" @change="_change" />
      </div>
    </form>
    </div></div>
    <div class="row"><div class="col-xs-12">
      <button :disabled="data.length ? false : true" class="btn btn-success" @click="save">Guardar Lista de egresados</button>
      <!-- <button :disabled="data.length ? false : true" class="btn btn-success" @click="_export">Export</button> -->
    </div></div>
    <div class="row"><div class="col-xs-12">
      <div class="table-responsive">
        <table class="table table-striped">
          <thead><tr>
            <th v-for="c in cols" :key="c.key">{{c.name}}</th>
            </tr></thead>
          <tbody>
            <tr v-for="(r, key) in data" :key="key">
              <td v-for="c in cols" :key="c.key"> {{ r[c.key] }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div></div>
    </div>
</template>

<script>
import XLSX from 'xlsx'
import formatData from '@/mixins/formatAxios'
import axiosAdelaService from '@/axios/axiosAdelaService'

const makeCols = refstr => Array(XLSX.utils.decode_range(refstr).e.c + 1).fill(0).map((x, i) => ({
  name: XLSX.utils.encode_col(i), key: i
}))
const _SheetJSFT = [
  'xlsx', 'xlsb', 'xlsm', 'xls', 'xml', 'csv', 'txt', 'ods', 'fods', 'uos', 'sylk', 'dif', 'dbf', 'prn', 'qpw', '123', 'wb*', 'wq*', 'html', 'htm'
].map((x) => { return '.' + x }).join(',')

export default {
  mixins: [formatData],
  data () {
    return {
      data: ['SheetJS'.split(''), '1234567'.split('')],
      cols: [
        { name: 'MATRICULA', key: 0 },
        { name: 'NOMBRE', key: 1 },
        { name: 'AP', key: 2 },
        { name: 'AM', key: 3 },
        { name: 'CARRERA', key: 4 },
        { name: 'TIPO', key: 5 },
        { name: 'SEXO', key: 6 },
        { name: 'EMAIL', key: 7 },
        { name: 'EMAIL2', key: 8 },
        { name: 'CURP', key: 9 },
        { name: 'GENERACION', key: 10 }
      ],
      SheetJSFT: _SheetJSFT,
      files: []
    }
  },
  methods: {
    _suppress (evt) {
      evt.stopPropagation()
      evt.preventDefault()
    },
    _drop (evt) {
      evt.stopPropagation(); evt.preventDefault()
      const files = evt.dataTransfer.files
      if (files && files[0]) this._file(files[0])
    },
    _change (evt) {
      this.files = evt.target.files
      if (this.files && this.files[0]) this._file(this.files[0])
    },
    _export (evt) {
      /* convert state to workbook */
      const ws = XLSX.utils.aoa_to_sheet(this.data)
      const wb = XLSX.utils.book_new()
      XLSX.utils.book_append_sheet(wb, ws, 'SheetJS')
      /* generate file and send to client */
      XLSX.writeFile(wb, 'sheetjs.xlsx')
    },
    _file (file) {
      /* Boilerplate to set up FileReader */
      const reader = new FileReader()
      reader.onload = (e) => {
        /* Parse data */
        const bstr = e.target.result
        const wb = XLSX.read(bstr, { type: 'binary' })
        /* Get first worksheet */
        const wsname = wb.SheetNames[0]
        const ws = wb.Sheets[wsname]
        /* Convert array of arrays */
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 })
        /* Update state */
        this.data = data
        this.cols = makeCols(ws['!ref'])
      }
      reader.readAsBinaryString(file)
    },
    async save () {
      try {
        const imtems = []
        this.data.forEach(element => {
          const matricula = element[0] === undefined ? 'SIN DATO' : element[0]
          const nombre = element[1] === undefined ? 'SIN DATO' : element[1]
          const ap = element[2] === undefined ? 'SIN DATO' : element[2]
          const am = element[3] === undefined ? 'SIN DATO' : element[3]
          const carrera = element[4] === undefined ? 'SIN DATO' : element[4]
          const tipoCarrera = element[5] === undefined ? 'SIN DATO' : element[5]
          const sexo = element[6] === undefined ? 'SIN DATO' : element[6]
          const email = element[7] === undefined ? 'SIN DATO' : element[7]
          const emailUcq = element[8] === undefined ? 'SIN DATO' : element[8]
          const curp = element[9] === undefined ? 'SIN DATO' : element[9]
          const generacion = element[10] === undefined ? 'SIN DATO' : element[10]
          imtems.push({
            matricula: matricula,
            nombre: nombre,
            ap: ap,
            am: am,
            carrera: carrera,
            tipo_carrera: tipoCarrera,
            sexo: sexo,
            email: email,
            email_ucq: emailUcq,
            curp: curp,
            generacion: generacion
          })
        })
        console.log(imtems)
        const params = await this.toFormData({
          function: 'setEgresados',
          data: JSON.stringify(imtems)
        })
        const response = await axiosAdelaService.post('/', params)
        console.log('* * * ***** RESPUESTA SERVIDOR', response.data)
      } catch (error) {
        this.isLoading = false
        this.showError(error.message)
      }
    }
  }
}
</script>
