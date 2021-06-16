<template>
  <div>
    <div>
      <shapla-button>Default</shapla-button>
    </div>
  </div>
</template>

<script>
import {ShaplaButton} from '../src/'

export default {
  name: "ExampleComponents",
  components: {ShaplaButton},
  setup() {
    const handleClick = (event) => {
      console.log(event);
      alert('Click event');
    }
    return {handleClick}
  }
}
</script>

<style lang="scss">
@use "./src/index.scss" as shapla;

@include shapla.button;

.example-shapla-button-container {
  box-sizing: border-box;

  *, *:before, *:after {
    box-sizing: border-box;
  }
}

.shapla-buttons {
  > * {
    margin: 5px;
  }
}
</style>
