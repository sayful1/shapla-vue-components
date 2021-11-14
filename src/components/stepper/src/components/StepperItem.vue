<template>
  <div class="shapla-stepper" :class="itemClasses" @click="handleClick">
    <div class="shapla-stepper__outer">
      <div class="shapla-stepper__inner">
        <stepper-number
          v-if="Object.keys(localItem).length"
          :number-text="localItem.number_text"
          :completed="localItem.completed"
        />
        <div class="shapla-stepper__text">
          <span>{{ localItem.tab_text }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StepperNumber from "./StepperNumber";

export default {
  name: "StepperItem",
  components: {StepperNumber},
  props: {
    layout: {
      type: String,
      default: 'outline',
      validator: value => ['outline', 'square', 'arrow', 'progress-bar'].indexOf(value) !== -1
    },
    orientation: {
      type: String,
      default: 'horizontal',
      validator: value => ['horizontal'].indexOf(value) !== -1
    },
    item: {type: Object, required: true},
  },
  data() {
    return {
      localItem: {}
    }
  },
  watch: {
    item: {
      deep: true,
      handler(newValue) {
        this.localItem = Object.assign(
          {key: '', number_text: '', completed: false, current: false,},
          newValue
        );
      }
    }
  },
  computed: {
    itemClasses() {
      let classes = [];
      if (this.localItem.current) {
        classes.push('is-current');
      } else if (this.localItem.completed) {
        classes.push('is-completed');
      } else {
        classes.push('is-incomplete');
      }
      return classes;
    }
  },
  mounted() {
    this.localItem = Object.assign(
      {key: '', number_text: '', completed: false, current: false,},
      this.item
    );
  },
  methods: {
    handleClick() {
      this.$emit('click', this.item);
    }
  }
}
</script>

<style lang="scss">
@import "../styles/stepper";
@import "../styles/layout-outline";
@import "../styles/layout-square";
</style>
