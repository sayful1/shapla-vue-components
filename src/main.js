import Vue from 'vue'
import App from './App.vue'
import Modal from '../shapla-confirmation-dialogs/src/ModalPlugin'

Vue.config.productionTip = false;

Vue.use(Modal);

new Vue({
    el: '#app',
    render: h => h(App),
});
