<template>
  <div class="shapla-steppers" :class="wrapperClasses">
    <div class="shapla-steppers__items">
      <stepper-item
        v-for="step in steps"
        :key="step.key"
        :item="step"
        :layout="layout"
      />
    </div>
  </div>
</template>

<script>
import StepperItem from "./components/StepperItem";

export default {
  name: "Stepper",
  components: {StepperItem},
  props: {
    steps: {type: Array, required: true},
    layout: {
      type: String, default: 'outline',
      validator: value => ['outline', 'square', 'arrow', 'progress-bar'].indexOf(value) !== -1
    },
    orientation: {
      type: String,
      default: 'horizontal',
      validator: value => ['horizontal'].indexOf(value) !== -1
    },
  },
  computed: {
    wrapperClasses() {
      return [
        `is-layout-${this.layout}`,
        `is-orientation-${this.orientation}`,
      ];
    }
  }
}
</script>

<style lang="scss">
@import "styles/steppers";
</style>
