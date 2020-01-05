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


        <text-field
                label="Email *"
                help-text="Write a valid email address."
                validation-text="Please enter a valid email"
                :has-error="hasEmailError"
                :has-success="hasEmailSuccess"
                v-model="email"
                @blur="handleBlurEvent"
                @input="handleInputEvent"
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
                email: '',
                hasEmailError: false,
                hasEmailSuccess: false,
                emailValidationText: 'write some text'
            }
        },
        components: {
            textField
        },
        methods: {
            handleBlurEvent(value) {
                if (!this.validateEmail(value)) {
                    this.hasEmailError = true;
                } else {
                    this.hasEmailSuccess = true;
                }
            },
            handleInputEvent(value) {
                this.hasEmailError = false;
            },
            validateEmail(value) {
                var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                return reg.test(value) !== false;
            }
        }
    }
</script>

<style scoped>

</style>