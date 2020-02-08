/*!
 * Shapla Vue Components
 * (c) 2019 Sayful Islam
 * Released under the MIT License.
 */

import shaplaButton from "shapla-button";
import shaplaChip from 'shapla-chip';
import shaplaCheckbox from "shapla-checkbox";
import {columns, column} from 'shapla-columns'
import {Dialog, ConfirmDialog} from 'shapla-confirm-dialog'
import dashboardLayout from 'shapla-dashboard-layout';
import dataTable from "shapla-data-table";
import pagination from "shapla-data-table-pagination";
import statusList from "shapla-data-table-status";
import deleteIcon from 'shapla-delete';
import dropdown from "shapla-dropdown";
import iconContainer from 'shapla-icon-container';
import imageContainer from 'shapla-image-container';
import inputSlider from 'shapla-input-slider';
import modal from "shapla-modal";
import notification from "shapla-notifications";
import shaplaRadio from "shapla-radio";
import radioButton from "shapla-radio-button";
import searchForm from "shapla-search-form";
import selectField from "shapla-select-field";
import sideNavigation from "shapla-side-navigation";
import spinner from "shapla-spinner";
import StarRating from 'shapla-star-rating';
import shaplaSwitch from "shapla-switch";
import {tabs, tab} from 'shapla-tabs';
import textField from 'shapla-text-field';
import {toggles, toggle} from 'shapla-toggles';

// Declare install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;

    Vue.use(Dialog);

    Vue.component('shapla-button', shaplaButton);
    Vue.component('shapla-chip', shaplaChip);
    Vue.component('shapla-checkbox', shaplaCheckbox);
    Vue.component('columns', columns);
    Vue.component('column', column);
    Vue.component('confirm-dialog', ConfirmDialog);
    Vue.component('dashboard-layout', dashboardLayout);
    Vue.component('data-table', dataTable);
    Vue.component('pagination', pagination);
    Vue.component('status-list', statusList);
    Vue.component('delete-icon', deleteIcon);
    Vue.component('dropdown', dropdown);
    Vue.component('icon-container', iconContainer);
    Vue.component('image-container', imageContainer);
    Vue.component('input-slider', inputSlider);
    Vue.component('modal', modal);
    Vue.component('notification', notification);
    Vue.component('shapla-radio', shaplaRadio);
    Vue.component('radio-button', radioButton);
    Vue.component('search-form', searchForm);
    Vue.component('select-field', selectField);
    Vue.component('side-navigation', sideNavigation);
    Vue.component('spinner', spinner);
    Vue.component('star-rating', StarRating);
    Vue.component('shapla-switch', shaplaSwitch);
    Vue.component('tabs', tabs);
    Vue.component('tab', tab);
    Vue.component('text-field', textField);
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
export {
    shaplaButton, shaplaChip, shaplaCheckbox, columns, column, Dialog, ConfirmDialog, dashboardLayout, dataTable,
    statusList, pagination, deleteIcon, dropdown, imageContainer, iconContainer, inputSlider, modal, notification,
    shaplaRadio, radioButton, searchForm, selectField, sideNavigation, spinner, StarRating, shaplaSwitch, tabs, tab,
    textField, toggles, toggle
};
