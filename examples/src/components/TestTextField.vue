<template>
  <div class="shapla-columns is-multiline">
    <div class="shapla-column is-4-tablet">
      <text-field
        label="Recipient’s Full Name *"
        validation-text="Please enter a valid full name"
        v-model="field_two"
      />
    </div>

    <div class="shapla-column is-4-tablet">
      <text-field
        label="Recipient’s Full Name *"
        help-text="*in case of hospital, company or resort, please indicate before street name"
        validation-text="Please enter a valid full name"
        :has-success="true"
        v-model="field_one"
      />
    </div>

    <div class="shapla-column is-4-tablet">
      <text-field
        label="Recipient’s Full Name *"
        help-text="*in case of hospital, company or resort, please indicate before street name"
        validation-text="Please enter a valid full name"
        :has-error="true"
      />
    </div>

    <div class="shapla-column is-4-tablet">
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

    <div class="shapla-column is-4-tablet">
      <text-field
        v-model="field_one"
        type="textarea"
        label="Recipient’s Full Name *"
        help-text="*in case of hospital, company or resort, please indicate before street name"
        validation-text="Please enter a valid full name"
      />
    </div>

    <div class="shapla-column is-4-tablet">
      <text-field
        label="Date field"
        type="date"
        v-model="date_field"
      />
    </div>

    <div class="shapla-column is-4-tablet">
      <text-field
        label="Time field"
        type="time"
        v-model="time_field"
      />
    </div>
  </div>
</template>

<script>
import {textField} from "shapla-vue-components";

export default {
  name: "TestTextField",
  data() {
    return {
      field_one: 'default text',
      field_two: '',
      email: '',
      date_field: '',
      time_field: '',
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

</style>
