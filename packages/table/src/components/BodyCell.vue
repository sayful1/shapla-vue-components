<template>
  <td :data-colname="column.label" :class="bodyCellClass">
    <slot>{{ item[column.key] }}</slot>

    <template v-if="isPrimary">
      <div v-if="actions.length" class="row-actions">
        <slot name="row-actions" :row="item">
          <span v-for="action in actions" :key="action.key" :class="action.key">
            <a href="#" @click.prevent="actionClicked(action.key, item)">{{ action.label }}</a>
          </span>
        </slot>
      </div>

      <button v-if="isMobile" @click="toggleRow($event)" class="data-table-toggle-button"
              aria-label="Show more details">
        <data-table-icon icon="expand-less" class="triangle-up"/>
        <data-table-icon icon="expand-more" class="triangle-down"/>
      </button>
    </template>

  </td>
</template>

<script>
import DataTableIcon from "./DataTableIcon.vue";
import {computed} from "vue";

export default {
  name: "BodyCell",
  components: {DataTableIcon},
  props: {
    column: {type: Object, required: true},
    item: {type: Object, required: true},
    actions: {type: Array, default: () => []},
    isPrimary: {type: Boolean, default: false},
    isMobile: {type: Boolean, default: false},
  },
  emits: ['click:toggle', 'click:action'],
  setup(props, {emit}) {
    const toggleRow = event => emit('click:toggle', event);
    const actionClicked = (key, item) => emit('click:action', key, item);
    const isNumeric = computed(() => (typeof props.column.numeric !== "undefined" && props.column.numeric === true));

    const bodyCellClass = computed(() => {
      return [
        'shapla-data-table__cell',
        'shapla-data-table__cell-' + props.column.key,
        {'is-numeric-cell': isNumeric.value},
        {'column-primary': props.isPrimary},
      ]
    })

    return {
      actionClicked,
      toggleRow,
      bodyCellClass
    }
  }
}
</script>

<style scoped>

</style>
