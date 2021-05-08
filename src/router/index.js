import Vue from 'vue'
import VueRouter from 'vue-router'
import {Auth} from '@/utils/auth'

const Login = import('@/views/Login')

Vue.use(VueRouter)

export const routes = [
  {
    path: '/login/',
    name: 'login',
    component: () => Login
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = Auth.isLoggedIn()
  if (to.name !== 'login' && !isLoggedIn) next({ name: 'login' })
  else if (to.name === 'login' && isLoggedIn) next('/')
  else next()
})

export default router
