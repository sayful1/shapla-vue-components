import Vue from 'vue'
import App from './App.vue'
import {Dialog} from "shapla-vue-components";
import router from './routers.js';
import '../../dist/style.css';

Vue.config.productionTip = false;

Vue.use(Dialog);

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});
