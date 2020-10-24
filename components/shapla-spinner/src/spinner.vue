<template>
  <div :class="containerClass" v-if="active">
    <div class="shapla-spinner-inner" :class="{'has-text':showText}">
      <div class="shapla-spinner" :class="getClass">
        <div :class="itemClass(index)" v-for="index in [1, 2, 3, 4]" :key="index">
          <div class="shapla-spinner__circle-clipper shapla-spinner__left">
            <div class="shapla-spinner__circle"></div>
          </div>
          <div class="shapla-spinner__gap-patch">
            <div class="shapla-spinner__circle"></div>
          </div>
          <div class="shapla-spinner__circle-clipper shapla-spinner__right">
            <div class="shapla-spinner__circle"></div>
          </div>
        </div>
      </div>
      <div class="shapla-spinner-text" v-if="showText">Loading...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "spinner",
  props: {
    active: {type: Boolean, default: true},
    single: {type: Boolean, default: false},
    showText: {type: Boolean, default: false},
    position: {type: String, default: 'fixed'},
  },
  computed: {
    containerClass() {
      return {
        'shapla-spinner-container': true,
        'is-fixed': this.position === 'fixed',
        'is-absolute': this.position === 'absolute',
        'is-static': this.position === 'static',
      }
    },
    getClass() {
      return {
        'shapla-spinner--single-color': this.single,
      }
    }
  },
  watch: {
    active(newValue) {
      this.refreshBodyClass(newValue);
    }
  },

  mounted() {
    this.refreshBodyClass(this.active);
  },
  methods: {
    itemClass(index) {
      return [
        'shapla-spinner__layer',
        'shapla-spinner__layer-' + index
      ]
    },
    refreshBodyClass(active) {
      if (active) {
        document.querySelector('body').classList.add('has-shapla-spinner');
      } else {
        document.querySelector('body').classList.remove('has-shapla-spinner');
      }
    }
  }
}
</script>

<style lang="scss">
@import "spinner";
</style>
