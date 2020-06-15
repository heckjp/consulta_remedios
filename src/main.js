import Vue from 'vue';
import {BootstrapVue,BootstrapVueIcons} from 'bootstrap-vue';
import VueCookies from 'vue-cookies';
import VueLodash from 'vue-lodash';
import lodash from 'lodash';
import App from './App.vue';
import axios from 'axios';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.prototype.$http = axios

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueCookies)
Vue.use( VueLodash, {lodash:lodash})
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
