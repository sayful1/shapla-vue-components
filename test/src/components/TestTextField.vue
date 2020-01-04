<template>
    <div>
        <text-field
                label="Recipient’s Full Name *"
                validation-text="Please enter a valid full name"
                v-model="field_two"
        />
        <text-field
                label="Recipient’s Full Name *"
                help-text="*in case of hospital, company or resort, please indicate before street name"
                validation-text="Please enter a valid full name"
                :has-success="true"
                v-model="field_one"
        />

        {{field_one}}

        <text-field
                label="Recipient’s Full Name *"
                help-text="*in case of hospital, company or resort, please indicate before street name"
                validation-text="Please enter a valid full name"
                :has-error="true"
        />
    </div>
</template>

<script>
    import textField from "../../../shapla-text-field";

    export default {
        name: "TestTextField",
        data() {
            return {
                field_one: 'default text',
                field_two: '',
            }
        },
        components: {
            textField
        }
    }
</script>

<style scoped>

</style>