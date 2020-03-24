const selectFieldMixins = {
    model: {
        prop: 'value',
        event: 'change'
    },
    props: {
        label: {type: String, default: 'Label'},
        value: {type: [String, Number, Boolean, Array], default: null},
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
        searchable: {type: Boolean, default: false},
        closeOnSelect: {type: Boolean, default: true},
        clearSearchOnSelect: {type: Boolean, default: true},
        multiple: {type: Boolean, default: false},
        noOptionsText: {type: String, default: 'Sorry, no matching options.'},
        singularSelectedText: {type: String, default: 'item selected'},
        pluralSelectedText: {type: String, default: 'items selected'},
    },
    data() {
        return {
            selectedOption: null,
            selectedOptions: [],
            isReadonly: false,
            showDropdown: false,
            search: '',
        }
    },
    watch: {
        value(newValue) {
            if (Array.isArray(newValue) && this.multiple) {
                this.selectedOptions = this.selectedOptions.filter(option => newValue.indexOf(option['value']) !== -1);
            }
            if (!newValue) {
                this.selectedOption = {};
            }
        }
    },
    mounted() {
        window.addEventListener('click', event => {
            if (!this.$el.contains(event.target)) {
                this.showDropdown = false;
            }
        });
        if (this.multiple && Array.isArray(this.value)) {
            this.selectedOptions = this.filteredOptions.filter(option => this.value.indexOf(option['value']) !== -1);
        }
    },
    computed: {
        hasValue() {
            if (Array.isArray(this.value)) {
                return !!this.value.length;
            }
            return !(this.value === null || this.value === '' || this.value === undefined);
        },
        hasSelectedOption() {
            return !!(this.selectedOption && typeof this.selectedOption === "object" && Object.keys(this.selectedOption).length);
        },
        getLabelFromValue() {
            let label = '';
            if (this.value && !this.multiple) {
                this.filteredOptions.forEach(option => {
                    if (option['value'] == this.value) {
                        label = option['label'];
                    }
                })
            }
            if (this.multiple && this.selectedOptions.length) {
                if (this.selectedOptions.length > 1) {
                    label = `${this.selectedOptions.length} ${this.pluralSelectedText}`;
                } else {
                    label = `${this.selectedOptions.length} ${this.singularSelectedText}`;
                }
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

            if (this.search.length) {
                return newOptions.filter(option => option['label'].toLowerCase().includes(this.search.toLowerCase()) ||
                    option['value'].toLowerCase().includes(this.search.toLowerCase()));
            }

            return newOptions;
        }
    },
    methods: {
        isItemSelected(option) {
            if (Array.isArray(this.value)) {
                return this.value.indexOf(option['value']) !== -1;
            }
            return this.value == option['value'];
        },
        dropdownItemClasses(option) {
            let classes = [];
            if (this.isItemSelected(option)) {
                classes.push('is-active');
            }
            if (this.hasSelectedOption && option['value'] === this.selectedOption['value']) {
                classes.push('is-hover');
            }

            return classes;
        },
        selectOption(option) {
            if (this.multiple) {
                if (!this.selectedOptions.find(word => word.value == option.value)) {
                    this.selectedOptions.push(option);
                    let values = this.selectedOptions.map(_option => _option.value);
                    this.$emit('change', values);
                }
            } else {
                this.selectedOption = option;
                this.$emit('change', this.selectedOption['value']);
            }

            if (this.closeOnSelect && !this.multiple) {
                this.showDropdown = false;
            }
            if (this.clearSearchOnSelect) {
                this.search = '';
            }
        },
        clearSelectedValue() {
            if (this.clearable) {
                this.selectedOption = null;
                this.selectedOptions = [];
                this.$emit('change', this.multiple ? [] : "");
            }
        },
        removeSelectedItem(_option) {
            this.selectedOptions.splice(this.selectedOptions.indexOf(_option), 1);
            if (this.selectedOptions.length) {
                this.$emit('change', this.selectedOptions.map(option => option.value));
            } else {
                this.$emit('change', []);
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
            let dropdownContent = this.$el.querySelector('.shapla-dropdown-menu__content'),
                hoverEl = dropdownContent.querySelector('.shapla-dropdown-item.is-hover'),
                hoverElHeight = hoverEl ? hoverEl.clientHeight : 0,
                hoverElFromTop = hoverEl ? hoverEl.offsetTop : 0;

            if (hoverElFromTop < dropdownContent.clientHeight) {
                dropdownContent.scrollTop = hoverElFromTop + hoverElHeight - dropdownContent.clientHeight;
            }
        },
        scrollDownIfNeeded() {
            setTimeout(() => {
                let dropdownContent = this.$el.querySelector('.shapla-dropdown-menu__content'),
                    hoverEl = dropdownContent.querySelector('.shapla-dropdown-item.is-hover'),
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
                // this.showDropdown = false;
            }, 200);
        },
    }
};

export default selectFieldMixins;
