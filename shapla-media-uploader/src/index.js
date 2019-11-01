// Import vue component
import MediaUploader from './MediaUploader';
import MediaModal from './MediaModal';
import FeaturedImage from './FeaturedImage';

const Components = {
	MediaModal,
	MediaUploader,
	FeaturedImage
};

// Declare install function executed by Vue.use()
export function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component('media-uploader', MediaUploader);
	Vue.component('media-modal', MediaModal);
	Vue.component('featured-image', FeaturedImage);
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

export {MediaUploader, MediaModal, FeaturedImage};
// To allow use as module (npm/webpack/etc.) export component
export default Components;