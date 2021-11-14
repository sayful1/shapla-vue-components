<template>
  <div class="test-text-field">
    <div class="shapla-columns is-multiline">

      <div class="shapla-column is-3-tablet">
        <text-field label="Text field" help-text="default size" v-model="field_two" size="default"/>
      </div>

      <div class="shapla-column is-3-tablet">
        <text-field label="Text field" help-text="small size" v-model="field_two" size="small"/>
      </div>

      <div class="shapla-column is-3-tablet">
        <text-field label="Text field" help-text="medium size" v-model="field_two" size="medium"/>
      </div>

      <div class="shapla-column is-3-tablet">
        <text-field label="Text field" help-text="large size" v-model="field_two" size="large"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field label="Text field" help-text="Some help text" v-model="field_two"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field placeholder="Placeholder text" help-text="No label" v-model="field_two"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field label="Full Name *" help-text="This field has success status." :has-success="true"
                    v-model="field_one" validation-text="Please enter a valid full name"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field label="Full Name *" help-text="This field has validation error status"
                    validation-text="Please enter a valid full name" :has-error="true"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field label="Email *" :has-error="hasEmailError" :has-success="hasEmailSuccess" v-model="email"
                    @blur="handleBlurEvent" @input="handleInputEvent" help-text="Write a valid email address."
                    validation-text="Please enter a valid email"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field label="Search field" type="search" v-model="field_two"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field label="Password field" type="password" v-model="field_two"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field label="Number field" type="number" v-model="field_two"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field label="Telephone field" type="tel" v-model="field_two"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field label="Url field" type="url" v-model="field_two"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field label="Date field" type="date" v-model="date_field"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field label="Time field" type="time" v-model="time_field"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field label="Date & Time field" type="datetime-local" v-model="datetime_field"/>
      </div>

      <div class="shapla-column is-4-tablet">
        <text-field type="textarea" label="Textarea Field" v-model="field_one"
                    help-text="Some help text." validation-text="Please enter full address"/>
      </div>
    </div>
    <div class="shapla-columns is-multiline">
      <div class="shapla-column is-12-tablet">
        <h2>RTL support</h2>
      </div>
      <div class="shapla-column is-3-tablet">
        <text-field label="Text field" help-text="default size" v-model="field_two" size="default" dir="rtl"/>
      </div>
      <div class="shapla-column is-3-tablet">
        <text-field type="textarea" label="Text field" help-text="default size" v-model="field_two" size="default"
                    dir="rtl"/>
      </div>
    </div>
  </div>
</template>

<script>
import textField from "../src/index";

export default {
  name: "TestTextField",
  data() {
    return {
      field_one: 'default text',
      field_two: '',
      email: '',
      datetime_field: '',
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
      return /^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(value) !== false;
    }
  }
}
</script>

<style lang="scss">
@import url(https://unpkg.com/shapla-columns@1.0.4/dist/columns.css);

.test-text-field {
  padding: 1rem;
}
</style>
