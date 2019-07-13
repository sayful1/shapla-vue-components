// Import vue component
import tabs from './tabs.vue';
import tab from './tab.vue';

const Components = {
    tabs,
    tab
};

// Declare install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('tabs', tabs);
    Vue.component('tab', tab);
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

export {tabs, tab};
// To allow use as module (npm/webpack/etc.) export component
export default Components;
