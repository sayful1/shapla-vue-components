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
import DataTableIcon from "./DataTableIcon.vue";
import {computed} from "vue";

export default {
  name: "HeaderCell",
  components: {DataTableIcon},
  props: {
    column: {
      type: Object, required: false, default: () => {
        return {key: '', label: ''}
      }
    },
    isPrimary: {type: Boolean, default: false},
    isCheckbox: {type: Boolean, default: false},
    isExpandToggle: {type: Boolean, default: false},
    sortBy: {type: String, default: 'id'},
    sortOrder: {type: String, default: "desc"},
  },
  emits: ['sort'],
  setup(props, {emit}) {
    const handleSort = () => emit('sort', props.column.key);

    const isNumeric = computed(() => (typeof props.column.numeric !== "undefined" && props.column.numeric === true))
    const isSortable = computed(() => (typeof props.column.sortable !== "undefined" && props.column.sortable === true))
    const isSorted = computed(() => props.column.key === props.sortBy)
    const isSortedAsc = computed(() => props.sortOrder === 'asc')
    const isSortedDesc = computed(() => props.sortOrder === 'desc')

    const getHeadCellClass = computed(() => {
      let classes = ['shapla-data-table__header-cell'];
      if (props.column && props.column.key) classes.push(`shapla-data-table__header-cell-${props.column.key}`);
      if (props.isPrimary) classes.push('column-primary');
      if (props.isCheckbox) classes.push('is-checkbox-cell');
      if (props.isExpandToggle) classes.push('is-expand-toggle-cell');
      if (isNumeric.value) classes.push('is-numeric-cell');
      if (isSortable.value) {
        classes.push('is-sortable');
        if (isSorted.value) classes.push('is-sorted');
        if (isSortedAsc.value) classes.push('is-sorted-ascending');
        if (isSortedDesc.value) classes.push('is-sorted-descending');
      }
      return classes;
    })

    return {
      handleSort,
      isSortable,
      isSortedDesc,
      isSortedAsc,
      getHeadCellClass
    }
  }
}
</script>

<style scoped>

</style>
