<template>
    <label class="shapla-switch" :class="{'is-checked':shouldBeChecked}">
        <input type="checkbox" class="shapla-switch__input"
               :checked="shouldBeChecked"
               :value="value"
               :disabled="disabled"
               @change="updateInput"
        >
        <span class="shapla-switch__label"><slot>{{ label }}</slot></span>
        <span class="shapla-switch__track"></span>
        <span class="shapla-switch__thumb">
            <span class="shapla-switch__focus-helper"></span>
        </span>
    </label>
</template>

<script>
    export default {
        name: "shaplaSwitch",
        model: {
            prop: 'modelValue',
            event: 'change'
        },
        props: {
            modelValue: {default: false},
            value: {type: String, default: 'on'},
            trueValue: {default: true},
            falseValue: {default: false},
            disabled: {type: Boolean, default: false},
            label: {type: String, default: ''},
        },
        data() {
            return {}
        },
        computed: {
            shouldBeChecked() {
                if (this.modelValue instanceof Array) {
                    return this.modelValue.includes(this.value)
                }
                // Note that `true-value` and `false-value` are camelCase in the JS
                return this.modelValue === this.trueValue
            },
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
            }
        }
    }
</script>

<style lang="scss">
    @import "switch";
</style>