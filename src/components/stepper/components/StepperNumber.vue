<template>
  <div class="shapla-stepper__number-wrapper">
    <div class="shapla-stepper__number">
      <span
        v-if="!completed"
        class="shapla-stepper__number-text"
      >{{ numberText }}</span>
      <span
        v-if="completed"
        class="shapla-stepper__completed-icon"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z" />
        </svg>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StepperNumber",
  props: {
    numberText: {type: [String, Number], required: true},
    completed: {type: Boolean, required: true},
  }
}
</script>

<style lang="scss">
@import "shapla-css/src/colors.scss";

$stepper-icon-size: 30px !default;
$stepper-accent: $primary;
$stepper-on-accent: $on-primary;

.shapla-stepper {
  &__number-wrapper {
    display: table-cell;
    vertical-align: middle;
    padding-right: 8px;
  }

  &__number {
    align-items: center;
    display: inline-flex;
    font-weight: bold;
    justify-content: center;
    text-align: center;
    transition: none;

    border-radius: $stepper-icon-size;
    height: $stepper-icon-size;
    min-width: $stepper-icon-size;
    min-height: $stepper-icon-size;
    width: $stepper-icon-size;

    background: #fff;
    border: 2px solid #ddd;
    color: #999;

    .is-completed & {
      border-width: 0;
      background: $stepper-accent;
      color: $stepper-on-accent;
    }

    .is-current & {
      background-color: transparent;
      border-color: currentColor;
      color: $stepper-accent;
    }

    .is-incomplete & {
    }
  }

  &__completed-icon,
  &__completed-icon svg {
    fill: currentColor;
    height: 24px;
    width: 24px;
  }

  &:hover {
    .shapla-stepper__number {
      border-width: 0;
      background-color: #333;
      color: #fff;
    }
  }
}
</style>
