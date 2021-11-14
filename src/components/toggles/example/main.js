import Vue from 'vue'
import TestToggles from './TestToggles.vue'

Vue.config.productionTip = false;

new Vue({el: '#app', render: h => h(TestToggles),});
