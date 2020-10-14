<template>
  <div class="shapla-toggle-panel" :class="panelClass">
    <div class="shapla-toggle-panel__heading" :class="`has-icon-${toggleIconPosition}`" @click.prevent="toggleActive">
      <div class="shapla-toggle-panel__title">
        <h4 class="shapla-toggle-panel__title-text">
          <slot name="title">{{ name }}</slot>
        </h4>
        <div class="shapla-toggle-panel__title-subtext" v-if="subtext" v-html="subtext"></div>
      </div>
      <div class="shapla-toggle-panel__icon" :class="`is-icon-${toggleIconPosition}`">
        <template v-if="isSelected">
          <slot name="icon-close">
            <svg class="icon-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 13H5v-2h14v2z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </slot>
        </template>
        <template v-if="!isSelected">
          <slot name="icon-open">
            <svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
              <path d="M0 0h24v24H0z" fill="none"/>
            </svg>
          </slot>
        </template>
      </div>
    </div>
    <div class="shapla-toggle-panel__body" :class="panelBodyClass">
      <div class="shapla-toggle-panel__content">
        <slot v-bind:active="isSelected"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "toggle",
  props: {
    name: {type: String, required: true},
    subtext: {type: String, required: false},
    selected: {type: Boolean, default: false},
    iconPosition: {type: String, validator: value => -1 !== ['left', 'right'].indexOf(value)},
    boxedMode: {type: Boolean, default: undefined},
    showDivider: {type: Boolean, default: undefined},
  },
  data() {
    return {
      isSelected: false,
      panelContent: null,
      toggleIconPosition: 'left',
      toggleShowDivider: true,
      toggleBoxedMode: true,
    }
  },
  computed: {
    panelClass() {
      return {
        'shapla-toggle-panel--default': true,
        'shapla-toggle-panel--no-divider': !this.toggleShowDivider && !this.toggleBoxedMode,
        'shapla-toggle-panel--boxed-mode': this.toggleBoxedMode,
      }
    },
    panelBodyClass() {
      return {
        'is-active': this.isSelected,
      }
    }
  },
  mounted() {
    this.isSelected = this.selected;

    this.panelContent = this.$el.querySelector('.shapla-toggle-panel__body');
    this.handleSelect(this.isSelected);

    // Update icon position
    if (this.$parent.iconPosition !== undefined) {
      this.toggleIconPosition = this.$parent.iconPosition;
    } else if (this.iconPosition !== undefined) {
      this.toggleIconPosition = this.iconPosition;
    }

    // Update box mode
    if (this.$parent.boxedMode !== undefined) {
      this.toggleBoxedMode = this.$parent.boxedMode;
    } else if (this.boxedMode !== undefined) {
      this.toggleBoxedMode = this.boxedMode;
    }

    // Update divider information
    if (this.$parent.showDivider !== undefined) {
      this.toggleShowDivider = this.$parent.showDivider;
    } else if (this.showDivider !== undefined) {
      this.toggleShowDivider = this.showDivider;
    }
  },
  watch: {
    isSelected(newValue) {
      this.handleSelect(newValue);
    }
  },
  methods: {
    toggleActive() {
      if (this.$parent.accordion && this.$parent.accordion === true) {
        this.$parent.$children.forEach(element => {
          if (element !== this && element.isSelected) {
            element.isSelected = false
          }
        });
      }
      this.isSelected = !this.isSelected;
    },
    handleSelect(active) {
      this.panelContent.style.maxHeight = this.panelContent.scrollHeight + "px";
      setTimeout(() => this.panelContent.style.maxHeight = null, active ? 300 : 10);
    }
  }
}
</script>

<style lang="scss">
@import "toggles";
</style>
