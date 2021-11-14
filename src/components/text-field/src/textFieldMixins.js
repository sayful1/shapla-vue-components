const textFieldMixins = {
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
};

export default textFieldMixins;
