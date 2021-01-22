import Vue from 'vue'
import TestConfirmDialog from './TestConfirmDialog'
import {Dialog} from '../src/index'

Vue.use(Dialog);

new Vue({el: '#app', render: h => h(TestConfirmDialog)});
