<template>
  <div :class="containerClass" v-if="active">
    <div class="shapla-spinner-inner" :class="{'has-text':showText}">
      <div class="shapla-spinner" :class="getClass">
        <div :class="itemClass(index)" v-for="index in [1, 2, 3, 4]" :key="index">
          <div class="shapla-spinner__circle-clipper shapla-spinner__left">
            <div class="shapla-spinner__circle"></div>
          </div>
          <div class="shapla-spinner__gap-patch">
            <div class="shapla-spinner__circle"></div>
          </div>
          <div class="shapla-spinner__circle-clipper shapla-spinner__right">
            <div class="shapla-spinner__circle"></div>
          </div>
        </div>
      </div>
      <div class="shapla-spinner-text" v-if="showText">{{ loadingText }}</div>
    </div>
  </div>
</template>

<script>
import {computed, onMounted, watch} from "vue";

export default {
  name: "ShaplaSpinner",
  props: {
    active: {type: Boolean, default: true, required: true},
    single: {type: Boolean, default: false, required: false,},
    showText: {type: Boolean, default: false, required: false},
    loadingText: {type: String, default: 'Loading...', required: false},
    position: {
      type: String, default: 'fixed', required: false,
      validator: value => ['fixed', 'absolute', 'static'].indexOf(value) !== -1
    },
    size: {
      type: String, default: 'default', required: false,
      validator: value => ['default', 'large', 'medium', 'small'].indexOf(value) !== -1
    },
  },
  setup(props) {
    const refreshBodyClass = (active) => {
      const body = document.querySelector('body');
      if (active) {
        body.classList.add('has-shapla-spinner');
      } else {
        body.classList.remove('has-shapla-spinner');
      }
    }

    const itemClass = (index) => {
      return [
        'shapla-spinner__layer',
        'shapla-spinner__layer-' + index
      ]
    }

    const containerClass = computed(() => {
      let classes = ['shapla-spinner-container'];
      classes.push(`is-${props.position}`);
      return classes;
    });

    const getClass = computed(() => {
      let classes = [];
      classes.push(`is-${props.size}`);
      if (props.single) classes.push('shapla-spinner-container');
      return classes
    })

    onMounted(() => {
      refreshBodyClass(props.active);
    })

    watch(() => props.active, (newValue) => {
      refreshBodyClass(newValue);
    })

    return {
      itemClass,
      containerClass,
      getClass
    }
  }
}
</script>

<style lang="scss">
@import "index.scss";
</style>
