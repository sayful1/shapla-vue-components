/*!
 * Shapla Vue Components
 * (c) 2020 Sayful Islam
 * Released under the MIT License.
 */
import shaplaButton from "shapla-button";
import shaplaChip from 'shapla-chip';
import shaplaCheckbox from "shapla-checkbox";
import {column, columns} from 'shapla-columns'
import {ConfirmDialog, Dialog} from 'shapla-confirm-dialog'
import dashboardLayout from 'shapla-dashboard-layout';
import dataTable from "shapla-data-table";
import pagination from "shapla-data-table-pagination";
import statusList from "shapla-data-table-status";
import deleteIcon from 'shapla-delete';
import dropdown from "shapla-dropdown";
import {FileUploader, FileUploadStatus, UploadStatus} from 'shapla-file-uploader';
import iconContainer from 'shapla-icon-container';
import imageContainer from 'shapla-image-container';
import inputSlider from 'shapla-input-slider';
import modal from "shapla-modal";
import notification from "shapla-notifications";
import progressBar from 'shapla-progress-bar';
import shaplaRadio from "shapla-radio";
import radioButton from "shapla-radio-button";
import searchForm from "shapla-search-form";
import selectField from "shapla-select-field";
import sideNavigation from "shapla-side-navigation";
import spinner from "shapla-spinner";
import StarRating from 'shapla-star-rating';
import shaplaSwitch from "shapla-switch";
import {tab, tabs} from 'shapla-tabs';
import textField from 'shapla-text-field';
import {toggle, toggles} from 'shapla-toggles';

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
  Vue.component('file-uploader', FileUploader);
  Vue.component('upload-status', UploadStatus);
  Vue.component('file-upload-status', FileUploadStatus);
  Vue.component('icon-container', iconContainer);
  Vue.component('image-container', imageContainer);
  Vue.component('input-slider', inputSlider);
  Vue.component('modal', modal);
  Vue.component('notification', notification);
  Vue.component('progress-bar', progressBar);
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

export {default as shaplaButton} from 'shapla-button';
export {default as shaplaCheckbox} from 'shapla-checkbox';
export {default as shaplaChip} from 'shapla-chip';
export {columns, column} from 'shapla-columns';
export {Dialog, ConfirmDialog} from 'shapla-confirm-dialog'
export {default as dashboardLayout} from 'shapla-dashboard-layout';
export {default as dataTable} from 'shapla-data-table';
export {default as pagination} from 'shapla-data-table-pagination';
export {default as statusList} from 'shapla-data-table-status';
export {default as deleteIcon} from 'shapla-delete';
export {default as dropdown} from 'shapla-dropdown';
export {default as FileUploader} from 'shapla-file-uploader';
export {default as iconContainer} from 'shapla-icon-container';
export {default as imageContainer} from 'shapla-image-container';
export {default as inputSlider} from 'shapla-input-slider';
export {default as modal} from 'shapla-modal';
export {default as notification} from 'shapla-notifications';
export {default as progressBar} from 'shapla-progress-bar';
export {default as shaplaRadio} from 'shapla-radio';
export {default as radioButton} from 'shapla-radio-button';
export {default as searchForm} from 'shapla-search-form';
export {default as selectField} from 'shapla-select-field';
export {default as sideNavigation} from 'shapla-side-navigation';
export {default as spinner} from 'shapla-spinner';
export {default as StarRating} from 'shapla-star-rating';
export {default as shaplaSwitch} from 'shapla-switch';
export {tabs, tab} from 'shapla-tabs';
export {default as textField} from 'shapla-text-field';
export {toggles, toggle} from 'shapla-toggles';
