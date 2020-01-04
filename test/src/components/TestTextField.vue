<template>
    <text-field
            label="Recipient’s Full Name *"
            help-text="*in case of hospital, company or resort, please indicate before street name"
    />
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