<template>
  <div :class="modalClasses">
    <div :class="backgroundClasses" @click="backgroundClick"></div>
    <delete-icon v-if="showCloseIcon" fixed large @click="close"></delete-icon>
    <div :class="contentClasses">
      <slot/>
    </div>
  </div>
</template>

<script>
import DeleteIcon from "./DeleteIcon.vue";
import {computed, watch, onMounted} from 'vue';

const refreshBodyClass = (active) => {
  let body = document.querySelector('body');
  if (active) {
    return body.classList.add('has-shapla-modal');
  }
  setTimeout(() => {
    if (document.querySelectorAll('.shapla-modal.is-active').length === 0) {
      body.classList.remove('has-shapla-modal');
    }
  }, 50);
}
export {refreshBodyClass}
export default {
  name: "ModalCore",
  components: {DeleteIcon},
  props: {
    active: {type: Boolean, required: true},
    showCloseIcon: {type: Boolean, default: true},
    closeOnBackgroundClick: {type: Boolean, default: true},
    contentClass: {type: String, default: ''},
    backgroundTheme: {
      type: String, default: 'dark',
      validator: value => ['dark', 'light'].indexOf(value) !== -1
    },
    contentSize: {
      type: String, default: 'medium',
      validator: value => ['small', 'medium', 'large', 'full'].indexOf(value) !== -1
    },
  },
  emits: {close: null},
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
      if (props.contentClass) {
        classes.push(props.contentClass);
      }
      return classes
    });

    const close = () => emit('close');

    const backgroundClick = () => {
      if (props.closeOnBackgroundClick) {
        close();
      }
    }

    onMounted(() => {
      refreshBodyClass(props.active);
    })

    watch(() => props.active, (newValue) => {
      refreshBodyClass(newValue);
    })

    return {
      modalClasses,
      backgroundClasses,
      contentClasses,
      refreshBodyClass,
      close,
      backgroundClick
    }
  }
}
</script>

<style lang="scss">
@import "../styles/modal-core";
</style>
