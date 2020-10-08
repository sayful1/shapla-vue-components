<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "column",
  props: {
    mobile: {type: Number},
    tablet: {type: Number},
    desktop: {type: Number},
    widescreen: {type: Number},
    fullhd: {type: Number},
  },
  computed: {
    classes() {
      let _class = {'shapla-column': true};

      if (this.mobile) {
        _class[`is-${this.mobile}-mobile`] = true;
      }

      if (this.tablet) {
        _class[`is-${this.tablet}-tablet`] = true;
      }

      if (this.desktop) {
        _class[`is-${this.desktop}-desktop`] = true;
      }

      if (this.widescreen) {
        _class[`is-${this.widescreen}-widescreen`] = true;
      }

      if (this.fullhd) {
        _class[`is-${this.fullhd}-fullhd`] = true;
      }

      return _class;
    }
  }
}
</script>

<style scoped>

</style>
