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
import shaplaCheckbox from "../src/shaplaCheckbox";

export default {
  name: "CheckboxExample",
  components: {shaplaCheckbox},
  data() {
    return {
      singleCheckbox: false,
      multiCheckbox: []
    }
  }
}
</script>

<style lang="scss">
@import url("https://unpkg.com/shapla-utility-css@1.0.10/dist/utility.css");
</style>
