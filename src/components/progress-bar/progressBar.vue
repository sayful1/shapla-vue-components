<template>
  <div :class="classes">
    <div :class="barClasses" role="progressbar" :aria-valuenow="value" aria-valuemin="0" :aria-valuemax="max"
         :style="barStyle">
      <slot>{{ label }}</slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "progressBar",
  props: {
    label: {type: String},
    value: {type: Number},
    max: {type: Number, default: 1},
    striped: {type: Boolean, default: false},
    animated: {type: Boolean, default: false},
    size: {
      type: String,
      default: 'default',
      validator: value => ['default', 'tiny', 'small', 'medium', 'large'].indexOf(value) !== -1
    },
    theme: {
      type: String,
      default: 'default',
      validator: value => ['default', 'primary', 'secondary'].indexOf(value) !== -1
    }
  },
  computed: {
    classes() {
      let classes = ['shapla-progress'];
      if ('default' !== this.size) {
        classes.push(`is-${this.size}`);
      }

      if (!this.value && this.value !== 0) {
        classes.push('is-indeterminate');
        classes.push(`is-${this.theme}`);
      }

      return classes;
    },
    barClasses() {
      let classes = ['shapla-progress-bar'];
      if ('default' !== this.theme) {
        classes.push(`is-${this.theme}`);
      }
      if (this.striped) {
        classes.push(`is-striped`);
      }
      if (this.animated) {
        classes.push(`is-animated`);
      }

      return classes;
    },
    barStyle() {
      if (this.value) {
        let width = Math.round((this.value / this.max) * 100);
        return {width: `${width}%`}
      }
      return {};
    }
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.progress
</style>
