<template>
  <div :class="modalClasses">
    <div :class="backgroundClasses" @click="backgroundClick"></div>
    <delete-icon v-if="showCloseIcon && !is_card" fixed large @click="close"/>

    <div :class="contentClasses">

      <template v-if="is_card">
        <div class="shapla-modal-card__header">
          <p class="shapla-modal-card__title">{{ title }}</p>
          <delete-icon medium v-if="showCloseIcon" @click="close"></delete-icon>
        </div>
        <div class="shapla-modal-card__body">
          <slot></slot>
        </div>
        <div class="shapla-modal-card__footer is-pulled-right" :class="{'no-content':!showCardFooter}">
          <slot name="foot" v-if="showCardFooter">
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
    showCardFooter: {type: Boolean, default: true},
    showCloseIcon: {type: Boolean, default: true},
    contentClass: {type: String, default: ''},
    backgroundTheme: {
      type: String, default: 'dark',
      validator: value => ['dark', 'light'].indexOf(value) !== -1
    },
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
    modalClasses() {
      let classes = ['shapla-modal'];
      if (this.active) {
        classes.push('is-active');
      }
      return classes;
    },
    backgroundClasses() {
      return ['shapla-modal-background', `is-${this.backgroundTheme}`];
    },
    contentClasses() {
      let classes = ['shapla-modal-content', `is-${this.contentSize}`];
      if (this.type === 'card') classes.push('shapla-modal-card')
      if (this.type === 'box') classes.push('shapla-modal-box')
      if (this.type === 'confirm') classes.push('shapla-modal-confirm')
      if (this.contentClass) {
        classes.push(this.contentClass);
      }
      return classes;
    },
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
@import "index";
</style>
