<template>
    <div class="shapla-data-table-container">
        <table :class="tableClasses">
            <thead>
            <tr class="shapla-data-table__header-row">
                <th v-if="showCb"
                    class="check-column shapla-data-table__header-cell mdc-data-table__header-cell--checkbox">
                    <span @click="handleSelectAll">
                        <slot name="check-box-all">
                            <label class="screen-reader-text" for="cb-select-all-1">{{selectAllText}}</label>
                            <input type="checkbox" id="cb-select-all-1" :checked="isAllSelected">
                        </slot>
                    </span>
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
            <template v-if="items.length">
                <tr v-for="row in items" :key="row[index]" :class="{'is-selected':selectedItems.includes(row[index])}">
                    <td class="check-column" v-if="showCb">
                        <span @click="handleSelectItem(row)">
                            <slot name="check-box" :row="row">
                                <label class="screen-reader-text" :for="`cb-select-${row[index]}`">Select
                                    {{row[actionColumn]}}</label>
                                <input type="checkbox" :id="`cb-select-${row[index]}`" :value="row[index]"
                                       :checked="selectedItems.includes(row[index])">
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
                <td :colspan="colspan" style="text-align: center">{{ notFoundText }}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "dataTable",
        props: {
            items: {type: Array, required: true,},
            columns: {type: Array, required: true,},
            selectedItems: {type: Array, default: () => []},
            actions: {type: Array, default: () => []},
            actionColumn: {type: String, default: 'title'},
            index: {type: String, default: 'id'},
            showCb: {type: Boolean, default: true},
            selectAllText: {type: String, default: 'Select All'},
            notFoundText: {type: String, default: 'No items found.'},
            sortBy: {type: String, default: 'id'},
            sortOrder: {type: String, default: "desc"},
            mobileWidth: {type: Number, default: 768},
        },
        data() {
            return {
                windowWidth: 0,
            }
        },
        computed: {
            tableClasses() {
                return {
                    'shapla-data-table': true,
                    'shapla-data-table--fullwidth': true,
                    'shapla-data-table--mobile': this.windowWidth <= this.mobileWidth
                }
            },
            colspan() {
                let columns = Object.keys(this.columns).length;

                if (this.showCb) {
                    columns += 1;
                }

                return columns;
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

                setTimeout(() => {
                    tr.classList.toggle('is-expanded');
                }, 50);
            },

            actionClicked(action, row) {
                this.$emit('action:click', action, row);
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
            handleSelectItem(item) {
                let value = item[this.index] !== undefined ? item[this.index] : item.id,
                    selectedItems = this.selectedItems,
                    index = selectedItems.indexOf(value);
                if (-1 === index) {
                    selectedItems.push(value);
                } else {
                    selectedItems.splice(index, 1);
                }
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

                this.$emit('item:select', selected);
            }
        }
    }
</script>

<style lang="scss">
    @import "data-table";
</style>