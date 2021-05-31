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
import {computed, ref} from 'vue'

export default {
  name: "ShaplaCheckbox",
  emits: ['update:modelValue'],
  model: {prop: 'modelValue', event: 'update:modelValue'},
  props: {
    label: {type: String, default: ''},
    value: {type: [String, Number, Boolean], default: 'on'},
    modelValue: {default: false},
    trueValue: {type: [String, Number, Boolean], default: true},
    falseValue: {type: [String, Number, Boolean], default: false},
    disabled: {type: Boolean, default: false},
    checked: {type: Boolean, default: undefined},
  },
  setup(props, {emit}) {
    const isHovered = ref(false);
    const isFocus = ref(false);

    const shouldBeChecked = computed(() => {
      if (typeof props.checked === "boolean") {
        return props.checked;
      }

      if (props.modelValue instanceof Array) {
        return props.modelValue.includes(props.value)
      }
      // Note that `true-value` and `false-value` are camelCase in the JS
      return props.modelValue === props.trueValue
    })

    const labelClasses = computed(() => {
      let classes = [];
      if (shouldBeChecked.value === true) classes.push('is-checked');
      if (isFocus.value) classes.push('is-focused');
      if (isHovered.value) classes.push('is-hovered');
      if (props.disabled) classes.push('is-disabled');
      return classes
    })

    const updateInput = event => {
      let isChecked = event.target.checked;

      if (props.modelValue instanceof Array) {
        let newValue = [];
        props.modelValue.forEach(el => newValue.push(el))

        if (isChecked) {
          newValue.push(props.value)
        } else {
          newValue.splice(newValue.indexOf(props.value), 1)
        }

        emit('update:modelValue', newValue)
      } else {
        emit('update:modelValue', isChecked ? props.trueValue : props.falseValue)
      }
    }

    return {
      isHovered,
      isFocus,
      shouldBeChecked,
      labelClasses,
      updateInput
    }
  },
}
</script>

<style lang="scss">
@import "index.scss";
</style>
