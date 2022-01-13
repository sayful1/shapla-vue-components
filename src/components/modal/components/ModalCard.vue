<template>
  <modal-core
    :active="active"
    :show-close-icon="false"
    content-class="shapla-modal-card"
    :content-size="contentSize"
    :close-on-background-click="closeOnBackgroundClick"
    :background-theme="backgroundTheme"
    @close="close"
  >
    <div class="shapla-modal-card__header">
      <p class="shapla-modal-card__title">
        {{ title }}
      </p>
      <delete-icon
        v-if="showCloseIcon"
        medium
        @click="close"
      />
    </div>
    <div class="shapla-modal-card__body">
      <slot />
    </div>
    <div
      class="shapla-modal-card__footer is-pulled-right"
      :class="{'no-content':!showCardFooter}"
    >
      <slot
        v-if="showCardFooter"
        name="foot"
      >
        <button
          class="shapla-button"
          @click.prevent="close"
        >
          Cancel
        </button>
      </slot>
    </div>
  </modal-core>
</template>

<script>
import ModalCore from "./ModalCore.vue";
import deleteIcon from "../../../delete/src/index.js";

export default {
  name: "ModalCard",
  components: {ModalCore, deleteIcon},
  props: {
    active: {type: Boolean, required: true},
    showCloseIcon: {type: Boolean, default: true},
    showCardFooter: {type: Boolean, default: true},
    closeOnBackgroundClick: {type: Boolean, default: true},
    backgroundTheme: {type: String, default: 'dark', validator: value => ['dark', 'light'].indexOf(value) !== -1},
    contentSize: {
      type: String, default: 'medium',
      validator: value => ['small', 'medium', 'large', 'full'].indexOf(value) !== -1
    },
    title: {type: String, default: 'Untitled'},
  },
  methods: {
    close() {
      this.$emit('close');
    },
  }
}
</script>
