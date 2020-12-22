import Vue from 'vue'
import TestTabs from './TestTabs'

Vue.config.productionTip = false;

new Vue({el: '#app', render: h => h(TestTabs),});
