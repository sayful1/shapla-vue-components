<template>
  <div>
    <shapla-cross small @click="triggerAlert('small')"/>
    <shapla-cross @click="triggerAlert('default size')"/>
    <shapla-cross medium @click="triggerAlert('medium size')"/>
    <shapla-cross large @click="triggerAlert('large size')"/>
  </div>
</template>

<script>
import ShaplaCross from "../src/index.js";

export default {
  name: "ExampleCross",
  components: {ShaplaCross},
  setup() {
    const triggerAlert = (message = 'Default message') => {
      alert(message);
    }
    return {triggerAlert}
  }
}
</script>

<style scoped>

</style>
