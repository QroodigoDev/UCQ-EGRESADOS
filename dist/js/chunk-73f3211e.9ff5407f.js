(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-73f3211e"],{"17cc":function(e,t,o){"use strict";o.r(t);var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[o("b-breadcrumb",{attrs:{items:e.breadcrumb}}),o("vue-good-table",{attrs:{mode:"remote",theme:"black-rhino",columns:e.columns,rows:e.rows,totalRows:e.totalRecords,"sort-options":{enabled:!0},isLoading:e.isLoading,styleClass:"vgt-table bordered","pagination-options":{enabled:!0,mode:"registros",position:"top",perPage:10,nextLabel:"siguiente",prevLabel:"anterior",rowsPerPageLabel:"Filas por página",ofLabel:"de",pageLabel:"páginas",allLabel:"Todos"}},on:{"update:isLoading":function(t){e.isLoading=t},"update:is-loading":function(t){e.isLoading=t}},scopedSlots:e._u([{key:"table-row",fn:function(t){return["status"==t.column.field?o("span",[o("span",{staticStyle:{"font-weight":"bold",color:"blue"}},[e._v(e._s("1"===t.row.active?"Activo":"Suspendido"))])]):"actions"==t.column.field?o("span",[o("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(o){return e.configureUser(t)}}},[o("font-awesome-icon",{attrs:{icon:["fa","sliders-h"]}})],1)]):e._e()]}}])})],1)},a=[],r=o("1da1"),s=o("5530"),i=(o("96cf"),o("99af"),o("b0c0"),o("2f62")),c=o("f986"),l=o("fb73"),u=o("e235"),d={mixins:[l["a"]],components:{BBreadcrumb:u["a"]},data:function(){return{breadcrumb:[{text:"Tablero",to:{name:"dashboard"}},{text:"Egresados",active:!0}],rows:[],isLoading:!1,totalRecords:0,columns:[{label:"Nombre",field:"fullname",filterOptions:{placeholder:"Nombre de Usuario",enabled:!0}},{label:"Correo",field:"email",filterOptions:{placeholder:"Correo Electronico",enabled:!0}},{label:"Teléfono",field:"phone",filterOptions:{placeholder:"Rol",enabled:!0,filterMultiselectDropdownItems:[]}},{label:"Estatus",field:"status"},{label:"Editar",field:"actions",sortable:!1}]}},computed:Object(s["a"])(Object(s["a"])({},Object(i["c"])({user:"getUser"})),{},{userName:function(){return"".concat(this.user.name," ").concat(this.user.last_name_1)}}),methods:{getEgresados:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var o,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e.toFormData({function:"getEgresado"});case 3:return o=t.sent,t.next=6,c["a"].post("/",o);case 6:n=t.sent,200===n.status&&(e.rows=n.data),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),e.isLoading=!1,e.showError(t.t0.message);case 14:case"end":return t.stop()}}),t,null,[[0,10]])})))()},configureUser:function(e){this.$router.push({name:"config",params:e})}},mounted:function(){this.getEgresados()}},b=d,f=o("2877"),p=Object(f["a"])(b,n,a,!1,null,null,null);t["default"]=p.exports},b0c0:function(e,t,o){var n=o("83ab"),a=o("9bf2").f,r=Function.prototype,s=r.toString,i=/^\s*function ([^ (]*)/,c="name";n&&!(c in r)&&a(r,c,{configurable:!0,get:function(){try{return s.call(this).match(i)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-73f3211e.9ff5407f.js.map