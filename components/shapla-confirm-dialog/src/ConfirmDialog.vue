<template>
  <modal type="confirm" class="shapla-modal--confirm" :active="modalActive" :show-close-icon="false"
         content-size="small" v-if="modalActive">
    <div class="shapla-confirm-modal">
      <div class="shapla-confirm-modal__content">
        <div class="shapla-confirm-modal__icon" :class="`is-${params.icon}`" v-if="params.icon">
          <div class="shapla-confirm-modal__icon-content">!</div>
        </div>
        <h3 class="shapla-confirm-modal__title" v-if="params.title" v-html="params.title"></h3>
        <div class="shapla-confirm-modal__message" v-html="params.message"></div>
      </div>
      <div class="shapla-confirm-modal__actions">
        <shapla-button theme="default" :class="cancelButtonClass" @click.prevent="handleClick(false)"
                       v-if="params.cancelButton" v-text="params.cancelButton"/>
        <shapla-button theme="primary" :class="confirmButtonClass" @click.prevent="handleClick(true)"
                       v-if="params.confirmButton" v-text="params.confirmButton"/>
      </div>
    </div>
  </modal>
</template>

<script>
import modal from 'shapla-modal';
import shaplaButton from 'shapla-button';
import Dialog from './ModalPlugin';

export default {
  name: 'ConfirmDialog',
  components: {modal, shaplaButton},
  props: {
    confirmButtonClass: {type: String, default: 'button button--confirm'},
    cancelButtonClass: {type: String, default: 'button button--cancel'},
  },
  data() {
    return {
      params: {
        type: '',
        icon: '',
        title: '',
        message: 'Are you sure?',
        confirmButton: 'Ok',
        cancelButton: 'Cancel'
      },
      modalActive: false,
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
@import "~shapla-color-system/src/variables";

.shapla-modal--confirm {
  .shapla-modal-background {
    background-color: rgba(#fff, 0.6);
  }

  .shapla-modal-content {
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 0 9px 46px 8px rgba(0, 0, 0, 0.14), 0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2);
  }
}

.shapla-confirm-modal {

  &__content {
    padding: 1rem;
    text-align: center;
  }

  &__actions {
    padding: 1rem;
    display: flex;
    justify-content: center;

    button:not(:last-child) {
      margin-right: 1rem;
    }
  }

  &__icon {
    display: flex;
    justify-content: center;
    width: 5em;
    height: 5em;
    margin: 1.25em auto 1.875em;
    border-radius: 50%;
    cursor: default;
    user-select: none;
    border: .25em solid $primary;
    color: $primary;

    &.is-success {
      border-color: $success;
      color: $success;
    }

    &.is-error {
      border-color: $error;
      color: $error;
    }

    &-content {
      display: flex;
      align-items: center;
      font-size: 3.75em;
    }
  }

  &__title {
    font-size: 1.875em;
    text-align: center;
    margin: 0 0 .4em;
  }
}
</style>
