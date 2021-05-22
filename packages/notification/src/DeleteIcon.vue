<template>
  <span :class="classes" :aria-label="ariaLabel" @click.prevent="handleClickEvent"></span>
</template>

<script>
export default {
  name: "deleteIcon",
  props: {
    small: {type: Boolean, default: false},
    medium: {type: Boolean, default: false},
    large: {type: Boolean, default: false},
    fixed: {type: Boolean, default: false},
    ariaLabel: {type: String, default: 'close'}
  },
  computed: {
    classes() {
      return {
        'shapla-delete-icon': true,
        'is-small': this.small,
        'is-medium': this.medium,
        'is-large': this.large,
        'is-fixed': this.fixed,
      }
    }
  },
  methods: {
    handleClickEvent() {
      this.$emit('click');
    }
  }
}
</script>

<style lang="scss">
.shapla-delete-icon {
  user-select: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  background-color: rgba(#000, 0.2);
  border: none;
  border-radius: 32px;
  cursor: pointer;
  display: inline-block;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 1rem;
  outline: none;
  position: relative;
  vertical-align: top;
  height: 20px;
  width: 20px;

  &:before,
  &:after {
    background-color: #fff;
    content: "";
    display: block;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%) rotate(45deg);
    transform-origin: center center;
  }

  &:before {
    height: 2px;
    width: 50%;
  }

  &:after {
    height: 50%;
    width: 2px;
  }

  &:hover,
  &:focus {
    background-color: rgba(#000, 0.3);
  }

  &:active {
    background-color: rgba(#000, 0.4);
  }

  // Sizes
  &.is-small {
    height: 16px;
    width: 16px;
  }

  &.is-medium {
    height: 24px;
    width: 24px;
  }

  &.is-large {
    height: 32px;
    width: 32px;
  }
}
</style>
