<template>
  <div class="shapla-text-field" :dir="direction" :class="containerClasses">
    <div class="shapla-text-field__control" :class="{'has-icons-right':hasRightIcon}">
      <textarea
        v-if="isTextarea" class="shapla-text-field__textarea" :class="inputClasses" :id="id" :name="name"
        :value="modelValue"
        :required="required" :disabled="disabled" :autocomplete="autocomplete" :rows="rows" :readonly="readonly"
        placeholder="" :dir="direction" @focus="handleFocusEvent($event)" @keydown="handleKeydownEvent($event)"
        @blur="handleBlurEvent($event)" @input="handleInputEvent($event)"/>
      <input
        v-if="!isTextarea" class="shapla-text-field__input" :class="inputClasses" :type="type" :id="id" :name="name"
        :value="modelValue" :required="required" :disabled="disabled" :autocomplete="autocomplete" :readonly="readonly"
        :placeholder="placeholderText" :dir="direction" @focus="handleFocusEvent($event)"
        @keydown="handleKeydownEvent($event)" @blur="handleBlurEvent($event)" @input="handleInputEvent($event)"/>
      <label class="shapla-text-field__label" :dir="direction" :for="id" v-if="label" v-html="label"/>
      <slot name="icon-right">
        <span class="icon is-right" v-if="hasSuccess">
          <svg class="icon-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </span>
        <span class="icon is-right" v-if="hasError">
          <svg class="icon-error" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
          </svg>
        </span>
      </slot>
    </div>
    <small class="shapla-text-field__help-text is-invalid" v-if="showValidationText" v-html="validationText"/>
    <small class="shapla-text-field__help-text" v-if="showHelpText" v-html="helpText"/>
  </div>
</template>

<script>
import {computed, reactive, toRefs} from 'vue'

const inputTypes = ['text', 'email', 'search', 'password', 'tel', 'url', 'number', 'textarea', 'date', 'time', 'datetime-local'];
const inputSizes = ['default', 'small', 'medium', 'large'];

export default {
  name: "ShaplaInput",
  props: {
    type: {type: String, default: 'text', validator: value => (inputTypes.indexOf(value) !== -1)},
    size: {type: String, default: 'default', validator: value => (inputSizes.indexOf(value) !== -1),},
    modelValue: {type: [Number, String]},
    label: {type: String, required: false},
    placeholder: {type: String},
    autocomplete: {type: String},
    name: {type: String, required: false},
    id: {type: String, required: false},
    helpText: {type: String, required: false},
    validationText: {type: String, required: false},
    hasError: {type: Boolean, default: false},
    hasSuccess: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    required: {type: Boolean, default: false},
    readonly: {type: Boolean, default: false},
    rows: {type: [String, Number]},
    dir: {type: String, default: 'ltr'},
  },
  emits: ['update:modelValue', 'keydown', 'focus', 'blur'],
  setup(props, {emit, slots}) {
    const state = reactive({isHovered: false, isFocus: false});

    const direction = computed(() => -1 !== ['ltr', 'rtl', 'auto'].indexOf(props.dir) ? props.dir : 'ltr')
    const hasNoLabel = computed(() => !(props.label && props.label.length))
    const placeholderText = computed(() => !hasNoLabel.value ? "" : props.placeholder)
    const hasValue = computed(() => !(props.modelValue === null || props.modelValue === '' || props.modelValue === undefined))
    const showValidationText = computed(() => !!(props.validationText && props.validationText.length && props.hasError))
    const showHelpText = computed(() => !!(props.helpText && props.helpText.length))
    const isTextarea = computed(() => (props.type === 'textarea'))
    const hasRightIcon = computed(() => !!(slots['icon-right'] || props.hasSuccess || props.hasError))
    const containerClasses = computed(() => {
      let classes = [];
      if (hasNoLabel.value) classes.push('has-no-label');
      if (props.size !== 'default') classes.push(`is-${props.size}`);
      if ('ltr' !== direction.value) classes.push(`is-direction-${direction.value}`);
      return classes;
    })
    const inputClasses = computed(() => {
      let classes = [];
      if (props.hasSuccess) classes.push('is-valid');
      if (props.hasError) classes.push('is-invalid');
      if (hasValue.value) classes.push('has-value');
      return classes;
    })

    const handleInputEvent = event => emit('update:modelValue', event.target.value);
    const handleKeydownEvent = event => emit('keydown', event)
    const handleFocusEvent = event => {
      state.isFocus = true;
      emit('focus', event.target.value);
    }
    const handleBlurEvent = event => {
      state.isFocus = false;
      emit('blur', event.target.value);
    }

    return {
      ...toRefs(state), handleInputEvent, handleKeydownEvent, handleFocusEvent, handleBlurEvent,
      containerClasses, inputClasses, direction, hasRightIcon, isTextarea, placeholderText, showValidationText,
      showHelpText,
    }
  }
}
</script>

<style lang="scss">
@import "index";
</style>
