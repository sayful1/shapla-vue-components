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
        <table :class="tableClasses">
            <thead>
            <tr>
                <th v-if="showCb" class="check-column">
                    <slot name="check-box-all">
                        <label class="screen-reader-text" for="cb-select-all-1">Select All</label>
                        <input type="checkbox" id="cb-select-all-1" v-model="selectAll">
                    </slot>
                </th>
                <th v-for="column in columns" :key="column.key" :class="getHeadColumnClass(column.key, column)">
                    <template v-if="!isSortable(column)">
                        {{ column.label }}
                    </template>
                    <template v-else>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="none" d="M0 0h24v24H0V0z"></path>
                            <path class="icon-arrow-down"
                                  d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
                            <path class="icon-arrow-up"
                                  d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path>
                        </svg>
                        <a href="#" @click.prevent="handleSortBy(column.key)">
                            <span>{{ column.label }}</span>
                        </a>
                    </template>
                </th>
            </tr>
            </thead>

            <tbody>
            <template v-if="rows.length">
                <tr v-for="row in rows" :key="row[index]" :class="{'is-selected':checkedItems.includes(row[index])}">
                    <td class="check-column" v-if="showCb">
                        <slot name="check-box" :row="row">
                            <label class="screen-reader-text" :for="`cb-select-${row[index]}`">Select
                                {{row[actionColumn]}}</label>
                            <input type="checkbox" :id="`cb-select-${row[index]}`" :value="row[index]"
                                   v-model="checkedItems">
                        </slot>
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

                        <button type="button" class="toggle-row" v-if="actionColumn === column.key && hasActions"
                                @click="toggleRow($event)">
                            <span class="screen-reader-text">Show more details</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                <path class="triangle-up" d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path>
                                <path class="triangle-down" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path>
                                <path d="M0 0h24v24H0z" fill="none"></path>
                            </svg>
                        </button>
                    </td>
                </tr>
            </template>
            <tr v-else class="no-items">
                <td :colspan="colspan" style="text-align: center">{{ notFound }}</td>
            </tr>
            </tbody>
        </table>
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

    export default {
        name: "dataTable",

        components: {searchForm, bulkActions, pagination},

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

        watch: {
            checkedItems(newValue) {
                this.$emit('checkedItems', newValue);
            }
        },

        mounted() {
            this.windowWidth = window.innerWidth;

            window.addEventListener('resize', () => {
                this.windowWidth = window.innerWidth;
            });

            window.addEventListener('orientationchange', () => {
                this.windowWidth = window.innerWidth;
            });
        },

        computed: {

            tableClasses() {
                return {
                    'shapla-data-table': true,
                    'shapla-data-table--fullwidth': true,
                    'shapla-data-table--mobile': this.windowWidth <= this.mobileWidth
                }
            },

            hasActions() {
                return this.actions.length > 0;
            },

            hasBulkActions() {
                return this.bulkActions.length > 0;
            },

            itemsTotal() {
                return this.totalItems || this.rows.length;
            },

            colspan() {
                let columns = Object.keys(this.columns).length;

                if (this.showCb) {
                    columns += 1;
                }

                return columns;
            },

            selectAll: {

                get: function () {
                    if (!this.rows.length) {
                        return false;
                    }

                    return this.rows ? this.checkedItems.length === this.rows.length : false;
                },

                set: function (value) {
                    let selected = [],
                        self = this;

                    if (value) {
                        this.rows.forEach(function (item) {
                            if (item[self.index] !== undefined) {
                                selected.push(item[self.index]);
                            } else {
                                selected.push(item.id);
                            }
                        });
                    }

                    this.checkedItems = selected;
                }
            }
        },

        methods: {

            getHeadColumnClass(key, value) {
                let nonNumeric = typeof value.numeric === "undefined" || (typeof value.numeric !== "undefined" && value.numeric === false);
                return [
                    'manage-column',
                    'manage-' + key,
                    {'shapla-data-table__cell--non-numeric': nonNumeric},
                    {'column-primary': this.actionColumn === key},
                    {'sortable': this.isSortable(value)},
                    {'sorted': this.isSorted(key)},
                    {'shapla-data-table__header--sorted-ascending': this.isSorted(key) && this.sortOrder === 'asc'},
                    {'shapla-data-table__header--sorted-descending': this.isSorted(key) && this.sortOrder === 'desc'}
                ]
            },

            getBodyColumnClass(value) {
                let nonNumeric = typeof value.numeric === "undefined" || (typeof value.numeric !== "undefined" && value.numeric === false);
                return [
                    'manage-column',
                    'manage-' + value.key,
                    {'shapla-data-table__cell--non-numeric': nonNumeric},
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

                tr.classList.toggle('is-expanded');
            },

            actionClicked(action, row) {
                this.$emit('action:click', action, row);
            },

            goToPage(page) {
                this.$emit('pagination', page);
            },

            handleBulkAction(action) {
                if (action === '-1') {
                    return;
                }

                this.$emit('bulk:apply', action, this.checkedItems);
            },

            isSortable(column) {
                return column.hasOwnProperty('sortable') && column.sortable === true;
            },

            isSorted(column) {
                return column === this.sortBy;
            },

            handleSortBy(column) {
                let order = this.sortOrder === 'asc' ? 'desc' : 'asc';

                this.$emit('sort', column, order);
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
