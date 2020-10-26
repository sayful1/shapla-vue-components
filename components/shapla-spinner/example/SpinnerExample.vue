<template>
  <div id="app" class="shapla-vue-components--demo">
    <div class="container mx-auto">
      <div class="flex space-x-4 p-4">
        <spinner :active="true" size="default" :single="false" :show-text="true"/>
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
</style>
