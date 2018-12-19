import Vue from 'vue'
import App from './App.vue'

import './global.css'
import './plugins/element.js'
import './icons'
import './hook'
import router from './router'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
