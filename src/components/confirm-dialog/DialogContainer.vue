<template>
  <modal
    v-if="modalActive"
    :active="modalActive"
    background-theme="light"
    content-size="small"
    type="confirm"
    :show-close-icon="false"
    :close-on-background-click="false"
  >
    <div class="shapla-modal-confirm__content">
      <div
        v-if="params.icon"
        class="shapla-modal-confirm__icon"
        :class="`is-${params.icon}`"
      >
        <div class="shapla-modal-confirm__icon-content">
          !
        </div>
      </div>
      <h3
        v-if="params.title"
        class="shapla-modal-confirm__title"
        v-html="params.title"
      />
      <div
        class="shapla-modal-confirm__message"
        v-html="params.message"
      />
    </div>
    <div class="shapla-modal-confirm__actions">
      <slot name="actions">
        <shapla-button
          v-if="params.cancelButton"
          @click.prevent="handleClick(false)"
        >
          {{ params.cancelButton }}
        </shapla-button>
        <shapla-button
          v-if="params.confirmButton"
          theme="primary"
          @click.prevent="handleClick(true)"
        >
          {{ params.confirmButton }}
        </shapla-button>
      </slot>
    </div>
  </modal>
</template>

<script>
import shaplaButton from "../button/ShaplaButton.vue";
import modal from '../modal/modal.vue';
import Dialog from './Dialog.js';

export default {
  name: 'DialogContainer',
  components: {modal, shaplaButton},
  data() {
    return {
      modalActive: false,
      params: {
        type: '', icon: 'info', title: '', message: 'Are you sure?',
        confirmButton: 'Ok', cancelButton: 'Cancel'
      },
    };
  },

  beforeMount() {
    Dialog.events.$on('show', params => {
      this.params = Object.assign({
        type: '',
        icon: 'info',
        title: '',
        message: 'Are you sure?',
        confirmButton: 'Ok',
        cancelButton: 'Cancel'
      }, params);
      this.modalActive = true;
    });
  },

  methods: {
    handleClick(confirmed) {
      this.modalActive = false;
      Dialog.events.$emit('clicked', confirmed);
    }
  }
}
</script>
