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

        <table :class="tableClasses">
            <thead>
            <tr class="shapla-data-table__header-row">
                <th v-if="showCb"
                    class="check-column shapla-data-table__header-cell mdc-data-table__header-cell--checkbox">
                    <span @click="handleSelectAll">
                        <slot name="check-box-all">
                            <label class="screen-reader-text" for="cb-select-all-1">{{selectAllText}}</label>
                            <shapla-checkbox id="cb-select-all-1" @change="handleSelectAll" :checked="isAllSelected"/>
                        </slot>
                    </span>
                </th>
                <th v-for="column in columns" :key="column.key" :class="getHeadColumnClass(column.key, column)">
                    <template v-if="!isSortable(column)">
                        {{ column.label }}
                    </template>
                    <template v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0z"/>
                            <path class="icon-arrow-down"
                                  d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
                            <path class="icon-arrow-up"
                                  d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                        </svg>
                        <a href="#" @click.prevent="handleSortBy(column.key)">
                            <span>{{ column.label }}</span>
                        </a>
                    </template>
                </th>
            </tr>
            </thead>

            <tbody>
            <template v-if="items.length">
                <tr v-for="row in items" :key="row[index]"
                    :class="{'is-selected':selectedItems.includes(row[index])}">
                    <td class="check-column" v-if="showCb">
                        <span @click="handleSelectItem(row)">
                            <slot name="check-box" :row="row">
                                <label class="screen-reader-text" :for="`cb-select-${row[index]}`">Select
                                    {{row[actionColumn]}}</label>
                                <shapla-checkbox :id="`cb-select-${row[index]}`" :value="row[index]"
                                                 @change="handleSelectItem(row)"
                                                 :checked="selectedItems.includes(row[index])"/>
                            </slot>
                        </span>
                    </td>
                    <td v-for="column in columns" :key="column.key" :class="getBodyColumnClass(column)"
                        :data-colname="column.label">

                        <slot :name="column.key" :row="row">
                            {{ row[column.key] }}
                        </slot>

                        <div v-if="actionColumn === column.key && hasActions" class="row-actions">
                            <slot name="row-actions" :row="row">
                                <span v-for="action in actions" :key="action.key" :class="action.key">
                                    <a href="#" @click.prevent="actionClicked(action.key, row)">{{ action.label }}</a>
                                </span>
                            </slot>
                        </div>

                        <button class="data-table-toggle-button" v-if="actionColumn === column.key && hasActions"
                                @click="toggleRow($event)">
                            <span class="screen-reader-text">Show more details</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path class="triangle-up" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"/>
                                <path class="triangle-down" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/>
                                <path d="M0 0h24v24H0z" fill="none"/>
                            </svg>
                        </button>
                    </td>
                </tr>
            </template>
            <tr v-else class="no-items">
                <td :colspan="colspan" style="text-align: center">{{ notFoundText }}</td>
            </tr>
            </tbody>
        </table>

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
    import shaplaCheckbox from "shapla-checkbox";
    import {dataTableMixins} from "shapla-data-table";

    export default {
        name: "dataTableFull",

        mixins: [dataTableMixins],

        components: {searchForm, bulkActions, pagination, shaplaCheckbox},

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
