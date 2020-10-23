<template>
  <td :data-colname="column.label" :class="getBodyCellClass">
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
import DataTableIcon from "./DataTableIcon";

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
  computed: {
    isNumeric() {
      return (typeof this.column.numeric !== "undefined" && this.column.numeric === true);
    },
    getBodyCellClass() {
      return [
        'shapla-data-table__cell',
        'shapla-data-table__cell-' + this.column.key,
        {'shapla-data-table__cell--numeric': this.isNumeric},
        {'column-primary': this.isPrimary},
      ]
    }
  },
  methods: {
    toggleRow(event) {
      // eslint-disable-next-line vue/custom-event-name-casing
      this.$emit('click:toggle', event);
    },
    actionClicked(key, item) {
      // eslint-disable-next-line vue/custom-event-name-casing
      this.$emit('click:action', key, item);
    },
  }
}
</script>

<style scoped>

</style>
