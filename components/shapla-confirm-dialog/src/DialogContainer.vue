<template>
  <modal v-if="modalActive" :active="modalActive" background-theme="light" content-size="small" type="confirm"
         :show-close-icon="false" :close-on-background-click="false">
    <div class="shapla-modal-confirm__content">
      <div class="shapla-modal-confirm__icon" :class="`is-${params.icon}`" v-if="params.icon">
        <div class="shapla-modal-confirm__icon-content">!</div>
      </div>
      <h3 class="shapla-modal-confirm__title" v-if="params.title" v-html="params.title"></h3>
      <div class="shapla-modal-confirm__message" v-html="params.message"></div>
    </div>
    <div class="shapla-modal-confirm__actions">
      <slot name="actions">
        <shapla-button @click.prevent="handleClick(false)" v-if="params.cancelButton">
          {{ params.cancelButton }}
        </shapla-button>
        <shapla-button theme="primary" @click.prevent="handleClick(true)" v-if="params.confirmButton">
          {{ params.confirmButton }}
        </shapla-button>
      </slot>
    </div>
  </modal>
</template>

<script>
import modal from 'shapla-modal';
import shaplaButton from "shapla-button";
import Dialog from './ModalPlugin.js';

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

<style lang="scss">
@import "index";
</style>
