<template>
    <div class="shapla-radio-button">
        <shapla-button :outline="option.value !== value" v-for="option in options" :theme="theme"
                       @click="$emit('change',option.value)">
            <input type="radio" class="shapla-radio-button__input" :checked="option.value === value"
                   :value="option.value">
            <span class="shapla-radio-button__text"><slot>{{ option.label }}</slot></span>
        </shapla-button>
    </div>
</template>

<script>
    import shaplaButton from "shapla-button";

    export default {
        name: "radioButtons",
        components: {shaplaButton},
        model: {prop: 'value', event: 'change'},
        props: {
            options: {type: Array, required: true},
            value: {type: String, default: ''},
            theme: {type: String, default: 'primary'},
        }
    }
</script>

<style lang="scss">
    @import "radio-button";
</style>