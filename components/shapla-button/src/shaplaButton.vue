<template>
  <a v-if="href" :href="href" :class="getClasses" @click="handleClick($event)">
    <slot></slot>
  </a>
  <button v-else :class="getClasses" :disabled="disabled" @click="handleClick($event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "shaplaButton",
  props: {
    theme: {
      type: String, default: 'default',
      validator: value => ['default', 'primary', 'secondary', 'success', 'warning', 'error'].indexOf(value) !== -1
    },
    size: {
      type: String, default: 'normal',
      validator: value => ['small', 'normal', 'medium', 'large'].indexOf(value) !== -1
    },
    fullwidth: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    outline: {type: Boolean, default: false},
    rounded: {type: Boolean, default: false},
    fab: {type: Boolean, default: false},
    shadow: {type: Boolean, default: false},
    href: {type: String, default: ''},
  },
  computed: {
    getClasses() {
      let classes = ['shapla-button'];

      if (this.fullwidth) classes.push('is-fullwidth');
      if (this.outline) classes.push('is-outline');
      if (this.rounded) classes.push('is-rounded');
      if (this.fab) classes.push('is-fab');
      if (this.shadow) classes.push('has-shadow');
      if (this.disabled) classes.push('is-disabled');
      if ('default' !== this.theme) classes.push(`is-${this.theme}`);
      if ('normal' !== this.size) classes.push(`is-${this.size}`);

      return classes;
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event);
    }
  }
}
</script>

<style lang="scss">
@import "button";
</style>
