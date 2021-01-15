<template>
  <th :class="getHeadCellClass" role="columnheader" scope="col">
    <slot>
      <template v-if="!isSortable">{{ column.label }}</template>
      <template v-else>
        <a href="#" @click.prevent="handleSort">
          <data-table-icon v-if="isSortedDesc" icon="arrow-upward"/>
          <data-table-icon v-if="isSortedAsc" icon="arrow-downward"/>
          <span>{{ column.label }}</span>
        </a>
      </template>
    </slot>
  </th>
</template>

<script>
import DataTableIcon from "./DataTableIcon";

export default {
  name: "HeaderCell",
  components: {DataTableIcon},
  props: {
    column: {type: Object, required: false},
    isPrimary: {type: Boolean, default: false},
    sortBy: {type: String, default: 'id'},
    sortOrder: {type: String, default: "desc"},
  },
  computed: {
    isNumeric() {
      return (typeof this.column.numeric !== "undefined" && this.column.numeric === true);
    },
    isSortable() {
      return (typeof this.column.sortable !== "undefined" && this.column.sortable === true);
    },
    isSorted() {
      return this.column.key === this.sortBy;
    },
    isSortedAsc() {
      return this.sortOrder === 'asc';
    },
    isSortedDesc() {
      return this.sortOrder === 'desc';
    },
    getHeadCellClass() {
      let classes = ['shapla-data-table__header-cell', `shapla-data-table__header-cell-${this.column.key}`];
      if (this.isPrimary) classes.push('column-primary');
      if (this.isNumeric) classes.push('is-numeric-cell');
      if (this.isSortable) classes.push('is-sortable');
      if (this.isSortedAsc) classes.push('is-sorted-ascending');
      if (this.isSortedDesc) classes.push('is-sorted-descending');
      return classes;
    }
  },
  methods: {
    handleSort() {
      this.$emit('sort', this.column.key);
    }
  }
}
</script>

<style scoped>

</style>
