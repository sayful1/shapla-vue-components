/*!
 * Shapla Toggles v1.0.2
 * (c) 2019 Sayful Islam
 * Released under the MIT License.
 */

import toggles from "./toggles";
import toggle from "./toggle";

// Declare install function executed by Vue.use()
export function install(Vue) {
  if (install.installed) return;
  install.installed = true;
  Vue.component('toggles', toggles);
  Vue.component('toggle', toggle);
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

const Components = {
  toggles,
  toggle
};

export {toggles, toggle};
export default Components;
