<template>
    <div :class="tableClasses">
        <table class="shapla-data-table__table" :aria-label="areaLabel">

            <thead>
            <tr class="shapla-data-table__header-row">

                <th v-if="showCb" class="shapla-data-table__header-cell shapla-data-table__header-cell--checkbox"
                    role="columnheader" scope="col">
                    <shapla-checkbox id="cb-select-all-1" @change="handleSelectAll" :checked="isAllSelected"/>
                </th>

                <th v-for="column in columns" :key="column.key" :class="getHeadCellClass( column)"
                    role="columnheader" scope="col">
                    <template v-if="!isSortable(column)">{{ column.label }}</template>
                    <template v-else>
                        <a href="#" @click.prevent="handleSortBy(column.key)">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path fill="none" d="M0 0h24v24H0V0z"/>
                                <path class="icon-arrow-down"
                                      d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"/>
                                <path class="icon-arrow-up"
                                      d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"/>
                            </svg>
                            <span>{{ column.label }}</span>
                        </a>
                    </template>
                </th>
            </tr>
            </thead>

            <tbody class="shapla-data-table__content">
            <template v-if="items.length">
                <tr class="shapla-data-table__row" v-for="row in items" :key="row[index]"
                    :class="{'is-selected':selectedItems.includes(row[index])}">

                    <td class="shapla-data-table__cell shapla-data-table__cell--checkbox" v-if="showCb">
                        <shapla-checkbox :value="row[index]" @change="handleSelectItem(row)"
                                         :checked="selectedItems.includes(row[index])"/>
                    </td>

                    <td v-for="column in columns" :key="column.key" :data-colname="column.label"
                        :class="getBodyCellClass(column)">

                        <slot :name="column.key" :row="row">{{ row[column.key] }}</slot>

                        <div v-if="actionColumn === column.key && hasActions" class="row-actions">
                            <slot name="row-actions" :row="row">
                                <span v-for="action in actions" :key="action.key" :class="action.key">
                                    <a href="#" @click.prevent="actionClicked(action.key, row)">{{ action.label }}</a>
                                </span>
                            </slot>
                        </div>

                        <template v-if="actionColumn === column.key && isMobileView">
                            <button @click="toggleRow($event)" type="button" class="data-table-toggle-button"
                                    aria-label="Show more details">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                                    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" class="triangle-up"></path>
                                    <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" class="triangle-down"></path>
                                    <path d="M0 0h24v24H0z" fill="none"></path>
                                </svg>
                            </button>
                        </template>

                    </td>
                </tr>
            </template>
            <tr v-else class="shapla-data-table__row no-items">
                <td :colspan="colspan" class="shapla-data-table__cell shapla-data-table__cell--no-item">
                    {{ notFoundText }}
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import dataTableMixins from "./mixins/dataTableMixins";
    import shaplaCheckbox from 'shapla-checkbox';

    export default {
        name: "dataTable",
        mixins: [dataTableMixins],
        components: {shaplaCheckbox}
    }
</script>

<style lang="scss">
    @import "styles/data-table";
</style>