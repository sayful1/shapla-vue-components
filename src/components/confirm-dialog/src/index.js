/*!
 * Shapla Confirm Modal v1.1.0
 * (c) 2021 Sayful Islam
 * Released under the MIT License.
 */

import Dialog from './ModalPlugin.js';
import DialogContainer from './DialogContainer.vue';

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.use(Dialog);
  Vue.component('confirm-dialog', DialogContainer);
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

export {Dialog, DialogContainer, DialogContainer as ConfirmDialog};
export default Dialog;
