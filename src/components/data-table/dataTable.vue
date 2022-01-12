<template>
  <div :class="tableClasses">
    <table class="shapla-data-table" :aria-label="areaLabel">

      <table-header>
        <header-cell v-if="showCb" :is-checkbox="true">
          <shapla-checkbox id="cb-select-all-1" @change="handleSelectAll" :checked="isAllSelected"/>
        </header-cell>
        <header-cell v-for="column in columns" :key="column.key" :column="column" :sort-by="sortBy"
                     :sort-order="sortOrder" :is-primary="actionColumn === column.key" @sort="handleSortBy"/>
        <header-cell v-if="showExpand" :is-expand-toggle="true"/>
      </table-header>

      <table-body>
        <template v-if="items.length">
          <template v-for="row in items">
            <body-row :key="row[index]" :class="{'is-selected':selectedItems.includes(row[index])}">
              <td class="shapla-data-table__cell is-checkbox-cell" v-if="showCb">
                <shapla-checkbox :value="row[index]" @change="handleSelectItem(row)"
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
              <slot name="cellExpand" :row="row">&nbsp;</slot>
            </body-row-expand>
          </template>
        </template>

        <body-row-no-item v-if="!items.length" :colspan="colspan">{{ notFoundText }}</body-row-no-item>

      </table-body>
    </table>
  </div>
</template>

<script>
import shaplaCheckbox from '../checkbox/ShaplaCheckbox.vue';
import HeaderCell from "./components/HeaderCell.vue";
import BodyCell from "./components/BodyCell.vue";
import BodyCellExpand from "./components/BodyCellExpand.vue";
import BodyRowExpand from "./components/BodyRowExpand.vue";
import BodyRowNoItem from "./components/BodyRowNoItem.vue";
import TableHeader from "./components/TableHeader.vue";
import TableBody from "./components/TableBody.vue";
import BodyRow from "./components/BodyRow.vue";

export default {
  name: "dataTable",
  components: {
    BodyRow, TableBody, TableHeader, BodyRowNoItem, BodyRowExpand, BodyCellExpand, BodyCell, HeaderCell, shaplaCheckbox
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
  data() {
    return {
      windowWidth: 0,
    }
  },
  computed: {
    isMobileView() {
      return this.windowWidth <= this.mobileWidth;
    },
    actionColumn() {
      let column = 'title';
      this.columns.forEach((col, index) => {
        if (index === 0) column = col.key;
      });
      return column;
    },
    tableClasses() {
      return {
        'shapla-data-table-container': true,
        'shapla-data-table--mobile': this.isMobileView
      }
    },
    colspan() {
      let columns = Object.keys(this.columns).length;

      if (this.showCb) {
        columns += 1;
      }

      if (this.showExpand) {
        columns += 1;
      }

      return columns;
    },

    expandColSpanLength() {
      let length = this.columns.length + 1;
      if (this.showCb) {
        length += 1;
      }
      return length;
    },

    hasActions() {
      return this.actions.length > 0;
    },

    isAllSelected() {
      if (!this.items.length) {
        return false;
      }

      return this.selectedItems.length === this.items.length;
    }
  },
  mounted() {
    this.updateTableWidth();

    window.addEventListener('resize', () => {
      this.updateTableWidth();
    });

    window.addEventListener('orientationchange', () => {
      this.updateTableWidth();
    });
  },
  methods: {
    updateTableWidth() {
      if (this.$el.offsetWidth) {
        this.windowWidth = this.$el.offsetWidth;
      } else {
        this.windowWidth = window.innerWidth;
      }
    },

    getHeadCellClass(value) {
      let isNumeric = (typeof value.numeric !== "undefined" && value.numeric === true);
      return [
        'shapla-data-table__header-cell',
        'shapla-data-table__header-cell-' + value.key,
        {'is-numeric-cell': isNumeric},
        {'column-primary': this.actionColumn === value.key},
        {'is-sortable': this.isSortable(value)},
        {'is-sorted-ascending': this.isSorted(value.key) && this.sortOrder === 'asc'},
        {'is-sorted-descending': this.isSorted(value.key) && this.sortOrder === 'desc'}
      ]
    },
    getBodyCellClass(value) {
      let isNumeric = (typeof value.numeric !== "undefined" && value.numeric === true);
      return [
        'shapla-data-table__cell',
        'shapla-data-table__cell-' + value.key,
        {'is-numeric-cell': isNumeric},
        {'column-primary': this.actionColumn === value.key},
      ]
    },
    toggleRow(event) {
      let el = event.target, tr = el.closest('tr'), table = el.closest('table');
      table.querySelectorAll('tr').forEach(element => {
        if (element.classList.contains('is-expanded') && element !== tr) {
          element.classList.remove('is-expanded');
        }
      });

      setTimeout(() => {
        tr.classList.toggle('is-expanded');
      }, 50);
    },


    toggleExpandRow(event) {
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
    },

    actionClicked(action, row) {
      // eslint-disable-next-line vue/custom-event-name-casing
      this.$emit('action:click', action, row);
    },

    isSortable(column) {
      return column.sortable && column.sortable === true;
    },

    isSorted(column) {
      return column === this.sortBy;
    },

    handleSortBy(column) {
      let order = this.sortOrder === 'asc' ? 'desc' : 'asc';

      this.$emit('sort', column, order);
    },
    handleSelectItem(item) {
      let value = item[this.index] !== undefined ? item[this.index] : item.id,
        selectedItems = this.selectedItems,
        index = selectedItems.indexOf(value);
      if (-1 === index) {
        selectedItems.push(value);
      } else {
        selectedItems.splice(index, 1);
      }
      // eslint-disable-next-line vue/custom-event-name-casing
      this.$emit('item:select', selectedItems);
    },
    handleSelectAll() {
      let selected = [];

      if (this.items.length && (this.selectedItems.length !== this.items.length)) {
        this.items.forEach(item => {
          if (item[this.index] !== undefined) {
            selected.push(item[this.index]);
          } else {
            selected.push(item.id);
          }
        });
      }

      // eslint-disable-next-line vue/custom-event-name-casing
      this.$emit('item:select', selected);
    }
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.data-table;
</style>
