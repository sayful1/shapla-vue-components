<template>
  <div>
    <h2>Spinner</h2>
    <columns>
      <column>
        <spinner active position="static"/>
      </column>
      <column>
        <spinner active position="static" single/>
      </column>
    </columns>
  </div>
</template>

<script>
import {spinner} from "../../src/index.js";
import {columns, column} from "../../src/index.js"

export default {
  name: "TestSpinner",
  components: {
    spinner,
    columns,
    column
  }
}
</script>

<style scoped>

</style>
