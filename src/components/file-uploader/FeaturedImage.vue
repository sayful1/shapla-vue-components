<template>
  <div class="shapla-featured-image">
    <div
      v-if="has_image"
      class="shapla-featured-image__thumbnail"
    >
      <image-container
        container-width="150px"
        container-height="150px"
      >
        <img
          :src="imageUrl"
          :alt="imageAltText"
        >
      </image-container>
      <delete-icon
        :title="removeButtonText"
        @click="clearImages"
      />
    </div>
    <div
      v-if="!has_image"
      class="shapla-featured-image__placeholder"
    >
      {{ placeholderText }}
      <shapla-button
        size="small"
        @click.prevent="addImages"
      >
        {{ buttonText }}
      </shapla-button>
    </div>
  </div>
</template>

<script>
import deleteIcon from '../delete/deleteIcon.vue';
import shaplaButton from '../button/ShaplaButton.vue'
import imageContainer from '../image-container/imageContainer.vue';

export default {
  name: "FeaturedImage",
  components: {deleteIcon, shaplaButton, imageContainer},
  props: {
    placeholderText: {type: String, default: 'No Image Selected'},
    buttonText: {type: String, default: 'Add Image'},
    removeButtonText: {type: String, default: 'Remove'},
    imageUrl: {type: String, default: ''},
    imageAltText: {type: String, default: ''},
  },
  computed: {
    has_image() {
      return !!(this.imageUrl && this.imageUrl.length);
    }
  },
  methods: {
    addImages() {
      this.$emit('click:add');
    },
    clearImages() {
      this.$emit('click:clear');
    }
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.featured-image;
</style>
