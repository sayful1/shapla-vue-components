<template>
  <modal-core :active="active" :background-theme="backgroundTheme" :content-size="contentSize"
              content-class="shapla-modal-confirm" :show-close-icon="false" :close-on-background-click="false">
    <div class="shapla-modal-confirm__content">
      <div class="shapla-modal-confirm__icon" :class="`is-${icon}`" v-if="icon">
        <div class="shapla-modal-confirm__icon-content">!</div>
      </div>
      <h3 class="shapla-modal-confirm__title" v-if="title" v-html="title"></h3>
      <div class="shapla-modal-confirm__message" v-html="message"></div>
    </div>
    <div class="shapla-modal-confirm__actions">
      <slot name="actions">
        <button class="shapla-button" @click.prevent="handleClick(false)" v-if="cancelButton">{{ cancelButton }}
        </button>
        <button class="shapla-button is-primary" @click.prevent="handleClick(true)" v-if="confirmButton">
          {{ confirmButton }}
        </button>
      </slot>
    </div>
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
    type: {type: String, default: ''},
    icon: {
      type: String, default: 'primary',
      validator: value => ['primary', 'success', 'error'].indexOf(value) !== -1
    },
    title: {type: String, default: ''},
    message: {type: String, default: 'Are you sure?'},
    confirmButton: {type: [String, Boolean], default: 'Ok'},
    cancelButton: {type: [String, Boolean], default: 'Cancel'}
  },
  methods: {
    handleClick(confirmed) {
      this.$emit('click', confirmed)
    }
  }
}
</script>

<style lang="scss">
@import "../styles/modal-confirm";
</style>
