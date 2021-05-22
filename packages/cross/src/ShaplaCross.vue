<template>
  <span :class="classes" :aria-label="ariaLabel"/>
</template>

<script>
import {computed} from 'vue'

export default {
  name: "ShaplaCross",
  props: {
    small: {type: Boolean, default: false},
    medium: {type: Boolean, default: false},
    large: {type: Boolean, default: false},
    fixed: {type: Boolean, default: false},
    ariaLabel: {type: String, default: 'close'},
    size: {
      type: String,
      default: 'normal',
      validator: value => ['normal', 'small', 'medium', 'large'].indexOf(value) !== -1
    },
  },
  setup(props) {
    const classes = computed(() => {
      return {
        'shapla-delete-icon': true,
        'is-fixed': props.fixed,
        'is-small': props.small || props.size === 'small',
        'is-medium': props.medium || props.size === 'medium',
        'is-large': props.large || props.size === 'large',
      }
    });
    return {classes}
  }
}
</script>

<style lang="scss">
@import "index";
</style>
