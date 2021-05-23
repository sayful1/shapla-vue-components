/*!
 * Shapla Modal 1.0.0
 * (c) 2021 Sayful Islam
 * Released under the MIT License.
 */

// Import vue component
import ShaplaModal from './ShaplaModal.vue';
import {refreshBodyClass} from './helpers.js'

ShaplaModal.refreshBodyClass = refreshBodyClass


// To allow use as module (npm/webpack/etc.) export component
export {default as ShaplaModalCore} from './components/ModalCore.vue';
export {default as ShaplaModalCard} from "./components/ModalCard.vue";
export {default as ShaplaModalBox} from "./components/ModalBox.vue";
export {default as ShaplaModalConfirm} from "./components/ModalConfirm.vue";

export {ShaplaModal, refreshBodyClass};
export default ShaplaModal;
