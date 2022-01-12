<template>
  <div class="star-rating" :class="{'is-static': isStatic}">
    <label v-for="rating in ratings"
           :key="rating"
           class="star-rating__label"
           :class="getLabelClass(rating)"
           :style="getStyle(rating)"
           @click="set(rating)"
           @mouseover="star_over(rating)"
           @mouseout="star_out"
    >
      <input type="radio" class="star-rating__radio">
      <span class="star-rating__star-full" v-if="isFullStar(rating)">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </span>
      <span class="star-rating__star-half" v-else-if="isHalfStar(rating)">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24">
                    <defs><path id="a" d="M0 0h24v24H0V0z"/></defs>
                    <clipPath id="b"><use xlink:href="#a" overflow="visible"/></clipPath>
                    <path clip-path="url(#b)"
                          d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
                </svg>
            </span>
      <span class="star-rating__star" v-else>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </span>
    </label>
  </div>
</template>

<script>
export default {
  name: "StarRating",
  props: {
    value: {type: [String, Number], default: null},
    isStatic: {type: Boolean, default: false},
    color: {type: String, default: ''},
    activeColor: {type: String, default: ''},
    ratings: {type: Array, default: () => [1, 2, 3, 4, 5]},
  },

  data() {
    return {
      temp_value: null,
    };
  },
  mounted() {
    this.temp_value = this.value;
  },

  computed: {
    get_rating() {
      if (this.temp_value != null) {
        return parseFloat(this.temp_value);
      }
      if (this.temp_value == null && this.value != null) {
        return parseFloat(this.value);
      }
      return 0;
    }
  },
  methods: {
    /*
     * Check if current rating is full rating
     */
    isFullStar(rating) {
      return (this.get_rating >= rating);
    },

    /*
     * Check if current rating is half rating
     */
    isHalfStar(rating) {
      return this.get_rating < rating && this.get_rating > (parseInt(rating) - 0.6);
    },

    /*
     * Get style
     */
    getStyle(rating) {
      if (!(this.activeColor.length && this.color.length)) {
        return {};
      }
      if (this.isFullStar(rating) || this.isHalfStar(rating)) {
        return {color: this.activeColor}
      }
      return {color: this.color}
    },

    /*
     * Get label class
     */
    getLabelClass(rating) {
      return {
        'is-active': this.isFullStar(rating) || this.isHalfStar(rating)
      }
    },

    /*
* Behaviour of the stars on mouseover.
*/
    star_over(index) {
      if (!this.isStatic) {
        this.temp_value = index;
      }
    },

    /*
* Behaviour of the stars on mouseout.
*/
    star_out() {
      if (!this.isStatic) {
        return this.temp_value = this.value;
      }
    },

    /*
* Set the rating.
*/
    set(value) {
      if (!this.isStatic) {
        this.temp_value = value;
        this.$emit('input', value);
      }
    }
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.star-rating
</style>
