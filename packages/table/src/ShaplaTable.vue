<template>
  <div :class="tableClasses">
    <table class="shapla-data-table" :aria-label="areaLabel">

      <table-header>
        <header-cell v-if="showCb" :is-checkbox="true">
          <shapla-checkbox id="cb-select-all-1" @update:modelValue="selectAllItems" :checked="isAllSelected"/>
        </header-cell>
        <header-cell v-for="column in columns" :key="column.key" :column="column" :sort-by="sortBy"
                     :sort-order="sortOrder" :is-primary="actionColumn === column.key" @sort="sortClicked"/>
        <header-cell v-if="showExpand" :is-expand-toggle="true"/>
      </table-header>

      <table-body>
        <template v-if="items.length">
          <template v-for="row in items" :key="row[index]">
            <body-row :class="{'is-selected':selectedItems.includes(row[index])}">
              <td class="shapla-data-table__cell is-checkbox-cell" v-if="showCb">
                <shapla-checkbox :value="row[index]" @update:modelValue="selectItem(row)"
                                 :checked="selectedItems.includes(row[index])"/>
              </td>

              <body-cell v-for="column in columns" :key="column.key" :column="column" :item="row" :actions="actions"
                         :is-primary="actionColumn === column.key" :is-mobile="isMobileView"
                         @click:action="actionClicked" @click:toggle="toggleRow">
                <slot :name="column.key" :row="row">{{ row[column.key] }}</slot>
              </body-cell>

              <body-cell-expand v-if="showExpand" @click:expand="toggleExpandRow"/>
            </body-row>
            <body-row-expand v-if="showExpand" :colspan="colspan" :key="`${row[index]}-expand`">
              <slot name="cellExpand" :row="row"/>
            </body-row-expand>
          </template>
        </template>

        <body-row-no-item v-if="!items.length" :colspan="colspan">{{ notFoundText }}</body-row-no-item>

      </table-body>
    </table>
  </div>
</template>

<script>
import {computed, ref, onMounted} from 'vue';
import ShaplaCheckbox from '@shapla/vue-checkbox';
import HeaderCell from "./components/HeaderCell.vue";
import BodyCell from "./components/BodyCell.vue";
import BodyCellExpand from "./components/BodyCellExpand.vue";
import BodyRowExpand from "./components/BodyRowExpand.vue";
import BodyRowNoItem from "./components/BodyRowNoItem.vue";
import TableHeader from "./components/TableHeader.vue";
import TableBody from "./components/TableBody.vue";
import BodyRow from "./components/BodyRow.vue";

export default {
  name: "ShaplaTable",
  components: {
    BodyRow, TableBody, TableHeader, BodyRowNoItem, BodyRowExpand, BodyCellExpand, BodyCell, HeaderCell, ShaplaCheckbox
  },
  props: {
    items: {type: Array, required: true,},
    columns: {type: Array, required: true,},
    selectedItems: {type: Array, default: () => []},
    actions: {type: Array, default: () => []},
    index: {type: String, default: 'id'},
    showCb: {type: Boolean, default: true},
    selectAllText: {type: String, default: 'Select All'},
    notFoundText: {type: String, default: 'No items found.'},
    sortBy: {type: String, default: 'id'},
    sortOrder: {type: String, default: "desc"},
    mobileWidth: {type: Number, default: 768},
    areaLabel: {type: String, required: false},
    showExpand: {type: Boolean, default: false},
  },
  emits: ['click:action', 'click:sort', 'select:item'],
  setup(props, {emit}) {
    const windowWidth = ref(0);
    const isMobileView = computed(() => windowWidth.value <= props.mobileWidth)
    const updateTableWidth = () => windowWidth.value = window.innerWidth;

    const emitItemsSelect = items => emit('select:item', items);
    const actionClicked = (action, row) => emit('click:action', action, row);
    const sortClicked = (column) => emit('click:sort', column, props.sortOrder === 'asc' ? 'desc' : 'asc');

    const tableClasses = computed(() => {
      return {
        'shapla-data-table-container': true,
        'shapla-data-table--mobile': isMobileView.value
      }
    })

    // Find primary/action column
    const actionColumn = computed(() => {
      let column = 'title';
      props.columns.forEach((col, index) => {
        if (index === 0) column = col.key;
      });
      return column;
    })

    // Count colspan for empty table
    const colspan = computed(() => {
      let columns = Object.keys(props.columns).length;
      if (props.showCb) columns += 1;
      if (props.showExpand) columns += 1;

      return columns;
    })

    // Check if all items selected
    const isAllSelected = computed(() => !!(props.items.length && props.selectedItems.length === props.items.length));
    const hasActions = computed(() => props.actions.length > 0)

    onMounted(() => {
      updateTableWidth();
      window.addEventListener('resize', () => updateTableWidth());
      window.addEventListener('orientationchange', () => updateTableWidth());
    })

    const selectItem = item => {
      let value = item[props.index] !== undefined ? item[props.index] : item.id,
        selectedItems = props.selectedItems,
        index = selectedItems.indexOf(value);
      if (-1 === index) {
        selectedItems.push(value);
      } else {
        selectedItems.splice(index, 1);
      }

      emitItemsSelect(selectedItems)
    }

    const selectAllItems = () => {
      let selected = [];

      if (props.items.length && (props.selectedItems.length !== props.items.length)) {
        props.items.forEach(item => selected.push(item[props.index]));
      }
      emitItemsSelect(selected);
    }

    const toggleRow = (event) => {
      let el = event.target, tr = el.closest('tr'), table = el.closest('table');
      table.querySelectorAll('tr').forEach(element => {
        if (element.classList.contains('is-expanded') && element !== tr) {
          element.classList.remove('is-expanded');
        }
      });

      setTimeout(() => tr.classList.toggle('is-expanded'), 50);
    }

    const toggleExpandRow = (event) => {
      let el = event.target, tr = el.closest('tr'), nextTr = tr.nextElementSibling,
        up = tr.querySelector('.expand-triangle-up'),
        down = tr.querySelector('.expand-triangle-down');

      if ("none" === nextTr.style.display) {
        nextTr.style.display = '';
        up.style.display = 'block';
        down.style.display = 'none';
      } else {
        up.style.display = 'none';
        nextTr.style.display = 'none';
        down.style.display = 'block';
      }
    }

    return {
      tableClasses,
      actionColumn,
      colspan,
      isAllSelected,
      hasActions,
      isMobileView,
      selectItem,
      selectAllItems,
      actionClicked,
      sortClicked,
      toggleRow,
      toggleExpandRow
    }
  }
}
</script>

<style lang="scss">
@import "index.scss";
</style>
