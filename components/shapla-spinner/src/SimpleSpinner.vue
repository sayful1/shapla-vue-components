<template>
  <div v-if="active" class="shapla-simple-spinner-container flex items-center justify-center" :class="containerClass">
    <div class="shapla-simple-spinner-inner flex items-center justify-center flex-row" :class="innerClasses">
      <slot>
        <svg class="shapla-simple-spinner" :width="size" :height="size" viewBox="0 0 66 66"
             xmlns="http://www.w3.org/2000/svg">
          <circle class="shapla-simple-spinner__circle" :class="{'is-single':single}" fill="none"
                  :stroke-width="strokeWidth" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
      </slot>
      <div class="shapla-simple-spinner-text m-2" v-if="showText">Loading...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleSpinner",
  props: {
    active: {type: Boolean, default: true},
    single: {type: Boolean, default: false},
    showText: {type: Boolean, default: false},
    theme: {type: String, default: 'light', validator: value => ['light', 'dark'].indexOf(value) !== -1},
    position: {type: String, default: 'fixed'},
    size: {type: String, default: '28px'},
    strokeWidth: {type: String, default: '3px'},
  },
  computed: {
    containerClass() {
      return {
        'is-fixed': this.position === 'fixed',
        'is-absolute': this.position === 'absolute',
        'is-static': this.position === 'static',
        'is-light-theme': this.theme === 'light',
        'is-dark-theme': this.theme === 'dark',
      }
    },
    innerClasses() {
      let classes = [];
      if (this.showText) {
        classes.push('has-text p-4 shadow-3');
      }
      return classes;
    }
  }
}
</script>

<style lang="scss">
@import "simple-spinner";
</style>
