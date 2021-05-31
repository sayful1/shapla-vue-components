<template>
  <div>
    <shapla-checkbox v-model="singleCheckbox">Label goes here.</shapla-checkbox>
    <div class="my-4">
      Value:
      <pre><code>{{ singleCheckbox }}</code></pre>
    </div>

    <shapla-checkbox v-model="multiCheckbox" value="one">One</shapla-checkbox>
    <shapla-checkbox v-model="multiCheckbox" value="two">Two</shapla-checkbox>
    <shapla-checkbox v-model="multiCheckbox" value="three">Three</shapla-checkbox>
    <div class="my-4">
      Value:
      <pre><code>{{ multiCheckbox }}</code></pre>
    </div>
  </div>
</template>

<script>
import ShaplaCheckbox from "../src";
import {ref} from "vue";

export default {
  name: "ExampleCheckbox",
  components: {ShaplaCheckbox},
  setup() {
    const singleCheckbox = ref(false);
    const multiCheckbox = ref([]);
    return {
      singleCheckbox,
      multiCheckbox
    }
  }
}
</script>

<style lang="scss">
</style>
