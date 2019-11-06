/*!
 * Shapla Confirm Modal v1.0.0
 * (c) 2019 Sayful Islam
 * Released under the MIT License.
 */

import modal from './plugin';
import ConfirmModal from './ConfirmModal';

// Declare install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.use('modal', modal);
    Vue.component('confirm-modal', ConfirmModal);
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

export {modal, ConfirmModal};
export default modal;