<template>
    <div>
        <select-field
                v-model="option"
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
                option: '',
                options: ['Sayful Islam', 'Saif Al Araf', 'Aklima'],
            }
        },
    }
</script>

<style scoped>

</style>