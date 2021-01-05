<template>
  <modal-core :active="active" :background-theme="backgroundTheme" :content-size="contentSize"
              content-class="shapla-modal-confirm" :show-close-icon="false">

  </modal-core>
</template>

<script>
import ModalCore from "./ModalCore";

export default {
  name: "ModalConfirm",
  components: {ModalCore},
  props: {
    active: {type: Boolean, required: true},
    backgroundTheme: {
      type: String, default: 'light',
      validator: value => ['dark', 'light'].indexOf(value) !== -1
    },
    contentSize: {
      type: String, default: 'small',
      validator: value => ['small', 'medium', 'large', 'full'].indexOf(value) !== -1
    },
  }
}
</script>

<style scoped>

</style>
