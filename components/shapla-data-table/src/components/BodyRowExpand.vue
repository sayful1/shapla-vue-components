<template>
  <tr class="shapla-data-table__row" style="display: none">
    <td class="shapla-data-table__cell shapla-data-table__cell--expand" :colspan="colspan">
      <div class="shapla-data-table__cell--expand-content">
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
