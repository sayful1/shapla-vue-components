<template>
  <ul
    class="shapla-status-list"
    :class="`shapla-status-list--${type}`"
  >
    <li
      v-for="status in statuses"
      :key="status.key"
      class="shapla-status-list__item"
      :class="{'is-active':status.active}"
    >
      <a
        href="#"
        class="shapla-status-list__item-link"
        @click.prevent="handleClickEvent(status)"
      >
        <span class="shapla-status-list__item-label">{{ status.label }}</span>
        <span class="shapla-status-list__item-count">{{ status.count }}</span>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "StatusList",
  props: {
    type: {
      type: String,
      default: 'horizontal',
      validator: (value) => -1 !== ['vertical', 'horizontal'].indexOf(value)
    },
    statuses: {type: Array, default: () => []},
  },
  methods: {
    handleClickEvent(status) {
      this.$emit('change', status);
    }
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.data-table-status-list;
</style>
