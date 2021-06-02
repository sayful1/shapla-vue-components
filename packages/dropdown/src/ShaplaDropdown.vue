<template>
  <div class="shapla-dropdown" :class="{'is-hoverable':hoverable}">
    <div class="shapla-dropdown-trigger" aria-haspopup="true" :aria-expanded="isActive?'true':'false'"
         @click="isActive = !isActive">
      <slot name="trigger"/>
    </div>
    <shapla-dropdown-menu :active="isActive" :role="role" :right="right" :up="up" :direction="direction"
                          :max-items="maxItems">
      <template v-slot:before-content>
        <slot name="before-content"/>
      </template>
      <slot></slot>
      <template v-slot:after-content>
        <slot name="after-content"/>
      </template>
    </shapla-dropdown-menu>
  </div>
</template>

<script>
import ShaplaDropdownMenu from "./ShaplaDropdownMenu.vue";

export default {
  name: "ShaplaDropdown",
  components: {ShaplaDropdownMenu},
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

</style>
