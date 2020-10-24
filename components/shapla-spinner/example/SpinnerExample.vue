<template>
  <div id="app" class="shapla-vue-components--demo">
    <div class="container mx-auto">
      <div class="flex space-x-4 p-4">
        <spinner size="48px" :single="false" :show-text="false"/>
      </div>
    </div>
  </div>
</template>

<script>
import spinner from "../src/spinner";

export default {
  name: 'SpinnerExample',
  components: {spinner},
  data() {
    return {}
  }
}
</script>

<style lang="scss">
// @import "~shapla-utility-css/src/all";
</style>
