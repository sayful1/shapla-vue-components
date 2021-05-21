/*!
 * Shapla Modal v2.0.0
 * (c) 2021 Sayful Islam
 * Released under the MIT License.
 */

// Import vue component
import ShaplaModal from './ShaplaModal.vue';


// To allow use as module (npm/webpack/etc.) export component
export {default as ModalCore, refreshBodyClass as refreshBodyClass} from './components/ModalCore.vue';
export {default as ModalCard} from "./components/ModalCard.vue";
export {default as ModalBox} from "./components/ModalBox.vue";
export {default as ModalConfirm} from "./components/ModalConfirm.vue";

export {ShaplaModal};
export default ShaplaModal;
