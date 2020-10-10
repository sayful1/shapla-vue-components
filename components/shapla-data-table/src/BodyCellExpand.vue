<template>
  <td class="shapla-data-table__cell shapla-data-table__cell--expand">
    <button @click="toggleExpandRow($event)" type="button" class="data-table-toggle-button"
            aria-label="Show more details">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
              class="expand-triangle-up"></path>
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
              class="expand-triangle-down"></path>
        <path d="M0 0h24v24H0z" fill="none"></path>
      </svg>
    </button>
  </td>
</template>

<script>
export default {
  name: "BodyCellExpand",
  methods: {
    toggleExpandRow(event) {
      this.$emit('click:expand', event);
    }
  }
}
</script>

<style scoped>

</style>
