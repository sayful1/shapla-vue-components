/*!
 * Shapla Signature Canvas v1.0.0
 * (c) 2019 Sayful Islam
 * Released under the MIT License.
 */

// Import vue component
import signatureCanvas from './signatureCanvas';

// Declare install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('signature-canvas', signatureCanvas);
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
export default signatureCanvas;
