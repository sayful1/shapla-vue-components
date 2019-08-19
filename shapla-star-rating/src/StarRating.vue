<template>
    <div class="star-rating" :class="{'is-static': isStatic}">
        <label v-for="rating in ratings"
               :key="rating"
               class="star-rating__label"
               :style="getStyle(rating)"
               @click="set(rating)"
               @mouseover="star_over(rating)"
               @mouseout="star_out"
        >
            <input type="radio" class="star-rating__radio">
            <span class="star-rating__star-full" v-if="isSelected(rating)">&#9733;</span>
            <span class="star-rating__star" v-else>&#9734;</span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "StarRating",
        props: {
            value: {type: [String, Number], default: null},
            isStatic: {type: Boolean, default: false},
            color: {type: String, default: '#dddddd'},
            activeColor: {type: String, default: '#3273DC'},
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
        methods: {
            isSelected(rating) {
                return (this.temp_value != null && this.temp_value >= rating) || (this.temp_value == null && this.value != null && this.value >= rating);
            },

            /**
             * Get style
             */
            getStyle(rating) {
                if (this.isSelected(rating)) {
                    return {color: this.activeColor}
                }
                return {color: this.color}
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
    .star-rating {
        &__label {
            cursor: pointer;
            display: inline-block;
            font-size: 1.5em;
            line-height: 1;
            padding: 3px;
            transition: color .2s ease-out;
            vertical-align: middle;

            &:hover {
                cursor: default;
            }
        }

        &:not(.is-static) label:hover {
            cursor: pointer;
        }

        &__radio {
            position: absolute;
            overflow: hidden;
            clip: rect(0 0 0 0);
            height: 1px;
            width: 1px;
            margin: -1px;
            padding: 0;
            border: 0;
        }
    }
</style>
