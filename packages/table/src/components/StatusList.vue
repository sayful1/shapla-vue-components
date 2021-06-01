<template>
  <ul class="shapla-status-list" :class="`shapla-status-list--${type}`">
    <li v-for="status in statuses" :key="status.key" class="shapla-status-list__item"
        :class="{'is-active':status.active}">
      <a href="#" @click.prevent="handleClickEvent(status)" class="shapla-status-list__item-link">
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
    statuses: {type: Array, default: () => []},
    type: {type: String, default: 'horizontal', validator: value => -1 !== ['vertical', 'horizontal'].indexOf(value)},
  },
  emits: ['change'],
  setup(props, {emit}) {
    const handleClickEvent = event => emit('change', event);
    return {handleClickEvent}
  }
}
</script>

<style lang="scss">
@import "shapla-css/src/components/data-table/status-list";
</style>
