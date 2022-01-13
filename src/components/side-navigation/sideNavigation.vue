<template>
  <div
    class="shapla-sidenav"
    :class="navClasses"
    :style="`--shapla-side-navigation-width:${navWidth}`"
  >
    <div
      v-if="showOverlay"
      class="shapla-sidenav__background"
      @click="closeNav"
    />
    <div
      class="shapla-sidenav__body"
      :style="sidenavBodyStyle"
    >
      <div class="shapla-sidenav__content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SideNavigation",

  props: {
    active: {type: Boolean, default: true},
    showOverlay: {type: Boolean, default: true},
    navWidth: {type: String, default: '300px'},
    position: {
      type: String,
      default: 'left',
      validator: value => ['left', 'right', 'bottom', 'top'].indexOf(value) !== -1
    },
  },

  data() {
    return {
      bodyWidth: '300px',
    }
  },
  computed: {
    navClasses() {
      return {
        'shapla-sidenav--left': this.position === 'left',
        'shapla-sidenav--right': this.position === 'right',
        'shapla-sidenav--bottom': this.position === 'bottom',
        'shapla-sidenav--top': this.position === 'top',
        'is-active': this.active,
      };
    },
    sidenavBodyStyle() {
      if (['left', 'right'].indexOf(this.position) !== -1) {
        return {width: this.bodyWidth};
      }
      return {height: this.bodyWidth};
    }
  },

  mounted() {
    this.bodyWidth = this.navWidth;
  },

  methods: {
    closeNav() {
      this.$emit('close');
    },
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.sidenav
</style>
