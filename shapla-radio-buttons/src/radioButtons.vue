<template>
    <div class="shapla-radio-button">
        <label v-for="option in options" class="shapla-radio-button__label" :class="getClasses(option)">
            <input type="radio" class="shapla-radio-button__input"
                   :checked="option.value === value"
                   :value="option.value"
                   @change="updateInput(option.value)"
            >
            <span class="shapla-radio-button__text"><slot>{{ option.label }}</slot></span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "radioButtons",
        model: {prop: 'value', event: 'change'},
        props: {
            options: {type: Array, required: true},
            value: {type: String, default: ''},
        },
        methods: {
            getClasses(option) {
                return {
                    'is-checked': option.value === this.value
                }
            },
            updateInput(value) {
                this.$emit('change', value);
            }
        }
    }
</script>

<style lang="scss">
    @import "radio-button";
</style>