<template>
  <div>
    <div class="shapla-columns">
      <div class="shapla-column">
        <span>Input</span>
        <star-rating v-model="rating"></star-rating>
        <pre>{{ rating }}</pre>
      </div>
      <div class="shapla-column">
        <span>Static</span>
        <star-rating v-model="staticRating" :is-static="true"></star-rating>
        <pre>{{ staticRating }}</pre>
      </div>
      <div class="shapla-column">
        <span>Static 2</span>
        <star-rating v-model="staticRating2" :is-static="true"></star-rating>
        <pre>{{ staticRating2 }}</pre>
      </div>
      <div class="shapla-column">
        <span>Static 3</span>
        <star-rating v-model="staticRating3" :is-static="true"></star-rating>
        <pre>{{ staticRating3 }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
import ShaplaStarRating from "../src";

export default {
  name: "ExampleStarRating",
  components: {'star-rating': ShaplaStarRating},
  data() {
    return {
      rating: 3,
      staticRating: 3.2,
      staticRating2: 3.5,
      staticRating3: 3.7,
    }
  }
}
</script>

<style lang="scss">
@import url("https://unpkg.com/@shapla/vue-columns/dist/style.css");
</style>
