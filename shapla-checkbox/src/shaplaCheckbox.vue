<template>
    <label class="shapla-checkbox" :class="labelClasses">
        <input type="checkbox" class="shapla-checkbox__input"
               :checked="shouldBeChecked"
               :value="value"
               :disabled="disabled"
               @change="updateInput"
               @focus="updateFocusEvent"
               @blur="updateBlurEvent"
        >
        <span class="shapla-checkbox__label"><slot>{{ label }}</slot></span>
        <span class="shapla-checkbox__focus-helper"/>
        <span class="shapla-checkbox__box-outline" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave">
            <span class="shapla-checkbox__tick-outline"/>
        </span>
    </label>
</template>

<script>
    export default {
        name: "shaplaCheckbox",
        model: {
            prop: 'modelValue',
            event: 'change'
        },
        props: {
            modelValue: {default: false},
            value: {default: 'on'},
            trueValue: {default: true},
            falseValue: {default: false},
            disabled: {type: Boolean, default: false},
            label: {type: String, default: ''},
        },
        data() {
            return {
                isHovered: false,
                isFocus: false,
            }
        },
        computed: {
            shouldBeChecked() {
                if (this.modelValue instanceof Array) {
                    return this.modelValue.includes(this.value)
                }
                // Note that `true-value` and `false-value` are camelCase in the JS
                return this.modelValue === this.trueValue
            },
            labelClasses() {
                return {
                    'is-checked': this.shouldBeChecked,
                    'is-focused': this.isFocus,
                    'is-hovered': this.isHovered,
                }
            }
        },
        methods: {
            updateInput(event) {
                let isChecked = event.target.checked;

                if (this.modelValue instanceof Array) {
                    let newValue = [...this.modelValue];

                    if (isChecked) {
                        newValue.push(this.value)
                    } else {
                        newValue.splice(newValue.indexOf(this.value), 1)
                    }

                    this.$emit('change', newValue)
                } else {
                    this.$emit('change', isChecked ? this.trueValue : this.falseValue)
                }
            },
            updateFocusEvent() {
                this.isFocus = true;
            },
            updateBlurEvent() {
                this.isFocus = false;
            },
            handleMouseEnter() {
                this.isHovered = true;
            },
            handleMouseLeave() {
                this.isHovered = false;
            },
        }
    }
</script>

<style lang="scss">
    @import "checkbox";
</style>
