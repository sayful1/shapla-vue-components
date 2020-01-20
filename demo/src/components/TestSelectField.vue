<template>
    <div>
        <div class="columns">
            <div class="column">
                <select-field
                        v-model="option"
                        label="Choose a country"
                        :options="options"
                />
            </div>
            <div class="column">
                <select-field
                        v-model="option2"
                        label="Choose a country"
                        help-text="Help text goes here"
                        :options="options"
                />
            </div>
            <div class="column">
                <select-field
                        v-model="option"
                        label="Choose a country"
                        help-text="Help text goes here"
                        validation-text="Validation text test"
                        :has-error="true"
                        :options="options"
                />
            </div>
            <div class="column">
                <select-field
                        v-model="option"
                        label="Choose a country"
                        help-text="Help text goes here"
                        :has-success="true"
                        :options="options"
                />
            </div>
        </div>
    </div>
</template>

<script>
    import selectField from "../../../components/shapla-select-field";

    export default {
        name: "TestSelectField",
        components: {selectField},
        data() {
            return {
                option: '',
                option2: 'SA',
                options: ['Sayful Islam', 'Saif Al Araf', 'Aklima', 3, true, false, 0, 1,
                    {label: 'Sayful', value: 'SA'}],
            }
        },
    }
</script>

<style scoped>

</style>