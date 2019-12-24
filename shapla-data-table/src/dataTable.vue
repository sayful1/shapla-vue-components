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

                        <button type="button" class="data-table-toggle-button"
                                v-if="actionColumn === column.key && hasActions"
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
    </div>
</template>

<script>
    import dataTableMixins from "./dataTableMixins";

    export default {
        name: "dataTable",
        mixins: [dataTableMixins],
    }
</script>

<style lang="scss">
    @import "data-table";
</style>