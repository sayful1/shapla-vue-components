<template>
  <div id="app" class="shapla-vue-components--demo">
    <div class="container mx-auto">
      <div class="flex space-x-4 p-4">
        <!--        <simple-spinner size="32px"/>-->
        <!--        <simple-spinner size="48px" stroke-width="4"/>-->
        <simple-spinner size="48px" single show-text/>
      </div>
    </div>
  </div>
</template>

<script>
import SimpleSpinner from "../src/SimpleSpinner";

export default {
  name: 'SpinnerExample',
  components: {SimpleSpinner},
  data() {
    return {}
  }
}
</script>

<style lang="scss">
// @import "~shapla-utility-css/src/all";
</style>
