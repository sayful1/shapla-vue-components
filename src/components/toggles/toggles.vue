<template>
  <div class="shapla-toggles">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ShaplaToggles",
  props: {
    accordion: {type: Boolean, default: true},
    iconPosition: {
      type: String, default: 'left', validator: value => -1 !== ['left', 'right'].indexOf(value)
    },
    boxedMode: {type: Boolean, default: true},
    showDivider: {type: Boolean, default: true},
    titleColor: {
      type: String,
      default: 'default',
      validator: value => -1 !== ['default', 'primary', 'secondary'].indexOf(value)
    },
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.toggles
</style>
