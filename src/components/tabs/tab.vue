<template>
  <div
    :id="panelId"
    class="shapla-tabs__panel"
    :class="tabClass"
  >
    <div
      class="shapla-tabs__panel-title"
      style="display: none"
    >
      <slot name="name" />
    </div>
    <slot :active="isActive" />
  </div>
</template>

<script>
export default {
  name: "ShaplaTab",
  props: {
    name: {type: String, required: true},
    selected: {type: Boolean, required: false, default: false},
    navItemClass: {type: String, required: false, default: ''}
  },
  data() {
    return {
      isActive: false,
    }
  },
  computed: {
    title() {
      return this.$el.querySelector('.shapla-tabs__panel-title').innerHTML || this.name;
    },
    panelId() {
      return this.name.toLowerCase().replace(/ /g, '-');
    },
    href() {
      return '#' + this.panelId;
    },
    tabClass() {
      return {
        'is-active': this.isActive
      }
    }
  },
  mounted() {
    this.isActive = this.selected;
  }
}
</script>
