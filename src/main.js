import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// Import Dependency 