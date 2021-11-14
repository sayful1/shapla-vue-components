/*!
 * Shapla Button v2.0.0
 * (c) 2021 Sayful Islam
 * Released under the MIT License.
 */

// Import vue component
import shaplaButton from './shaplaButton.vue';

// Declare install function executed by Vue.use()
function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('shapla-button', shaplaButton);
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

export default shaplaButton;
