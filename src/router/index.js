import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('../views/Home.vue')
const Questions = () => import('../views/Questions.vue')
const Lp = () => import('../views/lp.vue')
const Medicare = () => import('../views/medicare.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/questions',
    name: 'questions',
    component: Questions
  },
  {
    path: '/lp',
    name: 'lp',
    component: Lp
  },
  {
    path: '/medicare/lp',
    name: 'medicare-lp',
    component: Lp
  },
  {
    path: '/medicare',
    name: 'medicare',
    component: Medicare
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
