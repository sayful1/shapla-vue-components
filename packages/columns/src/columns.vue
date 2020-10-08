<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "columns",
  props: {
    multiline: {type: Boolean, default: true},
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
        'column-gutter-width': true,
        'flex-wrap': this.multiline,
        'justify-center': this.centered,
        'items-center': this.vcentered,
        'sm:flex': this.mobile,
        'md:flex': !this.desktop,
        'lg:flex': this.desktop,
      }
    },
    styles() {
      let styles = {};
      if (this.columnGap) {
        styles['--column-gutter-width'] = this.columnGap;
      }
      if (this.gapless) {
        styles['--column-gutter-width'] = 0;
      }
      return styles;
    }
  }
}
</script>

<style lang="scss">
@import "columns";
</style>
