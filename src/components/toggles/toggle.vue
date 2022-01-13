<template>
  <div
    class="shapla-toggle-panel"
    :class="panelClass"
  >
    <div
      class="shapla-toggle-panel__heading"
      :class="headingClasses"
      @click.prevent="toggleActive"
    >
      <div class="shapla-toggle-panel__title">
        <h4 class="shapla-toggle-panel__title-text">
          <slot name="title">
            {{ name }}
          </slot>
        </h4>
        <div
          v-if="subtext"
          class="shapla-toggle-panel__title-subtext"
          v-html="subtext"
        />
      </div>
      <div
        class="shapla-toggle-panel__icon"
        :class="`is-icon-${toggleIconPosition}`"
      >
        <template v-if="isSelected">
          <slot name="icon-close">
            <toggle-icon icon="minus" />
          </slot>
        </template>
        <template v-if="!isSelected">
          <slot name="icon-open">
            <toggle-icon icon="plus" />
          </slot>
        </template>
      </div>
    </div>
    <div
      class="shapla-toggle-panel__body"
      :class="panelBodyClass"
    >
      <div class="shapla-toggle-panel__content">
        <slot :active="isSelected" />
      </div>
    </div>
  </div>
</template>

<script>
import ToggleIcon from "./toggleIcon.vue";
import ToggleEvent from "./ToggleEvent.js";

export default {
  name: "ShaplaToggle",
  components: {ToggleIcon},
  props: {
    name: {type: String, required: true},
    subtext: {type: String, required: false},
    selected: {type: Boolean, default: false},
    iconPosition: {type: String, validator: value => -1 !== ['left', 'right'].indexOf(value)},
    boxedMode: {type: Boolean, default: undefined},
    showDivider: {type: Boolean, default: undefined},
    titleColor: {
      type: String,
      default: 'default',
      validator: value => -1 !== ['default', 'primary', 'secondary'].indexOf(value)
    },
  },
  data() {
    return {
      isSelected: false,
      isOverflowVisible: false,
      panelContent: null,
      toggleIconPosition: 'left',
      toggleShowDivider: true,
      toggleBoxedMode: true,
      toggleTitleColor: 'default',
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
    headingClasses() {
      let classes = [];
      if (this.toggleIconPosition !== 'left') {
        classes.push(`has-icon-${this.toggleIconPosition}`);
      }
      if (this.toggleTitleColor !== 'default') {
        classes.push(`is-color-${this.toggleTitleColor}`);
      }
      return classes
    },
    panelBodyClass() {
      return {
        'is-active': this.isSelected,
        'is-overflow-visible': this.isOverflowVisible,
      }
    }
  },
  mounted() {
    this.isSelected = this.selected;
    this.isOverflowVisible = this.selected;

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

    // Update title color
    if (this.$parent.titleColor !== undefined) {
      this.toggleTitleColor = this.$parent.titleColor;
    } else if (this.titleColor !== undefined) {
      this.toggleTitleColor = this.titleColor;
    }

    ToggleEvent.$on('changeActive', element => {
      if (this.$el !== element && this.isSelected) {
        this.isSelected = false;
        this.isOverflowVisible = false;
      }
    })
  },
  methods: {
    toggleActive() {
      if (this.$parent.accordion && this.$parent.accordion === true) {
        ToggleEvent.$emit('changeActive', this.$el);
      }
      this.isSelected = !this.isSelected;
      this.isOverflowVisible = !this.isOverflowVisible;
    }
  }
}
</script>
