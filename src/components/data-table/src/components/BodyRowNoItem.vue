<template>
  <tr class="shapla-data-table__row no-items">
    <td :colspan="colspan" class="shapla-data-table__cell has-no-item">
      <slot/>
    </td>
  </tr>
</template>

<script>
export default {
  name: "BodyRowNoItem",
  props: {
    colspan: {type: [String, Number]},
  }
}
</script>

<style>

</style>
