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
      let _class = [];

      if (this.mobile) {
        _class.push(`sm:w-${this.mobile}/12`)
      }

      if (this.tablet) {
        _class.push(`md:w-${this.tablet}/12`)
      }

      if (this.desktop) {
        _class.push(`lg:w-${this.desktop}/12`)
      }

      if (this.widescreen) {
        _class.push(`xl:w-${this.widescreen}/12`)
      }

      if (this.fullhd) {
        _class.push(`xxl:w-${this.fullhd}/12`)
      }

      if (_class.length < 1) {
        _class.push('flex-1');
      }

      return _class;
    }
  }
}
</script>

<style scoped>

</style>
