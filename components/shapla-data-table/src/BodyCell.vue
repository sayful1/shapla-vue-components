<template>
  <td :data-colname="column.label" :class="getBodyCellClass">
    <slot :name="column.key" :row="item">{{ item[column.key] }}</slot>

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
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
          <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"
                class="triangle-up"></path>
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
                class="triangle-down"></path>
          <path d="M0 0h24v24H0z" fill="none"></path>
        </svg>
      </button>
    </template>

  </td>
</template>

<script>
export default {
  name: "BodyCell",
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
      this.$emit('click:toggle', event);
    },
    actionClicked(key, item) {
      this.$emit('click:action', key, item);
    },
  }
}
</script>

<style scoped>

</style>
