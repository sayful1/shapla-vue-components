<template>
  <div
    class="shapla-month-navigation"
    :class="{'is-fullwidth':fullwidth}"
  >
    <div
      class="shapla-month-navigation__prev"
      @click="changeMonth('pre')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
      </svg>
    </div>
    <div class="shapla-month-navigation__title">
      {{ title }}
    </div>
    <div
      class="shapla-month-navigation__next"
      @click="changeMonth('next')"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z" />
      </svg>
    </div>
  </div>
</template>

<script>
    export default {
        name: "MonthNavigation",
        props: {
            fullwidth: {type: Boolean, default: false},
            monthNames: {
                type: Array, default: () => [
                    "January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"
                ]
            },
        },
        data() {
            return {
                year: '',
                monthNumber: '',
                monthName: '',
            }
        },
        computed: {
            title() {
                return `${this.monthName}  ${this.year}`;
            }
        },
        mounted() {
            let d = new Date();
            this.year = d.getFullYear();
            this.monthNumber = d.getMonth();
            this.monthName = this.monthNames[this.monthNumber];

            this.$emit('change', {year: this.year, month: this.monthNumber + 1});
        },
        methods: {
            changeMonth(data) {
                if ('pre' === data) {
                    if (this.monthNumber > 0) {
                        this.monthNumber -= 1;
                    } else {
                        this.monthNumber = 11;
                        this.year -= 1;
                    }
                    this.monthName = this.monthNames[this.monthNumber];
                }
                if ('next' === data) {
                    if (this.monthNumber < 11) {
                        this.monthNumber += 1;
                    } else {
                        this.monthNumber = 0;
                        this.year += 1;
                    }
                    this.monthName = this.monthNames[this.monthNumber];
                }

                this.$emit('change', {year: this.year, month: this.monthNumber + 1});
            }
        }
    }
</script>

<style lang="scss">
    .shapla-month-navigation {
        align-items: center;
        display: flex;
        justify-content: center;

        &__prev,
        &__next {
            width: 24px;
            height: 24px;
            overflow: hidden;
            cursor: pointer;
            border-radius: 12px;

            &:hover {
                background: rgba(#000, .2);
            }
        }

        &__prev {
            margin-right: 1rem;
        }

        &__next {
            margin-left: 1rem;
        }

        &__title {
            font-size: 20px;
            font-weight: normal;
            min-width: 150px;
            text-align: center;
        }
    }
</style>
