<template>
  <div :class="modalClasses">
    <div :class="backgroundClasses" @click="backgroundClick"></div>
    <shapla-cross v-if="showCloseIcon" :fixed="true" size="large" @click="close"/>
    <div :class="contentClasses">
      <slot/>
    </div>
  </div>
</template>

<script>
import ShaplaCross from "@shapla/vue-cross";
import {computed, watch, onMounted} from 'vue';
import {refreshBodyClass} from '../helpers.js'

export default {
  name: "ModalCore",
  components: {ShaplaCross},
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
  emits: ['close'],
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

    const close = () => {
      return emit('close');
    };

    const backgroundClick = () => {
      if (props.closeOnBackgroundClick) {
        close();
      }
    }

    onMounted(() => {
      refreshBodyClass(props.active);
    })

    watch(() => props.active, newValue => {
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
