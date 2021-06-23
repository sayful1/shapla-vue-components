<template>
  <div class="shapla-chip" :class="chipClasses" :style="chipStyle">
    <img v-if="image_src" class="shapla-chip__contact" :src="image_src">
    <span class="shapla-chip__text"><slot>{{ text }}</slot></span>
    <shapla-cross v-if="deletable" :small="small" class="shapla-chip__action" @click="deleteChip"/>
  </div>
</template>

<script>
import ShaplaCross from '@shapla/vue-cross';
import {computed} from 'vue';

export default {
  name: "ShaplaChip",
  components: {ShaplaCross},
  props: {
    text: {type: String, required: false},
    image_src: {type: String, required: false},
    deletable: {type: Boolean, default: false},
    small: {type: Boolean, default: false},
    height: {type: String, default: '32px'},
  },
  emits: ['delete'],
  setup(props, {emit}) {
    const deleteChip = () => emit('delete');

    const chipClasses = computed(() => {
      let classes = [];
      if (props.deletable) {
        classes.push('shapla-chip--deletable');
      }
      if (props.image_src) {
        classes.push('shapla-chip--contact');
      }

      return classes;
    });

    const chipStyle = computed(() => {
      let style = {};
      if (props.small) {
        style['--shapla-chip-height'] = '24px';
      }
      if (props.height !== '32px') {
        style['--shapla-chip-height'] = props.height;
      }
      return style;
    })

    return {deleteChip, chipClasses, chipStyle}
  }
}
</script>

<style lang="scss">
@import "index";
</style>
