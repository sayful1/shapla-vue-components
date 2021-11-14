<template>
  <div>
    <h2>Spinner</h2>
    <columns>
      <column>
        <spinner position="static"/>
      </column>
      <column>
        <spinner position="static" single/>
      </column>
    </columns>
  </div>
</template>

<script>
import {spinner} from 'shapla-vue-components';
import {columns, column} from 'shapla-vue-components'

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
