<template>
  <div class="shapla-dropdown" :class="{'is-hoverable':hoverable}">
    <div class="shapla-dropdown-trigger" aria-haspopup="true" :aria-expanded="isActive?'true':'false'"
         @click="isActive = !isActive">
      <slot name="trigger"></slot>
    </div>
    <dropdown-menu :active="isActive" :role="role" :right="right" :up="up" :direction="direction" :max-items="maxItems">
      <slot></slot>
    </dropdown-menu>
  </div>
</template>

<script>
import dropdownMenu from "./dropdownMenu";

export default {
  name: "dropdown",
  components: {dropdownMenu},
  props: {
    hoverable: {type: Boolean, default: true},
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
      isActive: false,
    }
  },
  watch: {
    isActive(isActive) {
      if (isActive) {
        document.addEventListener('click', event => {
          if (!this.$el.contains(event.target)) {
            this.isActive = false;
          }
        });
      }
    }
  }
}
</script>

<style lang="scss">
.shapla-dropdown {
  display: inline-flex;
  position: relative;
  vertical-align: top;

  &.is-hoverable:hover {
    .shapla-dropdown-menu {
      visibility: visible;
    }
  }
}
</style>
