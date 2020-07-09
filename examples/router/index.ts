import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Form from '../views/form/index.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/table',
    name: 'Table',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/table/index.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
