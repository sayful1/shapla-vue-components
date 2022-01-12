<template>
  <span :class="classes" @click="$emit('click', $event)"><slot></slot></span>
</template>

<script>
export default {
  name: "iconContainer",
  props: {
    size: {
      type: String,
      required: false,
      validator: value => ['small', 'medium', 'large'].indexOf(value) !== -1
    },
    hoverable: {type: Boolean, default: false},
  },
  computed: {
    classes() {
      let classes = ['shapla-icon'];

      if (this.hoverable) {
        classes.push('is-hoverable');
      }
      if (this.size) {
        classes.push('is-' + this.size);
      }

      return classes;
    }
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.icon-container;
</style>
