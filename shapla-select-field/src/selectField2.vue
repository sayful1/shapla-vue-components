<template>
    <div class="shapla-select shapla-text-field">
        <dropdown :hoverable="false" :close-on-select="true" role="listbox">
            <template v-slot:trigger>
                <text-field :label="label" :value="getLabelFromValue" readonly @keydown="handleKeydownEvent">
                    <template v-slot:icon-right>
                        <span class="icon is-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                                <path fill="none" d="M0 0h24v24H0V0z"/>
                            </svg>
                        </span>
                    </template>
                </text-field>
            </template>
            <template v-for="_option in filteredOptions">
                <span class="dropdown-item" :class="{'is-active':value === _option['value']}" role="option"
                      :aria-selected="value === _option['value']" :key="_option['value']"
                      :data-value="_option['value']" @click="selectOption(_option)">
                    <span v-html="_option['label']"/>
                    <span v-if="value === _option['value']" class="icon is-right">
                        <svg class="icon-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                             viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                    </span>
                </span>
            </template>
        </dropdown>
    </div>
</template>

<script>
    import dropdown from '../../shapla-dropdown';
    import textField from "../../shapla-text-field";

    export default {
        name: "selectField",
        components: {dropdown, textField},
        model: {
            prop: 'value',
            event: 'change'
        },
        props: {
            label: {type: String, default: 'Label'},
            value: {type: [String, Number, Boolean], default: null},
            options: {type: Array, default: () => []},
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
        },
        data() {
            return {
                selectedOption: null
            }
        },
        computed: {
            getLabelFromValue() {
                let label = '';
                if (this.value) {
                    this.filteredOptions.forEach(option => {
                        if (option['value'] === this.value) {
                            label = option['label'];
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
                        newOptions.push({label: option['label'].toString(), value: option['value'].toString()});
                    }
                });

                return newOptions;
            }
        },
        methods: {
            selectOption(option) {
                this.selectedOption = option;
                this.$emit('change', option['value']);
            },
            handleKeydownEvent(event) {
                // Go Up
                if (38 === event.keyCode) {
                    let indexOfSelectedOption = this.filteredOptions.indexOf(this.selectedOption),
                        preIndex = indexOfSelectedOption - 1;
                    if (preIndex >= 0) {
                        let preOption = this.filteredOptions[preIndex];
                        // this.selectedOption = preOption;
                        this.selectOption(preOption);
                    }
                }
                // Go Down
                if (40 === event.keyCode) {
                    let indexOfSelectedOption = this.filteredOptions.indexOf(this.selectedOption),
                        nextIndex = indexOfSelectedOption + 1;
                    if (nextIndex < this.filteredOptions.length) {
                        let nextOption = this.filteredOptions[nextIndex];
                        // this.selectedOption = nextOption;
                        this.selectOption(nextOption);
                    }
                }
                // Select item
                if (13 === event.keyCode) {
                    // Go Down
                    this.selectOption(this.selectedOption);
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "~shapla-color-system/src/variables";

    .shapla-select {
        .dropdown,
        .dropdown-trigger,
        .dropdown-menu {
            width: 100%;
        }

        .dropdown-content {
            max-height: 11em;
            overflow: auto;
        }

        .dropdown-item {
            cursor: pointer;
            padding-right: 3rem;
            text-align: left;
            white-space: nowrap;
            width: 100%;

            &:hover,
            &:hover {
                background-color: #f5f5f5;
                color: $text-primary;
            }

            &.is-active,
            &.is-active {
                color: $primary;
            }

            .icon {
                position: absolute;
                right: .5em;

                svg {
                    fill: $primary;
                }
            }
        }
    }
</style>