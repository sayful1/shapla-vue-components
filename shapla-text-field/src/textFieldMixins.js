const textFieldMixins = {
    props: {
        type: {
            type: String,
            default: 'text',
            validator: value => (['text', 'email', 'search', 'password', 'tel', 'url', 'number'].indexOf(value) !== -1),
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
        classes() {
            let classes = [];

            if (this.hasError) {
                classes.push('has-error');
            }

            if (this.isHovered && !this.isFocus) {
                classes.push('is-hovered');
            }

            if (this.isFocus) {
                classes.push('is-focused');
            }

            if (this.disabled) {
                classes.push('is-disabled');
            }

            return classes;
        }
    },
    methods: {
        handleInputEvent(event) {
            this.$emit('input', event.target.value);
        }
    }
};

export default textFieldMixins;