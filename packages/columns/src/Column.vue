<template>
  <div :class="classes">
    <slot/>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "Column",
  props: {
    mobile: {type: Number},
    tablet: {type: Number},
    desktop: {type: Number},
    widescreen: {type: Number},
    fullhd: {type: Number},
  },
  setup(props) {
    const classes = computed(() => {
      let cssClass = ['shapla-column'];
      if (props.mobile) cssClass.push(`is-${props.mobile}-mobile`);
      if (props.tablet) cssClass.push(`is-${props.tablet}-tablet`)
      if (props.desktop) cssClass.push(`is-${props.desktop}-desktop`)
      if (props.widescreen) cssClass.push(`is-${props.widescreen}-widescreen`)
      if (props.fullhd) cssClass.push(`is-${props.fullhd}-fullhd`)

      return cssClass;
    })

    return {
      classes
    }
  }
}
</script>
