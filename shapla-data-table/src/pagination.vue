<template>
    <nav :class="navClasses" role="navigation" aria-label="pagination">
        <span class="shapla-pagination-displaying-num">{{displaying_num}}</span>
        <span class="shapla-pagination-links" v-if="total_pages > 1">

			<a class="shapla-pagination-link shapla-pagination-first-page" :class="{'is-disabled':disable_first}"
               href="#"
               @click.prevent="firstPage">
				<span class="screen-reader-text" v-if="!disable_first">First page</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path>
                    <path fill="none" d="M24 24H0V0h24v24z"></path>
                </svg>
			</a>

            <a class="shapla-pagination-link shapla-pagination-previous-page" :class="{'is-disabled':disable_prev}"
               href="#"
               @click.prevent="prePage">
                <span class="screen-reader-text" v-if="!disable_prev">Previous page</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path>
                    <path fill="none" d="M0 0h24v24H0z"></path>
                </svg>
            </a>

            <span class="shapla-pagination-input-container">
                <label for="current-page-selector" class="screen-reader-text">Current Page</label>
                <input type="text"
                       class="shapla-pagination-current-page"
                       id="current-page-selector"
                       min="1"
                       :value="current_page"
                       @change="goToPage($event)"
                       :max="total_pages"
                       aria-describedby="table-paging"
                >
                <span class="shapla-pagination-paging-text"> of <span
                        class="shapla-pagination-total-pages">{{total_pages}}</span></span>
            </span>

            <a href="#" class="shapla-pagination-link shapla-pagination-next-page" :class="{'is-disabled':disable_next}"
               @click.prevent="nextPage">
                <span class="screen-reader-text" v-if="!disable_next">Next page</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
                    <path d="M0 0h24v24H0z" fill="none"></path>
                </svg>
            </a>

            <a href="#" class="shapla-pagination-link shapla-pagination-last-page" :class="{'is-disabled':disable_last}"
               @click.prevent="lastPage">
                <span class="screen-reader-text" v-if="!disable_last">Last page</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path>
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                </svg>
            </a>

        </span>
    </nav>
</template>

<script>
    export default {
        name: "pagination",
        props: {
            total_items: {
                type: Number,
                required: true,
                default: 0
            },
            per_page: {
                type: Number,
                required: true,
                default: 20
            },
            current_page: {
                type: Number,
                required: true,
                default: 1
            },
            size: {
                type: String,
                default: 'default',
                validator: (value) => ['default', 'small', 'medium', 'large'].indexOf(value) !== -1
            },
        },

        computed: {

            /**
             * Nav classes
             *
             * @returns {Object}
             */
            navClasses() {
                return {
                    'shapla-pagination': true,
                    'is-small': this.size === 'small',
                    'is-medium': this.size === 'medium',
                    'is-large': this.size === 'large',
                }
            },

            /**
             * Total pages
             *
             * @returns {number}
             */
            total_pages() {
                return Math.ceil(this.total_items / this.per_page)
            },

            /**
             * Disable first nav
             *
             * @returns {boolean}
             */
            disable_first() {
                return this.current_page < 3;
            },

            /**
             * Disable previous nav
             *
             * @returns {boolean}
             */
            disable_prev() {
                return this.current_page < 2;
            },

            /**
             * Disable next nav
             *
             * @returns {boolean}
             */
            disable_next() {
                return this.current_page >= this.total_pages;
            },

            /**
             * Disable last nav
             *
             * @returns {boolean}
             */
            disable_last() {
                return this.current_page >= (this.total_pages - 1);
            },

            /**
             * Get offset
             *
             * @returns {number}
             */
            offset: function () {
                return (this.current_page - 1) * this.per_page
            },

            /**
             * Get current page number
             *
             * @returns {string}
             */
            displaying_num() {
                if (this.total_items > 1) {
                    return `${this.total_items} items`;
                }
                return `${this.total_items} item`;
            }
        },

        methods: {
            nextPage() {
                if (this.current_page === this.total_pages) {
                    return;
                }
                this.query(this.current_page + 1);
            },
            prePage() {
                if (this.current_page === 1) {
                    return;
                }
                this.query(this.current_page - 1);
            },
            firstPage() {
                if (this.disable_first) {
                    return;
                }
                this.query(1);
            },
            lastPage() {
                if (this.disable_last) {
                    return;
                }
                this.query(this.total_pages);
            },
            goToPage(event) {
                let page = parseInt(event.target.value);
                if (isNaN(page)) page = this.current_page;
                if (page < 1) page = 1;
                if (page > this.total_pages) page = this.total_pages;

                this.query(page);
            },
            query(page) {
                this.$emit('pagination', page);
            }
        }
    }
</script>

<style lang="scss">
    .shapla-pagination {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        font-size: 1rem;
        justify-content: flex-end;

        &.is-small {
            font-size: 0.875rem;
        }

        &.is-medium {
            font-size: 1.25rem;
        }

        &.is-large {
            font-size: 1.5rem;
        }

        * {
            box-sizing: border-box;
        }

        &-displaying-num {
            margin-right: 0.5em;
            font-size: 1em;
        }

        &-links {
            display: flex;
            justify-content: flex-start;
            align-items: flex-start;
        }

        &-link {
            -moz-appearance: none;
            -webkit-appearance: none;
            align-items: center;
            border-radius: 4px;
            box-shadow: none;
            display: inline-flex;
            height: 2em;
            position: relative;
            justify-content: center;
            margin: 0 .25em;
            border: 1px solid #ddd;
            background: #ffffff;
            color: #363636;
            width: 2em;

            svg {
                fill: currentColor;
                height: 1em;
                width: 1em;
            }

            &.is-disabled {
                cursor: not-allowed;
                opacity: 0.5;
            }
        }

        &-input-container {
            align-items: center;
            display: inline-flex;
            margin: 0 .25em;
        }

        &-current-page {
            border-radius: 4px;
            margin: 0 2px 0 0;
            font-size: 1em;
            text-align: center;
            border: 1px solid #dbdbdb;
            box-shadow: none;
            background-color: #fff;
            color: #32373c;
            outline: none;
            transition: 0.05s border-color ease-in-out;
            padding: 3px 5px;
            width: 4em;
            height: 2em;
            line-height: 1.5;
        }

        &-paging-text {
            margin-left: 0.5em;
            font-size: 1em;
        }
    }
</style>
