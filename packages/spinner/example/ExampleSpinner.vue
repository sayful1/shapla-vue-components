<template>
  <div id="app" class="shapla-vue-components--demo">
    <div class="container mx-auto">
      <div class="flex space-x-4 p-4">
        <shapla-spinner :active="true" size="default" :single="false" :show-text="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import ShaplaSpinner from "../src/index";

export default {
  name: 'ExampleSpinner',
  components: {ShaplaSpinner},
  data() {
    return {}
  }
}
</script>

<style lang="scss">
</style>
