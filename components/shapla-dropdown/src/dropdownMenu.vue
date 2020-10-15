<template>
  <div class="shapla-dropdown-menu" :class="containerClass" :style="containerStyle" :role="role">
    <div class="shapla-dropdown-menu__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "dropdownMenu",
  props: {
    active: {type: Boolean, default: false},
    role: {type: String, default: 'menu'},
    right: {type: Boolean, default: false},
    up: {type: Boolean, default: false},
    maxItems: {type: Number},
    direction: {
      type: String, default: 'auto',
      validator: value => ['auto', 'up', 'down'].indexOf(value) !== -1
    },
  },
  data() {
    return {
      autoClass: '',
      isActive: false,
    }
  },
  watch: {
    active(isActive) {
      this.isActive = isActive;
      if (isActive && this.direction === 'auto' && !this.up) {
        this.calculateDirection();
      }
    }
  },
  computed: {
    containerClass() {
      let classes = [];
      if (this.isActive) {
        classes.push('is-active');
      }
      if (this.autoClass) {
        classes.push(this.autoClass);
      }
      if (this.right) {
        classes.push('is-right');
      }
      if (this.up || this.direction === 'up') {
        classes.push('is-up');
      }
      if (this.maxItems) {
        classes.push('has-max-items');
      }
      return classes;
    },
    containerStyle() {
      let styles = [];
      if (this.maxItems) {
        styles.push({'--max-menu-items': this.maxItems})
      }
      return styles;
    }
  },
  methods: {
    calculateDirection() {
      let browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
        elParent = this.$el.parentNode,
        rect = elParent.getBoundingClientRect(),
        win = elParent.ownerDocument.defaultView,
        elFromTop = parseInt(rect.top + win.pageYOffset),
        spaceToBottom = browserHeight - elFromTop,
        elHeight = this.$el.scrollHeight;

      if ((elHeight + 15) < spaceToBottom) {
        this.autoClass = 'is-down'
      } else {
        this.autoClass = 'is-up'
      }
    }
  },
  mounted() {
    this.isActive = this.active;
  }
}
</script>

<style lang="scss">
@import "dropdown-menu";
</style>
