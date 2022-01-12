<template>
  <div class="shapla-media-modal">
    <modal :active="active" :title="title" content-size="large" type="card" @close="closeModal">
      <div class="shapla-media-modal__inside">
        <tabs alignment="center">
          <tab name="Upload Images" :selected="true">
            <file-uploader
              :url="url"
              @init="initEvent"
              @success="finishedEvent"
              @before:send="beforeSendEvent"
            />
          </tab>
          <tab name="Media Library">
            <div v-if="images.length" class="shapla-media-modal__items">
              <div :class="itemClasses(_image)" :key="_image.image_id" v-for="_image in images"
                   @click="selectImage(_image)">
                <div class="shapla-media-modal__image">
                  <image-container container-width="100px" container-height="100px">
                    <img :src="_image.attachment_url" :alt="_image.title"/>
                  </image-container>
                </div>
              </div>
            </div>
            <div v-else class="no-item-found" v-html="notFoundText"></div>
          </tab>
        </tabs>
      </div>
      <template v-slot:foot>
        <shapla-button theme="primary" @click="chooseImage" :disabled="!selectedImages.length">
          {{ modalButtonText }}
        </shapla-button>
      </template>
    </modal>
  </div>
</template>

<script>
import modal from '../../modal/src/index.js';
import {tabs, tab} from '../../tabs/src/index.js';
import imageContainer from '../../image-container/src/index.js';
import shaplaButton from "../../button/src/index.js";
import FileUploader from "../../file-uploader/src/index.js";

export default {
  name: "MediaModal",
  components: {modal, tabs, tab, FileUploader, imageContainer, shaplaButton},
  props: {
    active: {type: Boolean, default: false},
    title: {type: String, default: "Media Images"},
    modalButtonText: {type: String, default: 'Set Image'},
    notFoundText: {type: String, default: 'No images found.'},
    images: {type: Array, default: () => []},
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
          if (_image.image_id === image.image_id) {
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
@import "shapla-color-system/src/variables";

.shapla-media-modal {
  &__inside {
    min-height: 250px;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: -8px;
  }

  &__item {
    padding: 8px;

    &.is-selected {
      .shapla-media-modal__image {
        border-color: $primary;
        padding: 3px;
        border-width: 3px;
      }
    }
  }

  &__image {
    padding: 5px;
    border: 1px solid rgba(#000, .12);
  }

  .no-item-found {
    text-align: center;
  }
}
</style>
