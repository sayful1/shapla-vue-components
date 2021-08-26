<template>
  <div>
    <h2>Default Icon</h2>
    <delete-icon/>

    <h2>Small Icon</h2>
    <delete-icon small/>

    <h2>Medium Icon</h2>
    <delete-icon medium/>

    <h2>Large Icon</h2>
    <delete-icon large/>

    <h2>Fixed Icon</h2>
    <delete-icon fixed/>
  </div>
</template>

<script>
import deleteIcon from '../src/index.js'

export default {
  name: "TestDelete",
  components: {deleteIcon}
}
</script>

<style scoped>

</style>
