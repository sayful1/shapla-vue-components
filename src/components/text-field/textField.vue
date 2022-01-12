<template>
  <div class="shapla-text-field" :dir="direction" :class="containerClasses">
    <div class="shapla-text-field__control" :class="{'has-icons-right':hasRightIcon}">
      <template v-if="isTextarea">
        <textarea class="shapla-text-field__textarea" :class="inputClasses" :id="id" :name="name"
                  :value="value" :required="required" :disabled="disabled" :autocomplete="autocomplete"
                  :rows="rows" :readonly="readonly" placeholder="" :dir="direction" @focus="handleFocusEvent($event)"
                  @keydown="handleKeydownEvent($event)" @blur="handleBlurEvent($event)"
                  @input="handleInputEvent($event)"/>
      </template>
      <template v-else>
        <input class="shapla-text-field__input" :class="inputClasses" :type="type" :id="id" :name="name"
               :value="value" :required="required" :disabled="disabled" :autocomplete="autocomplete"
               :readonly="readonly" :placeholder="placeholderText" :dir="direction" @focus="handleFocusEvent($event)"
               @keydown="handleKeydownEvent($event)" @blur="handleBlurEvent($event)"
               @input="handleInputEvent($event)"/>
      </template>
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
export default {
  name: "textField",
  props: {
    type: {
      type: String,
      default: 'text',
      validator: value => (['text', 'email', 'search', 'password', 'tel', 'url', 'number', 'textarea', 'date', 'time', 'datetime-local'].indexOf(value) !== -1),
    },
    size: {
      type: String,
      default: 'default',
      validator: value => (['default', 'small', 'medium', 'large'].indexOf(value) !== -1),
    },
    value: {type: [Number, String]},
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
  data() {
    return {
      isHovered: false,
      isFocus: false,
    }
  },
  computed: {
    direction() {
      if (-1 !== ['ltr', 'rtl', 'auto'].indexOf(this.dir)) {
        return this.dir;
      }
      return 'ltr'
    },
    containerClasses() {
      let classes = [];
      if (this.hasNoLabel) {
        classes.push('has-no-label');
      }
      if (this.size !== 'default') {
        classes.push(`is-${this.size}`);
      }
      if ('ltr' !== this.direction) {
        classes.push(`is-direction-${this.direction}`);
      }
      return classes;
    },
    placeholderText() {
      if (!this.hasNoLabel) {
        return "";
      }
      return this.placeholder;
    },
    hasNoLabel() {
      return !(this.label && this.label.length);
    },
    hasValue() {
      return !(this.value === null || this.value === '' || this.value === undefined);
    },
    showValidationText() {
      return (this.validationText && this.validationText.length) && this.hasError;
    },
    showHelpText() {
      return !!(this.helpText && this.helpText.length);
    },
    isTextarea() {
      return (this.type === 'textarea');
    },
    hasRightIcon() {
      return !!(this.$slots['icon-right'] || this.hasSuccess || this.hasError);
    },
    inputClasses() {
      let classes = [];

      if (this.hasSuccess) {
        classes.push('is-valid');
      }

      if (this.hasError) {
        classes.push('is-invalid');
      }

      if (this.hasValue) {
        classes.push('has-value');
      }

      return classes;
    },
  },
  methods: {
    handleInputEvent(event) {
      this.$emit('input', event.target.value);
    },
    handleFocusEvent(event) {
      this.isFocus = true;
      this.$emit('focus', event.target.value);
    },
    handleBlurEvent(event) {
      this.isFocus = false;
      this.$emit('blur', event.target.value);
    },
    handleKeydownEvent(event) {
      this.$emit('keydown', event);
    }
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.text-field
</style>
