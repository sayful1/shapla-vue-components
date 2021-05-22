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
    ariaLabel: {type: String, default: 'close'}
  },
  setup(props) {
    const classes = computed(() => {
      return {
        'shapla-delete-icon': true,
        'is-small': props.small,
        'is-medium': props.medium,
        'is-large': props.large,
        'is-fixed': props.fixed,
      }
    });
    return {classes}
  }
}
</script>

<style lang="scss">
@import "index";
</style>
