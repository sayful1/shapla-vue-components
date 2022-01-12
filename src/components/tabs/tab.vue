<template>
  <div class="shapla-tabs__panel" :id="panelId" :class="tabClass">
    <div class="shapla-tabs__panel-title" style="display: none">
      <slot name="name"/>
    </div>
    <slot :active="isActive"/>
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

<style>

</style>
