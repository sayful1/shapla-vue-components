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
import DeleteIcon from './components/DeleteIcon.vue';
import {refreshBodyClass} from './components/ModalCore.vue';
import {computed, onMounted, watch} from "vue";

export default {
  name: "ShaplaModal",
  components: {DeleteIcon},
  props: {
    active: {type: Boolean, required: true},
    title: {type: String, default: 'Untitled'},
    type: {type: String, default: 'card'}, // Also support 'box', 'confirm' design
    closeOnBackgroundClick: {type: Boolean, default: true},
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
  setup(props, {emit}) {
    const modalClasses = computed(() => {
      let classes = ['shapla-modal'];
      if (props.active) classes.push('is-active');
      return classes;
    });

    const backgroundClasses = computed(() => {
      return ['shapla-modal-background', `is-${props.backgroundTheme}`];
    });

    const contentClasses = computed(() => {
      let classes = ['shapla-modal-content', `is-${props.contentSize}`];
      if (props.type === 'card') classes.push('shapla-modal-card')
      if (props.type === 'box') classes.push('shapla-modal-box')
      if (props.type === 'confirm') classes.push('shapla-modal-confirm')
      if (props.contentClass) {
        classes.push(props.contentClass);
      }
      return classes;
    })

    const close = () => emit('close');

    const backgroundClick = () => {
      if (props.closeOnBackgroundClick) {
        close();
      }
    }

    const is_card = computed(() => props.type === 'card');

    onMounted(() => {
      refreshBodyClass(props.active);
    })

    watch(() => props.active, (newValue) => {
      refreshBodyClass(newValue);
    })

    return {
      close,
      backgroundClick,
      is_card,
      modalClasses,
      backgroundClasses,
      contentClasses
    }
  }
}
</script>

<style lang="scss">
@import "index";
</style>
