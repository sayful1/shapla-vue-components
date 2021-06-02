<template>
  <div :class="classes" :style="containerStyles">
    <slot/>
  </div>
</template>

<script>
import {computed} from "vue";

export default {
  name: "ShaplaImage",
  props: {
    containerWidth: {type: String, required: false},
    containerHeight: {type: String, required: false},
    heightRatio: {type: Number, required: false, default: 1},
    widthRatio: {type: Number, required: false, default: 1},
    isRounded: {type: Boolean, required: false, default: false},
  },
  setup(props) {
    const classes = computed(() => {
      let _class = ['shapla-image-container']
      if (!props.containerWidth) _class.push('is-fullwidth');
      if (props.isRounded) _class.push('is-rounded');
      return _class
    })

    const containerStyles = computed(() => {
      let styles = [];

      if (props.containerWidth) {
        styles.push({width: props.containerWidth});
        styles.push({height: props.containerHeight ? props.containerHeight : props.containerWidth});
      } else {
        styles.push({paddingTop: (100 / props.widthRatio * props.heightRatio) + '%'});
      }

      return styles;
    })

    return {classes, containerStyles}
  }
}
</script>

<style lang="scss">
@import "index";
</style>
