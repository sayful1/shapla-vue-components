import Vue from 'vue'
import TestTextField from './TestTextField.vue'

Vue.config.productionTip = false;

new Vue({el: '#app', render: h => h(TestTextField),});
