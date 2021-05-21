<template>
  <modal-core :active="active" :show-close-icon="false" content-class="shapla-modal-card" :content-size="contentSize"
              :close-on-background-click="closeOnBackgroundClick" :background-theme="backgroundTheme" @close="close">
    <div class="shapla-modal-card__header">
      <p class="shapla-modal-card__title">{{ title }}</p>
      <delete-icon medium v-if="showCloseIcon" @click="$emit('close')"></delete-icon>
    </div>
    <div class="shapla-modal-card__body">
      <slot/>
    </div>
    <div class="shapla-modal-card__footer is-pulled-right">
      <slot name="foot">
        <button class="shapla-button" @click.prevent="$emit('close')">Cancel</button>
      </slot>
    </div>
  </modal-core>
</template>

<script>
import ModalCore from "./ModalCore.vue";
import DeleteIcon from "./DeleteIcon.vue";

export default {
  name: "ModalCard",
  components: {ModalCore, DeleteIcon},
  props: {
    active: {type: Boolean, required: true},
    showCloseIcon: {type: Boolean, default: true},
    closeOnBackgroundClick: {type: Boolean, default: true},
    backgroundTheme: {type: String, default: 'dark', validator: value => ['dark', 'light'].indexOf(value) !== -1},
    contentSize: {
      type: String, default: 'medium',
      validator: value => ['small', 'medium', 'large', 'full'].indexOf(value) !== -1
    },
    title: {type: String, default: 'Untitled'},
  }
}
</script>

<style lang="scss">
@import "../styles/modal-card";
</style>
