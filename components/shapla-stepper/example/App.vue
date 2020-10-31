<template>
  <div id="app" class="shapla-vue-components--demo">
    <div class="container">
      <columns multiline>
        <column :tablet="12">
          <stepper :steps="steps"/>
        </column>
        <column :tablet="12">
          <stepper :steps="steps" layout="square"/>
        </column>
        <column :tablet="12">
          <stepper :steps="steps" layout="arrow"/>
        </column>
        <column :tablet="12">
          <stepper :steps="steps" layout="progress-bar"/>
        </column>
      </columns>
    </div>
  </div>
</template>

<script>
import {column, columns} from 'shapla-columns'
import Stepper from "../src/Stepper";

export default {
  name: 'app',
  components: {Stepper, columns, column},
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
body {
  background-color: #f1f1f1;
}

.container {
  background-color: white;
  max-width: 1040px;
  margin: 1em auto;
  padding: 1em;
}
</style>
