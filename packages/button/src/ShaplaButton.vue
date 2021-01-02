<template>
  <a v-if="href" :href="href" :class="btnClasses">
    <slot></slot>
  </a>
  <button v-else :class="btnClasses" :disabled="disabled">
    <slot></slot>
  </button>
</template>

<script>
import {computed} from 'vue';

export default {
  name: "ShaplaButton",
  props: {
    theme: {
      type: String,
      default: 'default',
      validator: value => ['default', 'primary', 'secondary', 'success', 'warning', 'error'].indexOf(value) !== -1
    },
    size: {
      type: String,
      default: 'normal',
      validator: value => ['small', 'normal', 'medium', 'large'].indexOf(value) !== -1
    },
    fullwidth: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    outline: {type: Boolean, default: false},
    rounded: {type: Boolean, default: false},
    fab: {type: Boolean, default: false},
    shadow: {type: Boolean, default: false},
    href: {type: String, default: ''},
  },
  setup(props) {
    const btnClasses = computed(() => {
      let classes = ['shapla-button'];
      if (props.fullwidth) classes.push('is-fullwidth');
      if (props.outline) classes.push('is-outline');
      if (props.rounded) classes.push('is-rounded');
      if (props.fab) classes.push('is-fab');
      if (props.shadow) classes.push('has-shadow');
      if ('default' !== props.theme) classes.push(`is-${props.theme}`);
      if ('normal' !== props.size) classes.push(`is-${props.size}`);

      return classes;
    });

    return {btnClasses}
  }
}
</script>

<style lang="scss">
@import "button";
</style>
