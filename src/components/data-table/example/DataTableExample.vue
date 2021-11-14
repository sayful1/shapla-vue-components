<template>
  <div>
    <h2>Demo Table One</h2>
    <data-table
      :items="items"
      :columns="columns"
      :sort-by="sortBy"
      :sort-order="sortOrder"
      :selected-items="selectedItems"
      @sort="sortData"
      action-column="title"
      :actions="actions"
      @action:click="onActionClick"
      @item:select="selectItems"
    ></data-table>

    <h2>Demo Table Two (No items)</h2>
    <data-table
      :items="[]"
      :columns="columns"
      :sort-by="sortBy"
      :sort-order="sortOrder"
      :selected-items="selectedItems"
      @sort="sortData"
      action-column="title"
      :actions="actions"
      @action:click="onActionClick"
      @item:select="selectItems"
    ></data-table>

    <h2>Demo Table One</h2>
    <data-table
      :show-expand="true"
      :items="items"
      :columns="columns"
      :sort-by="sortBy"
      :sort-order="sortOrder"
      :selected-items="selectedItems"
      @sort="sortData"
      action-column="title"
      :actions="actions"
      @action:click="onActionClick"
      @item:select="selectItems"
    >
      <template slot="cellExpand" slot-scope="data">
        {{ data }}
      </template>
    </data-table>
  </div>
</template>

<script>
import dataTable from "../src/dataTable";

export default {
  name: "DataTableExample",
  components: {dataTable},
  data() {
    return {
      columns: [
        {key: 'title', label: 'Title', numeric: false},
        {key: 'bangle', label: 'Bangle', numeric: true},
        {key: 'english', label: 'English', numeric: true},
        {key: 'math', label: 'Math', numeric: true, sortable: true},
      ],
      items: [
        {id: 1, title: 'Sayful Islam', bangle: 70, english: 80, math: 100},
        {id: 2, title: 'Akhi', bangle: 70, english: 80, math: 90},
        {id: 3, title: 'Saif Al Araf', bangle: 70, english: 80, math: 80},
      ],
      actions: [
        {key: 'edit', label: 'Edit'},
        {key: 'trash', label: 'Delete'}
      ],
      bulkActions: [
        {key: 'trash', label: 'Move to Trash'}
      ],
      sortBy: 'math',
      sortOrder: 'asc',
      selectedItems: [],
    }
  },
  methods: {
    selectItems: function selectItems(selectedItems) {
      this.selectedItems = selectedItems;
    },
    sortData: function sortData(column, order) {
      this.sortBy = column;
      this.sortOrder = order;
      if ('asc' === order) {
        this.items.sort(function (a, b) {
          return a[column] - b[column];
        });
      } else {
        this.items.sort(function (a, b) {
          return b[column] - a[column];
        });
      }
    },
    onActionClick: function onActionClick(action, row) {
      if ('trash' === action) {
        if (confirm('Are you sure to delete?')) {
          alert('deleted: ' + row.title);
        }
      }
    },
  }
}
</script>

<style>

</style>
