<template>
  <div style="display: flex">
    <shapla-chip text="Sayful Islam"/>
    <shapla-chip text="Sayful Islam" :deletable="true"/>
    <shapla-chip text="Sayful Islam" image_src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
    <shapla-chip text="Sayful Islam" :deletable="true" image_src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"/>
  </div>
</template>

<script>
import ShaplaChip from "../src";

export default {
  name: "ExampleChip",
  components: {ShaplaChip},
  setup() {
    const handleDeleteEvent = () => {
    }
    return {handleDeleteEvent}
  }
}
</script>

<style scoped>

</style>
