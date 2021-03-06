import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Foods  from '../views/Foods.vue'
import Keranjang from '../views/Keranjang.vue'
import FoodDetails from '../views/FoodDetails.vue'
// import { component } from 'vue/types/umd's
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/keranjang',
    name:'Keranjang',
    component:Keranjang
  },
  {
    path:'/foods/:id_menu',
    name:'FoodDetails',
    component:FoodDetails
  },
  {
    path:"/foods",
    name:'Foods',
    component:Foods
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
