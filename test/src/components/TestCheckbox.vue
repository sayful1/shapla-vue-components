<template>
    <div>
        <shapla-checkbox v-model="singleCheckbox">Label goes here.</shapla-checkbox>

        <shapla-checkbox v-model="multiCheckbox" value="one">One</shapla-checkbox>
        <shapla-checkbox v-model="multiCheckbox" value="two">Two</shapla-checkbox>
        <shapla-checkbox v-model="multiCheckbox" value="three">Three</shapla-checkbox>
    </div>
</template>

<script>
    import shaplaCheckbox from "../../../shapla-checkbox/src/shaplaCheckbox";

    export default {
        name: "TestCheckbox",
        components: {shaplaCheckbox},
        data() {
            return {
                singleCheckbox: false,
                multiCheckbox: []
            }
        }
    }
</script>

<style scoped>

</style>