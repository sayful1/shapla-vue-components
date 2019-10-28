<template>
    <button :class="getClasses" :disabled="disabled" @click="handleClick($event)">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: "shaplaButton",
        props: {
            theme: {
                type: String,
                default: 'default',
                validator: value => ['default', 'primary', 'secondary'].indexOf(value) !== -1
            },
            size: {
                type: String,
                default: 'normal',
                validator: value => ['small', 'normal', 'medium', 'large'].indexOf(value) !== -1
            },
            fullwidth: {
                type: Boolean,
                default: false
            },
            disabled: {
                type: Boolean,
                default: false
            },
        },
        computed: {
            getClasses() {
                let classes = ['shapla-button'];

                if (this.fullwidth) {
                    classes.push('is-fullwidth')
                }

                if ('default' !== this.theme) {
                    classes.push(`is-${this.theme}`);
                }

                if ('normal' !== this.size) {
                    classes.push(`is-${this.size}`);
                }

                return classes;
            }
        },
        methods: {
            handleClick(event) {
                this.$emit('click', event);
            }
        }
    }
</script>

<style lang="scss">
    @import "button";
</style>