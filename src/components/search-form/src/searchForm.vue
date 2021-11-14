<template>
  <form role="search" method="get" class="shapla-search-form" action="" @submit.prevent="submit" :style="getStyle">
    <label>
      <span class="screen-reader-text sr-only">{{ screenReaderText }}</span>
      <input type="search"
             class="shapla-search-form__input"
             :placeholder="placeholder"
             :value="searchValue"
             @input="input($event.target.value)"
             @search.prevent="submit"
      >
    </label>
    <button type="submit" class="shapla-search-form__submit">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path fill="none" d="M0 0h24v24H0V0z"></path>
        <path
          d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  name: "searchForm",
  props: {
    value: {type: String, default: ''},
    placeholder: {type: String, default: 'Search …'},
    screenReaderText: {type: String, default: 'Search for:'},
    fontSize: {type: String, default: ''},
  },
  data() {
    return {
      searchValue: '',
    }
  },
  computed: {
    getStyle() {
      if (this.fontSize) {
        return {"--base-font-size": this.fontSize}
      }
      return {};
    }
  },
  mounted() {
    this.searchValue = this.value;
  },
  methods: {
    input(value) {
      this.$emit('input', value);
      this.searchValue = value;
    },
    submit() {
      this.$emit('search', this.searchValue);
    }
  }
}
</script>

<style lang="scss">
@import "search-form";
</style>
