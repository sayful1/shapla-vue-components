<template>
    <div>
        <data-table
                :items="rows"
                :columns="columns"
                :sort-by="sortBy"
                :sort-order="sortOrder"
                :selected-items="selectedItems"
                @sort="sortData"
                :actions="actions"
                @action:click="onActionClick"
                @item:select="selectItems"
        />
    </div>
</template>

<script>
    import dataTable from "shapla-data-table";

    export default {
        name: "TestDataTable",
        components: {dataTable},
        data() {
            return {
                columns: [
                    {key: 'title', label: 'Title', numeric: false},
                    {key: 'bangle', label: 'Bangle', numeric: true},
                    {key: 'english', label: 'English', numeric: true},
                    {key: 'math', label: 'Math', numeric: true, sortable: true},
                ],
                rows: [
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
                currentPage: 1,
                selectedItems: [],
            }
        },
        methods: {
            selectItems(selectedItems) {
                this.selectedItems = selectedItems;
            },
            sortData(column, order) {
                this.sortBy = column;
                this.sortOrder = order;
                if ('asc' === order) {
                    this.rows.sort((a, b) => a[column] - b[column]);
                } else {
                    this.rows.sort((a, b) => b[column] - a[column]);
                }
            },
            onActionClick(action, row) {
                if ('trash' === action) {
                    if (confirm('Are you sure to delete?')) {
                        alert('deleted: ' + row.title);
                    }
                }
            },
            onBulkAction(action, items) {
                alert(action + ': ' + items.join(', '));
            },
            goToPage(page) {
                alert('Going to page: ' + page);
                this.currentPage = page;
            }
        }
    }
</script>

<style scoped>

</style>