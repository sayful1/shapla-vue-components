<template>
  <label
    class="shapla-switch"
    :class="switchClasses"
  >
    <input
      type="checkbox"
      class="shapla-switch__input"
      :checked="shouldBeChecked"
      :value="value"
      :disabled="disabled"
      @change="updateInput"
      @focus="handleFocusEvent"
      @blur="handleBlurEvent"
    >
    <span class="shapla-switch__label"><slot>{{ label }}</slot></span>
    <span class="shapla-switch__track" />
    <span class="shapla-switch__thumb">
      <span class="shapla-switch__focus-helper" />
    </span>
  </label>
</template>

<script>
export default {
  name: "ShaplaSwitch",
  model: {
    prop: 'modelValue',
    event: 'change'
  },
  props: {
    modelValue: {default: false},
    value: {type: String, default: 'on'},
    trueValue: {default: true},
    falseValue: {default: false},
    disabled: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    label: {type: String, default: ''},
  },
  data() {
    return {
      isFocus: false,
    }
  },
  computed: {
    shouldBeChecked() {
      if (this.modelValue instanceof Array) {
        return this.modelValue.includes(this.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return this.modelValue === this.trueValue
    },
    switchClasses() {
      let classes = [];

      if (this.shouldBeChecked) {
        classes.push('is-checked');
      }

      if (this.disabled) {
        classes.push('is-disabled');
      }

      if (this.isFocus) {
        classes.push('is-focused');
      }

      return classes;
    },
  },
  methods: {
    getValue(event) {
      let isChecked = event.target.checked;

      if (this.modelValue instanceof Array) {
        let newValue = [...this.modelValue];

        if (isChecked) {
          newValue.push(this.value)
        } else {
          newValue.splice(newValue.indexOf(this.value), 1)
        }

        return newValue;
      }

      return isChecked ? this.trueValue : this.falseValue;
    },
    updateInput(event) {
      if (!this.readonly) {
        this.$emit('change', this.getValue(event));
      }
    },
    handleFocusEvent(event) {
      if (!this.disabled && !this.readonly) {
        this.isFocus = true;
        this.$emit('focus', this.getValue(event));
      }
    },
    handleBlurEvent(event) {
      if (!this.disabled && !this.readonly) {
        this.isFocus = false;
        this.$emit('blur', this.getValue(event));
      }
    },
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.input-switch
</style>
