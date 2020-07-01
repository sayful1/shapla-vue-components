/*!
 * Shapla File Uploader v1.0.5
 * (c) 2020 Sayful Islam
 * Released under the MIT License.
 */

// Import vue component
import FileUploader from './FileUploader';
import FileUploadStatus from './FileUploadStatus';
import UploadStatus from './UploadStatus';
import pad from "./helpers/pad";
import timeRemaining from "./helpers/timeremaining";

// Declare install function executed by Vue.use()
export function install(Vue) {
    if (install.installed) return;
    install.installed = true;
    Vue.component('file-uploader', FileUploader);
    Vue.component('upload-status', UploadStatus);
    Vue.component('file-upload-status', FileUploadStatus);
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
export {FileUploader, UploadStatus, FileUploadStatus, pad, timeRemaining};
export default FileUploader;
