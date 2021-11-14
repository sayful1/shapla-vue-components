<template>
  <div>
    <div>
      <h4>Single Switch</h4>

      <shapla-switch v-model="singleSwitch">Enable this</shapla-switch>
      <shapla-switch v-model="singleSwitch" disabled>Enable this</shapla-switch>

      <pre><code>{{ singleSwitch }}</code></pre>
    </div>
    <div>
      <h4>Multiple Switch</h4>

      <shapla-switch v-model="multiSwitches" value="one">If checked, value should be added one.</shapla-switch>
      <shapla-switch v-model="multiSwitches" value="two">If checked, value should be added two.</shapla-switch>
      <shapla-switch v-model="multiSwitches" value="three">If checked, value should be added three.</shapla-switch>

      <pre><code>{{ multiSwitches }}</code></pre>
    </div>
  </div>
</template>

<script>
import {shaplaSwitch} from "shapla-vue-components";

export default {
  name: "TestSwitch",
  components: {
    shaplaSwitch
  },
  data() {
    return {
      singleSwitch: false,
      multiSwitches: []
    }
  }
}
</script>

<style scoped>

</style>
