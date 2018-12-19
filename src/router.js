import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

// route level code-splitting
let Component = () => import(/* webpackChunkName: "components" */ './views/Component')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/component'
    },
    {
      path: '/component',
      name: 'component',
      component: Component
    }
  ]
})
