<template>
  <div class="shapla-modal" :class="{'is-active':active}">
    <div class="shapla-modal-background" @click="backgroundClick"></div>
    <delete-icon v-if="showCloseIcon && !is_card" fixed large @click="close"/>

    <div :class="contentClass">

      <template v-if="is_card">
        <div class="shapla-modal-card__header">
          <p class="shapla-modal-card__title">{{ title }}</p>
          <delete-icon medium v-if="showCloseIcon" @click="close"></delete-icon>
        </div>
        <div class="shapla-modal-card__body">
          <slot></slot>
        </div>
        <div class="shapla-modal-card__footer is-pulled-right">
          <slot name="foot">
            <button class="shapla-button" @click.prevent="close">Cancel</button>
          </slot>
        </div>
      </template>

      <template v-if="!is_card">
        <slot></slot>
      </template>

    </div>
  </div>
</template>

<script>
import deleteIcon from 'shapla-delete';

export default {
  name: "modal",
  components: {deleteIcon},
  props: {
    active: {type: Boolean, required: true},
    title: {type: String, default: 'Untitled'},
    type: {type: String, default: 'card'}, // Also support 'box', 'confirm' design
    closeOnBackgroundClick: {type: Boolean, default: true},
    showCloseIcon: {type: Boolean, default: true},
    contentSize: {
      type: String,
      default: 'medium',
      validator: value => ['small', 'medium', 'large', 'full'].indexOf(value) !== -1
    },
  },
  watch: {
    active(newValue) {
      this.refreshBodyClass(newValue);
    }
  },
  mounted() {
    this.refreshBodyClass(this.active);
  },
  computed: {
    is_card() {
      return this.type === 'card';
    },
    contentClass() {
      return [
        {'shapla-modal-content': true},
        {'shapla-modal-card': this.type === 'card'},
        {'shapla-modal-box': this.type === 'box'},
        {'shapla-modal-confirm': this.type === 'confirm'},
        'is-' + this.contentSize,
        'shapla-modal-content--' + this.type,
      ]
    }
  },
  methods: {
    close() {
      this.$emit('close');
    },
    backgroundClick() {
      if (this.closeOnBackgroundClick) {
        this.close();
      }
    },
    refreshBodyClass(active) {
      let body = document.querySelector('body');
      if (active) {
        body.classList.add('has-shapla-modal');
      } else {
        setTimeout(() => {
          if (document.querySelectorAll('.shapla-modal.is-active').length === 0) {
            body.classList.remove('has-shapla-modal');
          }
        }, 50);
      }
    }
  }
}
</script>

<style lang="scss">
@import "modal";
</style>
