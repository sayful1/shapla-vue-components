<template>
    <div class="shapla-media-modal">
        <modal
                :active="active"
                :title="title"
                content-size="large"
                type="card"
                @close="closeModal"
        >
            <div class="shapla-media-modal__inside">
                <tabs alignment="center">
                    <tab
                            name="Upload Images"
                            :selected="true"
                    >
                        <file-uploader
                                :url="url"
                                @init="initEvent"
                                @success="finishedEvent"
                                @before:send="beforeSendEvent"
                        />
                    </tab>
                    <tab name="Media Library">
                        <div
                                v-if="images.length"
                                class="shapla-media-modal__items"
                        >
                            <div
                                    v-for="_image in images"
                                    :key="_image[primaryKey]"
                                    :class="itemClasses(_image)"
                                    @click="selectImage(_image)"
                            >
                                <div class="shapla-media-modal__image">
                                    <image-container
                                            container-width="100px"
                                            container-height="100px"
                                    >
                                        <img
                                                :src="_image[srcKey]"
                                                :alt="_image[altKey]"
                                        >
                                    </image-container>
                                </div>
                            </div>
                        </div>
                        <div
                                v-else
                                class="no-item-found"
                                v-html="notFoundText"
                        />
                    </tab>
                </tabs>
            </div>
            <template #foot>
                <shapla-button
                        theme="primary"
                        :disabled="!selectedImages.length"
                        @click="chooseImage"
                >
                    {{ modalButtonText }}
                </shapla-button>
            </template>
        </modal>
    </div>
</template>

<script>
import modal from '../modal/modal.vue';
import tabs from '../tabs/tabs.vue';
import tab from '../tabs/tab.vue';
import imageContainer from '../image-container/imageContainer.vue';
import ShaplaButton from "../button/ShaplaButton.vue";
import FileUploader from "./FileUploader.vue";

export default {
    name: "MediaModal",
    components: {modal, tabs, tab, FileUploader, imageContainer, ShaplaButton},
    props: {
        active: {type: Boolean, default: false},
        title: {type: String, default: "Media Images"},
        modalButtonText: {type: String, default: 'Set Image'},
        notFoundText: {type: String, default: 'No images found.'},
        images: {type: Array, default: () => []},
        primaryKey: {type: String, default: 'id'},
        srcKey: {type: String, default: 'src'},
        altKey: {type: String, default: 'alt'},
        multiple: {type: Boolean, default: false},
        // File Uploader
        url: {type: String, default: null, required: true},
    },
    data() {
        return {
            selectedImages: [],
        }
    },
    methods: {
        closeModal() {
            this.selectedImages = [];
            this.$emit('close');
        },
        itemClasses(image) {
            let classes = ['shapla-media-modal__item'];

            if (this.selectedImages.length) {
                this.selectedImages.forEach(_image => {
                    if (_image[this.primaryKey] === image[this.primaryKey]) {
                        classes.push('is-selected');
                    }
                });
            }

            return classes;
        },
        selectImage(image) {
            if (this.multiple) {
                this.selectedImages.push(image);
            } else {
                this.selectedImages = [image];
            }
        },
        chooseImage() {
            this.$emit('select:image', this.multiple ? this.selectedImages : this.selectedImages[0]);
            this.closeModal();
        },
        initEvent(formData) {
            this.$emit('init', formData);
        },
        progressEvent(fileObject, event) {
            this.$emit('progress', fileObject, event);
        },
        finishedEvent(fileObject, response) {
            this.$emit('success', fileObject, response);
        },
        failedEvent(fileObject, response) {
            this.$emit('failed', fileObject, response);
        },
        errorEvent(fileObject) {
            this.$emit('error', fileObject);
        },
        beforeSendEvent(xhr, formData) {
            this.$emit('before:send', xhr, formData);
        },
    }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.media-modal;
</style>
