<template>
    <div class="shapla-toggles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "toggles",
        props: {
            accordion: {type: Boolean, default: true}
        }
    }
</script>

<style scoped>

</style>