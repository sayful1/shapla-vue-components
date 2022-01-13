<template>
  <modal-core
    :active="active"
    :content-size="contentSize"
    :show-close-icon="showCloseIcon"
    :background-theme="backgroundTheme"
    :close-on-background-click="closeOnBackgroundClick"
    content-class="shapla-modal-box"
    @close="$emit('close')"
  >
    <slot />
  </modal-core>
</template>

<script>
import ModalCore from "./ModalCore.vue";

export default {
  name: "ModalBox",
  components: {ModalCore},
  props: {
    active: {type: Boolean, required: true},
    showCloseIcon: {type: Boolean, default: true},
    closeOnBackgroundClick: {type: Boolean, default: true},
    backgroundTheme: {
      type: String, default: 'dark',
      validator: value => ['dark', 'light'].indexOf(value) !== -1
    },
    contentSize: {
      type: String, default: 'medium',
      validator: value => ['small', 'medium', 'large', 'full'].indexOf(value) !== -1
    },
  }
}
</script>
