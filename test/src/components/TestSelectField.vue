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
                options: ['Sayful Islam', 'Saif Al Araf', 'Aklima', 3, true, false, 0, 1,
                    {label: 'Sayful', value: 'SA'}],
            }
        },
    }
</script>

<style scoped>

</style>