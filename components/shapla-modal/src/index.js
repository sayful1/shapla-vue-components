/*!
 * Shapla Modal v1.1.0
 * (c) 2021 Sayful Islam
 * Released under the MIT License.
 */

// Import vue component
import modal from './modal';

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('modal', modal);
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

export {default as ModalCore} from './components/ModalCore';
export {default as ModalCard} from "./components/ModalCard";
export {default as ModalBox} from "./components/ModalBox";
export {default as ModalConfirm} from "./components/ModalConfirm";

export {modal}
export default modal;
