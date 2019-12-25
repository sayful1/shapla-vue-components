<template>
    <div class="shapla-data-table-container">
        <div class="shapla-data-table-nav-top">
            <div class="shapla-data-table-nav-top__left">
                <slot name="bulk-actions-top">
                    <bulk-actions :actions="bulkActions" :active="!!selectedItems.length" v-model="bulkLocal"
                                  @bulk:click="handleBulkAction"/>
                </slot>

                <div class="shapla-data-table-nav-top__filters">
                    <slot name="filters"/>
                </div>
            </div>
            <div class="shapla-data-table-nav-top__right">
                <slot name="search-form">
                    <search-form v-if="showSearch" @search="searchSubmit" @input="searchInput"/>
                </slot>
            </div>
        </div>
        <data-table
                :items="items"
                :columns="columns"
                :selected-items="[]"
                :actions="actions"
                :index="index"
                :action-column="actionColumn"
                :show-cb="showCb"
                :not-found-text="notFoundText"
                :sort-by="sortBy"
                :sort-order="sortOrder"
                :mobile-width="mobileWidth"
        />
        <div class="shapla-data-table-nav-bottom">
            <div class="shapla-data-table-nav-bottom__left">
                <slot name="bulk-actions-bottom">
                    <bulk-actions :actions="bulkActions" :active="!!selectedItems.length" v-model="bulkLocal"
                                  position="bottom" @bulk:click="handleBulkAction"/>
                </slot>
            </div>
            <div class="shapla-data-table-nav-bottom__right">
                <slot name="pagination">
                    <pagination :current_page="currentPage" :per_page="perPage" :total_items="totalItems"
                                @pagination="goToPage" size="small"/>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    import bulkActions from './bulkActions'
    import pagination from 'shapla-data-table-pagination'
    import searchForm from "shapla-search-form";
    import dataTable from "shapla-data-table";
    import {dataTableMixins} from "shapla-data-table";

    export default {
        name: "dataTableFull",

        mixins: [dataTableMixins],

        components: {dataTable, searchForm, bulkActions, pagination},

        props: {
            bulkActions: {type: Array, default: () => []},
            totalItems: {type: Number, default: 0},
            totalPages: {type: Number, default: 1},
            perPage: {type: Number, default: 20},
            currentPage: {type: Number, default: 1},
            showSearch: {type: Boolean, default: true},
        },

        data() {
            return {
                bulkLocal: '-1',
                checkedItems: [],
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
