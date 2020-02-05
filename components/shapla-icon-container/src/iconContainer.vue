<template>
    <span :class="classes"><slot></slot></span>
</template>

<script>
    export default {
        name: "iconContainer",
        props: {
            size: {
                type: String,
                required: false,
                validator: value => ['small', 'medium', 'large'].indexOf(value) !== -1
            },
            hoverable: {type: Boolean, default: false},
        },
        computed: {
            classes() {
                let classes = ['shapla-icon'];

                if (this.hoverable) {
                    classes.push('is-hoverable');
                }
                if (this.size) {
                    classes.push('is-' + this.size);
                }

                return classes;
            }
        }
    }
</script>

<style lang="scss">
    @import "icon-container";
</style>
