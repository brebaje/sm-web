import Vue from 'vue';
import { FontAwesomeIcon, FontAwesomeLayers } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

import addIcons from './icons'; // Font Awesome icons for the app
import ApiService from './services/api.service';

// Font Awesome icons
addIcons();
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('font-awesome-layers', FontAwesomeLayers);

// API initialization
ApiService.init(process.env.VUE_APP_ROOT_API);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
