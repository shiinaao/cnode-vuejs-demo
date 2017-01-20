// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import routes from './routes'
import VueMaterial from 'vue-material'
import App from './App'

Vue.use(Vuex)
Vue.use(VueMaterial)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

