<template>
    <div class="shapla-data-table-container">
        <div class="shapla-data-table-nav-top">
            <div class="shapla-data-table-nav-top__left">
                <slot name="bulk-actions-top">
                    <bulk-actions :actions="bulkActions" :active="!!checkedItems.length" v-model="bulkLocal"
                                  @bulk:click="handleBulkAction"></bulk-actions>
                </slot>

                <div class="shapla-data-table-nav-top__filters">
                    <slot name="filters"></slot>
                </div>
            </div>
            <div class="shapla-data-table-nav-top__right">
                <slot name="search-form">
                    <search-form v-if="showSearch" @search="searchSubmit" @input="searchInput"></search-form>
                </slot>
            </div>
        </div>
        <data-table
                :items="rows"
                :columns="columns"
        ></data-table>
        <div class="shapla-data-table-nav-bottom">
            <div class="shapla-data-table-nav-bottom__left">
                <slot name="bulk-actions-bottom">
                    <bulk-actions :actions="bulkActions" :active="!!checkedItems.length" v-model="bulkLocal"
                                  position="bottom" @bulk:click="handleBulkAction"></bulk-actions>
                </slot>
            </div>
            <div class="shapla-data-table-nav-bottom__right">
                <slot name="pagination">
                    <pagination :current_page="currentPage" :per_page="perPage" :total_items="itemsTotal"
                                @pagination="goToPage" size="small"></pagination>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    import bulkActions from './bulkActions'
    import pagination from './pagination'
    import searchForm from "./searchForm";
    import dataTable from "./dataTable";

    export default {
        name: "dataTableFull",

        components: {dataTable, searchForm, bulkActions, pagination},

        props: {
            rows: {type: Array, required: true,},
            columns: {type: Array, required: true,},
            actions: {type: Array, required: false, default: () => []},
            bulkActions: {type: Array, required: false, default: () => []},
            index: {type: String, default: 'id'},
            actionColumn: {type: String, default: 'title'},
            showCb: {type: Boolean, default: true},
            notFound: {type: String, default: 'No items found.'},
            totalItems: {type: Number, default: 0},
            totalPages: {type: Number, default: 1},
            perPage: {type: Number, default: 20},
            currentPage: {type: Number, default: 1},
            sortBy: {type: String, default: null},
            sortOrder: {type: String, default: "asc"},
            mobileWidth: {type: Number, default: 767},
            showSearch: {type: Boolean, default: true},
        },

        data() {
            return {
                bulkLocal: '-1',
                checkedItems: [],
                windowWidth: 0,
            }
        },

        computed: {

            hasBulkActions() {
                return this.bulkActions.length > 0;
            },

            itemsTotal() {
                return this.totalItems || this.rows.length;
            },
        },

        methods: {
            goToPage(page) {
                this.$emit('pagination', page);
            },

            handleBulkAction(action) {
                if (action === '-1') {
                    return;
                }

                this.$emit('bulk:apply', action, this.checkedItems);
            },

            searchInput(query) {
                this.$emit('search:input', query);
            },

            searchSubmit(query) {
                this.$emit('search:submit', query);
            }
        }
    }
</script>

<style lang="scss">
    @import "data-table";
</style>
