<template>
  <label class="shapla-switch" :class="switchClasses">
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
    <span class="shapla-switch__track"> </span>
    <span class="shapla-switch__thumb">
      <span class="shapla-switch__focus-helper"> </span>
    </span>
  </label>
</template>

<script>
import {computed, reactive} from "vue";

export default {
  name: "ShaplaSwitch",
  props: {
    modelValue: {default: false},
    value: {type: String, default: 'on'},
    trueValue: {default: true},
    falseValue: {default: false},
    disabled: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    label: {type: String, default: ''},
  },
  emits: ['update:modelValue', 'focus', 'blur'],
  setup(props, {emit}) {
    const state = reactive({isFocus: false});

    const shouldBeChecked = computed(() => {
      if (props.modelValue instanceof Array) {
        return props.modelValue.includes(props.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return props.modelValue === props.trueValue
    })

    const switchClasses = computed(() => {
      let classes = [];
      if (shouldBeChecked.value) classes.push('is-checked');
      if (props.disabled) classes.push('is-disabled');
      if (state.isFocus) classes.push('is-focused');

      return classes;
    })

    const getValue = event => {
      let isChecked = event.target.checked;

      if (props.modelValue instanceof Array) {
        let newValue = [...props.modelValue];

        if (isChecked) {
          newValue.push(props.value)
        } else {
          newValue.splice(newValue.indexOf(props.value), 1)
        }

        return newValue;
      }

      return isChecked ? props.trueValue : props.falseValue;
    }

    const updateInput = event => {
      if (!props.readonly) emit('update:modelValue', getValue(event));
    }

    const handleFocusEvent = (event) => {
      if (!props.disabled && !props.readonly) {
        state.isFocus = true;
        emit('focus', getValue(event));
      }
    }

    const handleBlurEvent = (event) => {
      if (!props.disabled && !props.readonly) {
        state.isFocus = false;
        emit('blur', getValue(event));
      }
    }

    return {shouldBeChecked, switchClasses, updateInput, handleFocusEvent, handleBlurEvent}
  }
}
</script>

<style lang="scss">
@import "index";
</style>
