<template>
  <label class="shapla-checkbox" :class="labelClasses">
    <input type="checkbox" class="shapla-checkbox__input"
           :checked="shouldBeChecked"
           :value="value"
           :disabled="disabled"
           @change="updateInput"
           @focus="isFocus = true"
           @blur="isFocus = false"
    >
    <span class="shapla-checkbox__label"><slot>{{ label }}</slot></span>
    <span class="shapla-checkbox__focus-helper"/>
    <span class="shapla-checkbox__box-outline" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
      <span class="shapla-checkbox__tick-outline"/>
    </span>
  </label>
</template>

<script>
export default {
  name: "shaplaCheckbox",
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    label: {type: String, default: ''},
    value: {default: 'on'},
    modelValue: {default: false},
    trueValue: {default: true},
    falseValue: {default: false},
    disabled: {type: Boolean, default: false},
    checked: {type: Boolean, default: undefined},
  },
  data() {
    return {
      isHovered: false,
      isFocus: false,
    }
  },
  computed: {
    shouldBeChecked() {
      if (typeof this.checked === "boolean") {
        return this.checked;
      }

      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue
    },
    labelClasses() {
      return {
        'is-checked': this.shouldBeChecked,
        'is-focused': this.isFocus,
        'is-hovered': this.isHovered,
        'is-disabled': this.disabled,
      }
    }
  },
  methods: {
    updateInput(event) {
      let isChecked = event.target.checked;

      if (this.modelValue instanceof Array) {
        let newValue = [];
        this.modelValue.forEach(el => newValue.push(el))

        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }

        this.$emit('change', newValue)
      } else {
        this.$emit('change', isChecked ? this.trueValue : this.falseValue)
      }
    }
  }
}
</script>

<style lang="scss">
@import "checkbox";
</style>
