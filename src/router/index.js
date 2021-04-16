import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import PageNotFound from '../views/PageNotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    component: PageNotFound
  },
  {
    path: '/',
    component: Landing,
    children: [
      {
        path: '/',
        name: 'start',
        component: () => import('@/views/Start.vue')
      },
      {
        path: '/complete',
        name: 'complete',
        component: () => import('@/views/Complete.vue')
      },
      {
        path: '/egresados',
        name: 'egresados',
        component: () => import('@/views/Egresados.vue')
      }
    ]
  },
  {
    path: '/principal',
    name: 'principal',
    component: () => import('@/views/Principal.vue'),
    children: [
      {
        path: '/principal/dashboard',
        name: 'dashboard',
        // component: () => import('@/views/Dashboard.vue')
        component: () => import('@/components/dashboard/Indicators.vue')
      },
      {
        path: '/principal/listaEgresados',
        name: 'importarList',
        component: () => import('@/components/dashboard/Charts.vue')
      },
      {
        path: '/principal/import',
        name: 'importar',
        component: () => import('@/components/dashboard/Import.vue')
      },
      {
        path: '/principal/config',
        name: 'config',
        component: () => import('@/components/dashboard/Config.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
