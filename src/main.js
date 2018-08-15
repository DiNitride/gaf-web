// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './assets/css/main.css'
import 'bootstrap'

import fontAwesome from '@fortawesome/fontawesome';
import faSolid from '@fortawesome/fontawesome-free-solid';
import faRegular from '@fortawesome/fontawesome-free-regular';
import faBrands from '@fortawesome/fontawesome-free-brands';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
import vueHeadful from 'vue-headful';

Vue.config.productionTip = false;

Vue.use(BootstrapVue);

fontAwesome.library.add(faSolid);
fontAwesome.library.add(faRegular);
fontAwesome.library.add(faBrands);

Vue.component('fa-icon', FontAwesomeIcon);
Vue.component('vue-headful', vueHeadful);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
