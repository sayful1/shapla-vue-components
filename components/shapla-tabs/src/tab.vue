<template>
  <div class="shapla-tabs__panel" :id="panelId" :class="tabClass">
    <slot :active="isActive"></slot>
  </div>
</template>

<script>
export default {
  name: "tab",
  props: {
    name: {type: String, required: true},
    selected: {type: Boolean, required: false, default: false},
    navItemClass: {type: String, required: false, default: ''}
  },
  computed: {
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
  data() {
    return {
      isActive: false,
    }
  },
  mounted() {
    this.isActive = this.selected;
  }
}
</script>

<style scoped>

</style>
