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
import dataTableMixins from "./mixins/dataTableMixins.js";
import shaplaCheckbox from '../../checkbox/src/index.js';
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
  mixins: [dataTableMixins],
  components: {
    BodyRow, TableBody, TableHeader, BodyRowNoItem, BodyRowExpand, BodyCellExpand, BodyCell, HeaderCell, shaplaCheckbox
  }
}
</script>

<style lang="scss">
@import "styles/data-table";
</style>
