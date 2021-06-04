<template>
  <div>
    <shapla-radio
      v-for="_option in testOptions"
      :key="_option.value"
      v-model="radioTest"
      :label="_option.label"
      :value="_option.value"
    />

    <pre><code>{{ radioTest }}</code></pre>
  </div>
</template>

<script>
import ShaplaRadio from "../src";

export default {
  name: "ExampleRadio",
  components: {ShaplaRadio},
  data() {
    return {
      radioTest: '',
      testOptions: [
        {label: 'One', value: 'one'},
        {label: 'Two', value: 'two'},
        {label: 'Three', value: 'three'},
      ],
    }
  }
}
</script>

<style scoped>

</style>
