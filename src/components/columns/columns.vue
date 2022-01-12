<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "columns",
  props: {
    multiline: {type: Boolean, default: false},
    centered: {type: Boolean, default: false},
    gapless: {type: Boolean, default: false},
    vcentered: {type: Boolean, default: false},
    mobile: {type: Boolean, default: false},
    desktop: {type: Boolean, default: false},
    columnGap: {type: String},
  },
  computed: {
    classes() {
      return {
        'shapla-columns': true,
        'is-multiline': this.multiline,
        'is-centered': this.centered,
        'is-gapless': this.gapless,
        'is-vcentered': this.vcentered,
        'is-mobile': this.mobile,
        'is-desktop': this.desktop,
        'is-variable': !!this.columnGap,
      }
    },
    styles() {
      let styles = {};
      if (this.columnGap) {
        styles['--shapla-column-gap'] = this.columnGap;
      }
      return styles;
    }
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.columns;
</style>
