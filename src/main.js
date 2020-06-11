import Vue from 'vue';
import {BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue';
import VueCookies from 'vue-cookies'
import App from './App.vue';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.prototype.$http = axios

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueCookies)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
