<template>
  <td class="shapla-data-table__cell is-expand-toggle-cell">
    <button
      type="button"
      class="data-table-toggle-button"
      aria-label="Show more details"
      @click="toggleExpandRow($event)"
    >
      <data-table-icon
        icon="expand-less"
        class="expand-triangle-up"
      />
      <data-table-icon
        icon="expand-more"
        class="expand-triangle-down"
      />
    </button>
  </td>
</template>

<script>
import DataTableIcon from "./DataTableIcon.vue";

export default {
  name: "BodyCellExpand",
  components: {DataTableIcon},
  methods: {
    toggleExpandRow(event) {
      // eslint-disable-next-line vue/custom-event-name-casing
      this.$emit('click:expand', event);
    }
  }
}
</script>
