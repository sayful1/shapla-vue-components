/*!
 * Shapla Vue Components v1.0.0
 * (c) 2019 Sayful Islam
 * Released under the MIT License.
 */

import shaplaButton from "shapla-button";
import {columns, column} from 'shapla-columns'
import {Dialog, ConfirmDialog} from 'shapla-confirm-dialog'
import dataTable from "shapla-data-table";
import pagination from "shapla-data-table-pagination";
import statusList from "shapla-data-table-status";
import deleteIcon from 'shapla-delete';
import dropdown from "shapla-dropdown";
import modal from "shapla-modal";
import notification from "shapla-notifications";
import searchForm from "shapla-search-form";
import spinner from "shapla-spinner";
import StarRating from 'shapla-star-rating';
import {tabs, tab} from 'shapla-tabs';
import {toggles, toggle} from 'shapla-toggles';

const Components = {
    shaplaButton,
    columns, column,
    Dialog, ConfirmDialog,
    dataTable,
    statusList,
    pagination,
    deleteIcon,
    dropdown,
    modal,
    notification,
    searchForm,
    spinner,
    StarRating,
    tabs, tab,
    toggles, toggle
};

// Declare install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    Vue.use(Dialog);

    Vue.component('shapla-button', shaplaButton);
    Vue.component('columns', columns);
    Vue.component('column', column);
    Vue.component('confirm-dialog', ConfirmDialog);
    Vue.component('data-table', dataTable);
    Vue.component('pagination', pagination);
    Vue.component('status-list', statusList);
    Vue.component('delete-icon', deleteIcon);
    Vue.component('dropdown', dropdown);
    Vue.component('modal', modal);
    Vue.component('notification', notification);
    Vue.component('search-form', searchForm);
    Vue.component('spinner', spinner);
    Vue.component('star-rating', StarRating);
    Vue.component('tabs', tabs);
    Vue.component('tab', tab);
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

// To allow use as module (npm/webpack/etc.) export component
export default Components;