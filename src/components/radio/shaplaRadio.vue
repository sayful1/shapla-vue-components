<template>
  <label class="shapla-radio" :class="getClasses">
    <input type="radio" class="shapla-radio__button" :checked="shouldBeChecked" :value="value"
           @change="$emit('change', value)" @focus="isFocus = true" @blur="isFocus = false">
    <span class="shapla-radio__label"><slot>{{ label }}</slot></span>
    <span class="shapla-radio__outer-circle" @mouseenter="isHovered = true" @mouseleave="isHovered = false"/>
    <span class="shapla-radio__inner-circle"/>
  </label>
</template>

<script>

export default {
  name: "shaplaRadio",
  model: {prop: 'modelValue', event: 'change'},
  props: {
    label: {type: String, default: '', required: false},
    value: {type: String,},
    modelValue: {default: ''},
    checked: {type: Boolean, default: undefined},
  },
  data() {
    return {
      isHovered: false,
      isFocus: false
    }
  },
  computed: {
    shouldBeChecked() {
      if (typeof this.checked === "boolean") {
        return this.checked;
      }
      return this.modelValue === this.value
    },
    getClasses() {
      return {
        'is-checked': this.shouldBeChecked,
        'is-focused': this.isFocus,
        'is-hovered': this.isHovered,
      }
    }
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.radio
</style>
