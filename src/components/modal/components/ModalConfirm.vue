<template>
  <modal-core
    :active="active"
    :background-theme="backgroundTheme"
    :content-size="contentSize"
    content-class="shapla-modal-confirm"
    :show-close-icon="false"
    :close-on-background-click="false"
  >
    <div class="shapla-modal-confirm__content">
      <div
        v-if="icon"
        class="shapla-modal-confirm__icon"
        :class="`is-${icon}`"
      >
        <div class="shapla-modal-confirm__icon-content">
          !
        </div>
      </div>
      <h3
        v-if="title"
        class="shapla-modal-confirm__title"
        v-html="title"
      />
      <div
        class="shapla-modal-confirm__message"
        v-html="message"
      />
    </div>
    <div class="shapla-modal-confirm__actions">
      <slot name="actions">
        <button
          v-if="cancelButton"
          class="shapla-button"
          @click.prevent="handleClick(false)"
        >
          {{ cancelButton }}
        </button>
        <button
          v-if="confirmButton"
          class="shapla-button is-primary"
          @click.prevent="handleClick(true)"
        >
          {{ confirmButton }}
        </button>
      </slot>
    </div>
  </modal-core>
</template>

<script>
import ModalCore from "./ModalCore.vue";

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
