/*!
 * Shapla Confirm Modal v1.0.2
 * (c) 2020 Sayful Islam
 * Released under the MIT License.
 */

import Dialog from './ModalPlugin';
import ConfirmDialog from './ConfirmDialog';

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.use(Dialog);
  Vue.component('confirm-dialog', ConfirmDialog);
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

export {Dialog, ConfirmDialog};
export default Dialog;
