<template>
  <div id="app" class="shapla-vue-components--demo">
    <div class="container mx-auto">
      <button @click="active = true">Start loading</button>
      <p>Loader will be close atomically after 4 seconds.</p>
      <div class="flex space-x-4 p-4">
        <shapla-spinner :active="active" size="default" :single="false" :show-text="true"/>
      </div>
    </div>
  </div>
</template>

<script>
import ShaplaSpinner from "../src/index";
import {ref, onMounted, watch} from 'vue'

export default {
  name: 'ExampleSpinner',
  components: {ShaplaSpinner},
  setup() {
    const active = ref(false);

    watch(() => active.value, newValue => {
      if (newValue) {
        setTimeout(() => active.value = false, 4000);
      }
    })
    return {
      active
    }
  }
}
</script>

<style lang="scss">
</style>
