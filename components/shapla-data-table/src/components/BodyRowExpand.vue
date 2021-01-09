<template>
  <tr class="shapla-data-table__row" style="display: none">
    <td class="shapla-data-table__cell is-expand-cell" :colspan="colspan">
      <div class="expand-cell-content">
        <slot>&nbsp;</slot>
      </div>
    </td>
  </tr>
</template>

<script>
export default {
  name: "BodyRowExpand",
  props: {
    colspan: {type: [String, Number]},
  }
}
</script>

<style scoped>

</style>
