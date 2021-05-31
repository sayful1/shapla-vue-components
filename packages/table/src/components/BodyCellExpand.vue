<template>
  <td class="shapla-data-table__cell is-expand-toggle-cell">
    <button @click="toggleExpandRow($event)" type="button" class="data-table-toggle-button"
            aria-label="Show more details">
      <data-table-icon icon="expand-less" class="expand-triangle-up"/>
      <data-table-icon icon="expand-more" class="expand-triangle-down"/>
    </button>
  </td>
</template>

<script>
import DataTableIcon from "./DataTableIcon.vue";

export default {
  name: "BodyCellExpand",
  components: {DataTableIcon},
  emits: ['click:expand'],
  setup(props, {emit}) {
    const toggleExpandRow = event => emit('click:expand', event)

    return {toggleExpandRow}
  }
}
</script>

<style scoped>

</style>
