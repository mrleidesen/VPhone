import Vue from 'vue'
import VueRouter from 'vue-router'
import Desktop from '../views/Desktop.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Desktop',
    component: Desktop
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('@/views/Settings.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
