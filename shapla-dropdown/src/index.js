/*!
 * Shapla Dropdown v1.0.3
 * (c) 2019 Sayful Islam
 * Released under the MIT License.
 */

// Import vue component
import dropdown from './dropdown';
import dropdownMenu from './dropdownMenu';

// Declare install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('dropdown', dropdown);
    Vue.component('dropdown-menu', dropdownMenu);
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
export {dropdownMenu, dropdown};
export default dropdown;
