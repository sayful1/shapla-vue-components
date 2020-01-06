<template>
    <div class="text-field-columns">
        <div class="text-field-column">
            <text-field
                    label="Recipient’s Full Name *"
                    validation-text="Please enter a valid full name"
                    v-model="field_two"
            />
        </div>

        <div class="text-field-column">
            <text-field
                    label="Recipient’s Full Name *"
                    help-text="*in case of hospital, company or resort, please indicate before street name"
                    validation-text="Please enter a valid full name"
                    :has-success="true"
                    v-model="field_one"
            />

            {{field_one}}
        </div>

        <div class="text-field-column">
            <text-field
                    label="Recipient’s Full Name *"
                    help-text="*in case of hospital, company or resort, please indicate before street name"
                    validation-text="Please enter a valid full name"
                    :has-error="true"
            />
        </div>

        <div class="text-field-column">

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

        <div class="text-field-column">
            <text-field
                    v-model="field_one"
                    type="textarea"
                    label="Recipient’s Full Name *"
                    help-text="*in case of hospital, company or resort, please indicate before street name"
                    validation-text="Please enter a valid full name"
            />
        </div>
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
            handleInputEvent() {
                this.hasEmailError = false;
            },
            validateEmail(value) {
                // var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

                return !!value;//reg.test(value) !== false;
            }
        }
    }
</script>

<style lang="scss">
    .text-field-columns {
        margin: -1rem;
        display: flex;
        flex-wrap: wrap;
    }

    .text-field-column {
        margin-bottom: 1rem;
        width: 33%;
        display: inline-block;
        padding: 1rem;
        float: left;
    }
</style>