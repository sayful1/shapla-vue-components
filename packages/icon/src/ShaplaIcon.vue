<template>
  <span :class="classes"><slot/></span>
</template>

<script>
import {computed} from "vue";

export default {
  name: "ShaplaIcon",
  props: {
    size: {
      type: String,
      required: false,
      validator: value => ['small', 'medium', 'large'].indexOf(value) !== -1
    },
    hoverable: {type: Boolean, default: false},
  },
  setup(props) {
    const classes = computed(() => {
      let classes = ['shapla-icon'];
      if (props.hoverable) classes.push('is-hoverable');
      if (props.size) classes.push('is-' + props.size);

      return classes;
    });
    return {
      classes
    }
  }
}
</script>

<style lang="scss">
@import "index";
</style>
