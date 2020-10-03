<template>
  <div id="app" class="shapla-vue-components--demo">
    <div class="container mx-auto">
      <div class="flex space-x-4 p-4">
        <spinner position="static"/>

        <spinner position="static" single/>

        <simple-spinner size="32px"/>
        <simple-spinner size="48px" stroke-width="4"/>
        <simple-spinner size="48px" single/>
      </div>
    </div>
  </div>
</template>

<script>
import spinner from "../src/spinner";
import SimpleSpinner from "../src/SimpleSpinner";

export default {
  name: 'SpinnerExample',
  components: {spinner, SimpleSpinner},
  data() {
    return {
      steps: [
        {key: 'login', number_text: '1', tab_text: 'Login', completed: true},
        {key: 'shipping', number_text: '2', tab_text: 'Shipping', completed: true},
        {key: 'billing', number_text: '3', tab_text: 'Billing', current: true},
        {key: 'order-payment', number_text: '4', tab_text: 'Order & Payment'},
      ]
    }
  }
}
</script>

<style lang="scss">
@import url("https://unpkg.com/shapla-utility-css@1.0.10/dist/utility.css");
</style>
