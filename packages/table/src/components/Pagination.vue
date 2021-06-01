<template>
  <nav :class="nav_classes" role="navigation" aria-label="pagination">
    <span class="shapla-pagination-displaying-num">{{ displaying_num }}</span>
    <span class="shapla-pagination-links" v-if="total_pages > 1">

			<a class="shapla-pagination-link shapla-pagination-first-page" :class="{'is-disabled':disable_first}"
         href="#" role="button" @click.prevent="firstPage">
				<span class="screen-reader-text sr-only" v-if="!disable_first">{{ textFirstPage }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
                    <path fill="none" d="M24 24H0V0h24v24z"></path>
                </svg>
			</a>

            <a class="shapla-pagination-link shapla-pagination-previous-page" :class="{'is-disabled':disable_prev}"
               href="#" role="button" @click.prevent="prePage">
                <span class="screen-reader-text sr-only" v-if="!disable_prev">{{ textPreviousPage }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
            </a>

            <span class="shapla-pagination-input-container">
                <label for="current-page-selector" class="screen-reader-text sr-only">{{ textCurrentPage }}</label>
                <input type="text"
                       class="shapla-pagination-current-page"
                       id="current-page-selector"
                       min="1"
                       :value="currentPage"
                       @change="goToPage($event)"
                       :max="total_pages"
                       aria-describedby="table-paging"
                >
                <span class="shapla-pagination-paging-text"> {{ textOf }} <span
                  class="shapla-pagination-total-pages">{{ total_pages }}</span></span>
            </span>

            <a href="#" class="shapla-pagination-link shapla-pagination-next-page" :class="{'is-disabled':disable_next}"
               role="button" @click.prevent="nextPage">
                <span class="screen-reader-text sr-only" v-if="!disable_next">{{ textNextPage }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
            </a>

            <a href="#" class="shapla-pagination-link shapla-pagination-last-page" :class="{'is-disabled':disable_last}"
               role="button" @click.prevent="lastPage">
                <span class="screen-reader-text sr-only" v-if="!disable_last">{{ textLastPage }}</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                </svg>
            </a>

        </span>
  </nav>
</template>

<script>
import {computed} from "vue";

const sizes = ['default', 'small', 'medium', 'large'];
export default {
  name: "Pagination",
  props: {
    totalItems: {type: Number, required: true, default: 0},
    perPage: {type: Number, required: true, default: 20},
    currentPage: {type: Number, required: true, default: 1},
    size: {type: String, default: 'default', validator: (value) => sizes.indexOf(value) !== -1},
    textName: {type: String, default: 'items'},
    textNameSingular: {type: String, default: 'item'},
    textCurrentPage: {type: String, default: 'Current Page'},
    textFirstPage: {type: String, default: 'First page'},
    textPreviousPage: {type: String, default: 'Previous page'},
    textNextPage: {type: String, default: 'Next page'},
    textLastPage: {type: String, default: 'Last page'},
    textOf: {type: String, default: 'of'},
  },

  emits: ['paginate'],

  setup(props, {emit}) {
    const nav_classes = computed(() => ['shapla-pagination', `is-${props.size}`]);
    const total_pages = computed(() => Math.ceil(props.totalItems / props.perPage));
    const disable_first = computed(() => props.currentPage < 3);
    const disable_prev = computed(() => props.currentPage < 2);
    const disable_next = computed(() => props.currentPage >= total_pages.value);
    const disable_last = computed(() => props.currentPage >= (total_pages.value - 1));
    const offset = computed(() => (props.currentPage - 1) * props.perPage);
    const displaying_num = computed(() => {
      return `${props.totalItems} ${props.totalItems > 1 ? props.textName : props.textNameSingular}`;
    });

    // Methods
    const emitEvent = (page) => emit('paginate', page);
    const goToPage = (event) => {
      let page = parseInt(event.target.value);
      if (isNaN(page)) page = props.currentPage;
      if (page < 1) page = 1;
      if (page > total_pages.value) page = total_pages.value;

      emitEvent(page);
    }
    const nextPage = () => !disable_next.value ? emitEvent(props.currentPage + 1) : false;
    const prePage = () => !disable_prev.value ? emitEvent(props.currentPage - 1) : false;
    const firstPage = () => !disable_first.value ? emitEvent(1) : false;
    const lastPage = () => !disable_last.value ? emitEvent(total_pages.value) : false;

    return {
      nav_classes, total_pages, disable_first, disable_prev, disable_next, disable_last, offset, displaying_num,
      goToPage, nextPage, prePage, firstPage, lastPage
    }
  }
}
</script>

<style lang="scss">
@import "shapla-css/src/components/data-table/pagination";
@import "shapla-css/src/utilities/screen-readers";
</style>
