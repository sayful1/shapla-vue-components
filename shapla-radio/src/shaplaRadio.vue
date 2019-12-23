<template>
    <label class="shapla-radio" :class="getClasses">
        <input type="radio" class="shapla-radio__button" :checked="shouldBeChecked" :value="value"
               @change="updateInput" @focus="updateFocusEvent" @blur="updateBlurEvent">
        <span class="shapla-radio__label"><slot>{{ label }}</slot></span>
        <span class="shapla-radio__outer-circle" @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave"/>
        <span class="shapla-radio__inner-circle"/>
    </label>
</template>

<script>

    export default {
        name: "shaplaRadio",
        model: {prop: 'modelValue', event: 'change'},
        props: {
            label: {type: String, default: '', required: false},
            value: {type: String,},
            modelValue: {default: ''},
        },
        data() {
            return {
                isHovered: false,
                isFocus: false
            }
        },
        computed: {
            shouldBeChecked() {
                return this.modelValue === this.value
            },
            getClasses() {
                return {
                    'is-checked': this.shouldBeChecked,
                    'is-focused': this.isFocus,
                    'is-hovered': this.isHovered,
                }
            }
        },
        methods: {
            updateInput() {
                this.$emit('change', this.value);
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
    @import "radio";
</style>
