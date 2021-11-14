import Vue from 'vue'
import TestConfirmDialog from './TestConfirmDialog.vue'
import {Dialog} from '../src/index.js'

Vue.use(Dialog);

new Vue({el: '#app', render: h => h(TestConfirmDialog)});
