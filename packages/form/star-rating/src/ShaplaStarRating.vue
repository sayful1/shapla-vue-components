<template>
  <div class="star-rating" :class="{'is-static': isStatic}">
    <label
      v-for="rating in ratings"
      :key="rating"
      class="star-rating__label"
      :class="getLabelClass(rating)"
      :style="getStyle(rating)"
      @click="emitEvent(rating)"
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
import {computed, onMounted, reactive, toRefs} from "vue";

export default {
  name: "ShaplaStarRating",
  props: {
    modelValue: {type: [String, Number], default: null},
    isStatic: {type: Boolean, default: false},
    color: {type: String, default: ''},
    activeColor: {type: String, default: ''},
    ratings: {type: Array, default: () => [1, 2, 3, 4, 5]},
  },
  emits: ['update:modelValue'],
  setup(props, {emit}) {
    const state = reactive({temp_value: ''})

    onMounted(() => {
      state.temp_value = props.modelValue;
    })

    const get_rating = computed(() => {
      if (state.temp_value != null) {
        return parseFloat(state.temp_value);
      }
      if (state.temp_value == null && props.modelValue != null) {
        return parseFloat(props.modelValue);
      }
      return 0;
    })

    const isFullStar = (rating) => get_rating.value >= rating
    const isHalfStar = (rating) => get_rating.value < rating && get_rating.value > (parseInt(rating) - 0.6);
    const getLabelClass = (rating) => {
      return {
        'is-active': isFullStar(rating) || isHalfStar(rating)
      }
    }
    const star_over = (index) => {
      if (!props.isStatic) state.temp_value = index;
    }

    const star_out = () => {
      if (!props.isStatic) state.temp_value = props.modelValue;
    }

    const emitEvent = (value) => {
      if (!props.isStatic) {
        state.temp_value = value;
        emit('update:modelValue', value);
      }
    }

    const getStyle = (rating) => {
      if (!(props.activeColor.length && props.color.length)) {
        return {};
      }
      if (isFullStar(rating) || isHalfStar(rating)) {
        return {color: props.activeColor}
      }
      return {color: props.color}
    }

    return {isFullStar, isHalfStar, getLabelClass, star_over, star_out, emitEvent, getStyle}
  }
}
</script>

<style lang="scss">
@import "index";
</style>
