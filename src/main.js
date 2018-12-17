import Vue from 'vue'
import App from './App.vue'

import './global.css'
import './plugins/element.js'
import './icons'
import './hook'

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
