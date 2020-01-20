<template>
    <div class="shapla-toggles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "toggles",
        props: {
            accordion: {type: Boolean, default: true},
            iconPosition: {
                type: String, default: 'left', validator: value => -1 !== ['left', 'right'].indexOf(value)
            },
            boxedMode: {type: Boolean, default: true},
            showDivider: {type: Boolean, default: true},
        }
    }
</script>

<style scoped>

</style>