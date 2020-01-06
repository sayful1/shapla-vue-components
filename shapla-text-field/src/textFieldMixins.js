const textFieldMixins = {
    props: {
        type: {
            type: String,
            default: 'text',
            validator: value => (['text', 'email', 'search', 'password', 'tel', 'url', 'number', 'textarea'].indexOf(value) !== -1),
        },
        value: {type: [Number, String]},
        label: {type: String, required: true},
        autocomplete: {type: String},
        name: {type: String, required: false},
        id: {type: String, required: false},
        helpText: {type: String, required: false},
        validationText: {type: String, required: false},
        hasError: {type: Boolean, default: false},
        hasSuccess: {type: Boolean, default: false},
        disabled: {type: Boolean, default: false},
        required: {type: Boolean, default: false},
    },
    data() {
        return {
            isHovered: false,
            isFocus: false,
        }
    },
    computed: {
        hasValue() {
            return !!(this.value && this.value.length);
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
    }
};

export default textFieldMixins;