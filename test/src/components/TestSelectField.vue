<template>
    <div>
        <select-field
                label="Choose a country"
                :options="options"
        />
    </div>
</template>

<script>
    import selectField from "../../../shapla-select-field";

    export default {
        name: "TestSelectField",
        components: {selectField},
        data() {
            return {
                options: [],
            }
        },
    }
</script>

<style scoped>

</style>