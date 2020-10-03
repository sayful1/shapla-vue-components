<template>
  <div v-if="active" :class="containerClass">
    <div class="shapla-spinner-inner" :class="{'has-text':showText}">
      <svg class="shapla-simple-spinner" :width="size" :height="size" viewBox="0 0 66 66"
           xmlns="http://www.w3.org/2000/svg">
        <circle class="shapla-simple-spinner__circle" :class="{'is-single':single}" fill="none"
                :stroke-width="strokeWidth" stroke-linecap="round" cx="33" cy="33" r="30"></circle>
      </svg>
      <div class="shapla-spinner-text" v-if="showText">Loading...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SimpleSpinner",
  props: {
    active: {type: Boolean, default: true},
    single: {type: Boolean, default: false},
    showText: {type: Boolean, default: false},
    position: {type: String, default: 'fixed'},
    size: {type: String, default: '28px'},
    strokeWidth: {type: String, default: '3px'},
  },
  computed: {
    containerClass() {
      return {
        'shapla-simple-spinner-container': true,
        'is-fixed': this.position === 'fixed',
        'is-absolute': this.position === 'absolute',
        'is-static': this.position === 'static',
      }
    },
  }
}
</script>

<style lang="scss" scoped>
$offset: 187;
$duration: 1.4s;

@keyframes shapla-spinner__container-rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
}

@keyframes shapla-spinner__circle-colors {
  0% {
    stroke: #42A5F5;
  }
  25% {
    stroke: #f44336;
  }
  50% {
    stroke: #FDD835;
  }
  75% {
    stroke: #4CAF50;
  }
  100% {
    stroke: #42A5F5;
  }
}

@keyframes shapla-spinner__circle-dash {
  0% {
    stroke-dashoffset: $offset;
  }
  50% {
    stroke-dashoffset: $offset / 4;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: $offset;
    transform: rotate(450deg);
  }
}

.shapla-simple-spinner-container {
  --spinner-duration: #{$duration};
  --spinner-offset: #{$offset};

  &.is-static {

  }
}

.shapla-simple-spinner {
  animation: shapla-spinner__container-rotate var(--spinner-duration) linear infinite;
}

.shapla-simple-spinner__circle {
  stroke-dasharray: var(--spinner-offset);
  stroke-dashoffset: 0;
  transform-origin: center;
  stroke: #42A5F5;
  animation: shapla-spinner__circle-dash var(--spinner-duration) ease-in-out infinite,
  shapla-spinner__circle-colors calc(var(--spinner-duration) * 4) ease-in-out infinite;

  &.is-single {
    animation: shapla-spinner__circle-dash var(--spinner-duration) ease-in-out infinite;
  }
}
</style>
