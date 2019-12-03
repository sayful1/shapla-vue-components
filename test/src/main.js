import Vue from 'vue'
import App from './App.vue'
import Dialog from "../../shapla-confirm-dialog";

Vue.config.productionTip = false;

Vue.use(Dialog);

new Vue({
    el: '#app',
    render: h => h(App),
});
