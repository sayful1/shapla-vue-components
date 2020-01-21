import Vue from 'vue'
import App from './App.vue'
import Dialog from "../../components/shapla-confirm-dialog";
import router from './routers.js';

Vue.config.productionTip = false;

Vue.use(Dialog);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App),
});
