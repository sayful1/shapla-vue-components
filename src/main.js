import Vue from 'vue'
import App from './App.vue'
import modal from '../shapla-confirmation-dialogs/src/plugin'

Vue.config.productionTip = false;

Vue.use(modal);

new Vue({
    el: '#app',
    render: h => h(App),
});
