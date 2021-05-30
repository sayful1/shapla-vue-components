<template>
  <div :class="classes" :style="styles">
    <slot/>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "Columns",
  props: {
    multiline: {type: Boolean, default: false},
    centered: {type: Boolean, default: false},
    gapless: {type: Boolean, default: false},
    vcentered: {type: Boolean, default: false},
    mobile: {type: Boolean, default: false},
    desktop: {type: Boolean, default: false},
    columnGap: {type: String},
  },
  setup(props) {
    const styles = computed(() => {
      let styles = {};
      if (props.columnGap) {
        styles['--shapla-column-gap'] = props.columnGap;
      }
      return styles;
    })

    const classes = computed(() => {
      return {
        'shapla-columns': true,
        'is-multiline': props.multiline,
        'is-centered': props.centered,
        'is-gapless': props.gapless,
        'is-vcentered': props.vcentered,
        'is-mobile': props.mobile,
        'is-desktop': props.desktop,
        'is-variable': !!props.columnGap,
      }
    })

    return {
      styles,
      classes
    }
  }
}
</script>

<style lang="scss">
@import "index.scss";
</style>
