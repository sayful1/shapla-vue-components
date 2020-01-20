<template>
    <div>
        <data-table-full
                :items="rows"
                :columns="columns"
                :sort-by="sortBy"
                :sort-order="sortOrder"
                :selected-items="selectedItems"
                @sort="sortData"
                action-column="title"
                :actions="actions"
                @action:click="onActionClick"
                @item:select="selectItems"
                :total_items="50"
                :per_page="3"
                :current_page="currentPage"
                @pagination="goToPage"
                :bulk-actions="bulkActions"
                @bulk:apply="onBulkAction"
        />

        Selected Items: <code>{{selectedItems}}</code><br>
        Sort order: <code>{{sortOrder}}</code><br>
        Sort by: <code>{{sortBy}}</code><br>
        Current Page: <code>{{currentPage}}</code><br>
    </div>
</template>

<script>
    import dataTableFull from '../../../components/shapla-data-table-full/src/dataTableFull';

    export default {
        name: "TestDataTableFull",
        components: {dataTableFull},
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

<style lang="scss">
    .screen-reader-text {
        border: 0;
        clip: rect(1px, 1px, 1px, 1px);
        clip-path: inset(50%);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute !important;
        width: 1px;
        word-wrap: normal !important;
    }

    .screen-reader-text:focus {
        background-color: #f1f1f1;
        border-radius: 3px;
        box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
        clip: auto !important;
        clip-path: none;
        color: #323232;
        display: block;
        font-size: 1rem;
        font-weight: bold;
        height: auto;
        left: 5px;
        line-height: normal;
        padding: 15px 23px 14px;
        text-decoration: none;
        top: 5px;
        width: auto;
        z-index: 100000;
    }
</style>