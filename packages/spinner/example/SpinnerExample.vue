<template>
  <div id="app" class="shapla-vue-components--demo">
    <div class="container mx-auto">
      <div class="flex space-x-4 p-4">
        <spinner size="48px" single show-text/>
      </div>
    </div>
  </div>
</template>

<script>
import Spinner from "../src/Spinner";

export default {
  name: 'SpinnerExample',
  components: {Spinner},
  data() {
    return {}
  }
}
</script>

<style lang="scss">
// @import "~shapla-utility-css/src/all";
</style>
