/*!
 * Shapla Options Field v1.0.0
 * (c) 2020 Sayful Islam
 * Released under the MIT License.
 */

// Import vue components
import OptionsField from "./OptionsField";
import FieldOption from "./FieldOption";

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('options-field', OptionsField);
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

export {OptionsField, FieldOption};
export default OptionsField;