<template>
  <th :class="getHeadCellClass" role="columnheader" scope="col">
    <template v-if="!isSortable">{{ column.label }}</template>
    <template v-else>
      <a href="#" @click.prevent="handleSort">
        <svg v-if="isSortedDesc" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <title>Sort ascending</title>
          <use xlink:href="#icon--arrow-upward"></use>
        </svg>
        <svg v-if="isSortedAsc" xmlns="http://www.w3.org/2000/svg" width="24" height="24">
          <title>Sort descending</title>
          <use xlink:href="#icon--arrow-downward"></use>
        </svg>
        <span>{{ column.label }}</span>
      </a>
    </template>
  </th>
</template>

<script>
export default {
  name: "HeaderCell",
  props: {
    column: {type: Object, required: true},
    isPrimary: {type: Boolean, default: false},
    sortBy: {type: String, default: 'id'},
    sortOrder: {type: String, default: "desc"},
  },
  computed: {
    isSortable() {
      return (typeof this.column.sortable !== "undefined" && this.column.sortable === true);
    },
    isSorted() {
      return this.column.key === this.sortBy;
    },
    isSortedAsc() {
      return this.isSorted && this.sortOrder === 'asc';
    },
    isSortedDesc() {
      return this.isSorted && this.sortOrder === 'desc';
    },
    isNumeric() {
      return (typeof this.column.numeric !== "undefined" && this.column.numeric === true);
    },
    getHeadCellClass() {
      return [
        'shapla-data-table__header-cell',
        'shapla-data-table__header-cell-' + this.column.key,
        {'column-primary': this.isPrimary},
        {'shapla-data-table__header-cell--numeric': this.isNumeric},
        {'is-sortable': this.column.sortable},
        {'is-sorted-ascending': this.isSortedAsc},
        {'is-sorted-descending': this.isSortedDesc}
      ]
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
