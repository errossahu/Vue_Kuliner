import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Vuetify from 'vuetify'
import VueToast from 'vue-toast-notification';
// Import one of the available themes
import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-sugar.css';
Vue.config.productionTip = false
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueSession from 'vue-session'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import 'vuetify/dist/vuetify.min.css'
import Axios from 'axios';
Vue.prototype.$http = Axios;
Vue.prototype.$apiUrl = 'http://localhost/back_endServer/api';
Vue.prototype.$id_user = '';
Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueToast);
Vue.use(VueSession)

new Vue({
  router,
  data: {
    id_user: '',
  },
  vuetify : new Vuetify(),
  render: h => h(App)
  
}).$mount('#app')

// Import Dependency 