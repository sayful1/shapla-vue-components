const selectFieldMixins = {
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        label: {type: String, default: 'Label'},
        value: {type: [String, Number, Boolean], default: null},
        options: {type: Array, default: () => []},
        labelKey: {type: String, default: 'label'},
        valueKey: {type: String, default: 'value'},
        clearable: {type: Boolean, default: true},
        autocomplete: {type: String},
        name: {type: String, required: false},
        id: {type: String, required: false},
        helpText: {type: String, required: false},
        validationText: {type: String, required: false},
        hasError: {type: Boolean, default: false},
        hasSuccess: {type: Boolean, default: false},
        disabled: {type: Boolean, default: false},
        required: {type: Boolean, default: false},
        // searchable: {type: Boolean, default: false},
        // clearSearchOnSelect: {type: Boolean, default: true},
        // multiple: {type: Boolean, default: false},
        // closeOnSelect: {type: Boolean, default: true},
    },
    data() {
        return {
            selectedOption: null,
            isReadonly: false,
            showDropdown: false,
        }
    },
    computed: {
        hasValue() {
            return !(this.value === null || this.value === '' || this.value === undefined);
        },
        hasSelectedOption() {
            return !!(this.selectedOption && typeof this.selectedOption === "object" && Object.keys(this.selectedOption).length);
        },
        getLabelFromValue() {
            let label = '';
            if (this.value) {
                this.filteredOptions.forEach(option => {
                    if (option[this.valueKey] === this.value) {
                        label = option[this.labelKey];
                    }
                })
            }
            return label;
        },
        filteredOptions() {
            if (this.options.length < 1) return [];
            let newOptions = [];
            this.options.forEach(option => {
                if (typeof option == "string") {
                    newOptions.push({label: option, value: option});
                } else if (['number', 'boolean'].indexOf(typeof option) !== -1) {
                    newOptions.push({label: option.toString(), value: option.toString()});
                } else if (typeof option == "object") {
                    newOptions.push({label: option[this.labelKey].toString(), value: option[this.valueKey].toString()});
                }
            });

            return newOptions;
        }
    },
    methods: {
        dropdownItemClasses(option) {
            let classes = [];
            if (this.value === option[this.valueKey]) {
                classes.push('is-active');
            }
            if (this.hasSelectedOption && option[this.valueKey] === this.selectedOption[this.valueKey]) {
                classes.push('is-hover');
            }

            return classes;
        },
        selectOption(option) {
            this.selectedOption = option;
            this.$emit('change', option[this.valueKey]);
        },
        clearSelectedValue() {
            if (this.clearable) {
                this.selectedOption = null;
                this.$emit('change', "");
            }
        },
        handleKeydownEvent(event) {
            // Go Up
            if (38 === event.keyCode) {
                let indexOfSelectedOption = this.filteredOptions.indexOf(this.selectedOption),
                    preIndex = indexOfSelectedOption - 1;
                if (preIndex >= 0) {
                    this.selectedOption = this.filteredOptions[preIndex];
                }

                this.scrollUpIfNeeded();
            }
            // Go Down
            if (40 === event.keyCode) {
                let indexOfSelectedOption = this.filteredOptions.indexOf(this.selectedOption),
                    nextIndex = indexOfSelectedOption + 1;
                if (nextIndex < this.filteredOptions.length) {
                    this.selectedOption = this.filteredOptions[nextIndex];
                }

                this.scrollDownIfNeeded();
            }
            // Select item
            if (13 === event.keyCode) {
                // Go Down
                this.selectOption(this.selectedOption);
                this.isReadonly = false;
                this.showDropdown = false;
                this.$el.querySelector('input').blur();
            }
        },
        scrollUpIfNeeded() {
            let dropdownContent = this.$el.querySelector('.dropdown-menu__content'),
                hoverEl = dropdownContent.querySelector('.dropdown-item.is-hover'),
                hoverElHeight = hoverEl ? hoverEl.clientHeight : 0,
                hoverElFromTop = hoverEl ? hoverEl.offsetTop : 0;

            if (hoverElFromTop < dropdownContent.clientHeight) {
                dropdownContent.scrollTop = hoverElFromTop + hoverElHeight - dropdownContent.clientHeight;
            }
        },
        scrollDownIfNeeded() {
            setTimeout(() => {
                let dropdownContent = this.$el.querySelector('.dropdown-menu__content'),
                    hoverEl = dropdownContent.querySelector('.dropdown-item.is-hover'),
                    hoverElHeight = hoverEl ? hoverEl.clientHeight : 0,
                    hoverElFromTop = hoverEl ? hoverEl.offsetTop : 0;

                dropdownContent.scrollTop = hoverElFromTop + hoverElHeight - dropdownContent.clientHeight;
            }, 50);
        },
        handleFocusEvent() {
            this.isReadonly = true;
            this.showDropdown = true;
        },
        handleBlurEvent() {
            setTimeout(() => {
                this.isReadonly = false;
                this.showDropdown = false;
            }, 200);
        },
    }
};

export default selectFieldMixins;