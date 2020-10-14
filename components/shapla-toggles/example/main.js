import Vue from 'vue'
import TestToggles from './TestToggles'

Vue.config.productionTip = false;

new Vue({el: '#app', render: h => h(TestToggles),});
