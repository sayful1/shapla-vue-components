/*!
 * Shapla Delete Icon v2.0.0
 * (c) 2021 Sayful Islam
 * Released under the MIT License.
 */

// Import vue component
import deleteIcon from './deleteIcon.vue';

// Declare install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('delete-icon', deleteIcon);
}

// Create module definition for Vue.use()
const plugin = {install};

// Auto-install when vue is found (eg. in browser via <script> tag)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// To allow use as module (npm/webpack/etc.) export component
export default deleteIcon;
