<template>
    <div>
        <text-field
                label="Recipient’s Full Name *"
                help-text="*in case of hospital, company or resort, please indicate before street name"
                validation-text="Please enter a valid full name"
                :has-success="true"
        />

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
        components: {
            textField
        }
    }
</script>

<style scoped>

</style>