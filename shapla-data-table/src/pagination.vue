<template>
    <nav :class="navClasses" role="navigation" aria-label="pagination">
        <span class="wp-pagination-displaying-num">{{displaying_num}}</span>
        <span class="wp-pagination-links" v-if="total_pages > 1">

			<span aria-hidden="true" class="wp-pagination-link wp-pagination-first-page is-disabled"
                  v-if="disable_first">&laquo;</span>
			<a class="wp-pagination-link wp-pagination-first-page" href="#" @click.prevent="firstPage" v-else>
				<span class="screen-reader-text">First page</span>
				<span aria-hidden="true">&laquo;</span>
			</a>

            <span aria-hidden="true" class="wp-pagination-link wp-pagination-previous-page is-disabled"
                  v-if="disable_prev">&lsaquo;</span>
            <a class="wp-pagination-link wp-pagination-previous-page" href="#" @click.prevent="prePage" v-else>
                <span class="screen-reader-text">Previous page</span>
                <span aria-hidden="true">&lsaquo;</span>
            </a>

            <span class="wp-pagination-input-container">
                <label for="current-page-selector" class="screen-reader-text">Current Page</label>
                <input type="text"
                       class="wp-pagination-current-page"
                       id="current-page-selector"
                       min="1"
                       :value="current_page"
                       @change="goToPage($event)"
                       :max="total_pages"
                       aria-describedby="table-paging"
                >
                <span class="wp-pagination-paging-text"> of <span
                        class="wp-pagination-total-pages">{{total_pages}}</span></span>
            </span>

            <span class="wp-pagination-link wp-pagination-next-page is-disabled" aria-hidden="true" v-if="disable_next">&rsaquo;</span>
            <a href="#" class="wp-pagination-link wp-pagination-next-page" @click.prevent="nextPage" v-else>
                <span class="screen-reader-text">Next page</span>
                <span aria-hidden="true">&rsaquo;</span>
            </a>

            <span class="wp-pagination-link wp-pagination-last-page is-disabled" aria-hidden="true" v-if="disable_last">&raquo;</span>
            <a href="#" class="wp-pagination-link wp-pagination-last-page" @click.prevent="lastPage" v-else>
                <span class="screen-reader-text">Last page</span>
                <span aria-hidden="true">&raquo;</span>
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
            per_page: {type: Number, required: true, default: 20},
            current_page: {type: Number, required: true, default: 1},
            size: {
                type: String, default: 'default', validator(value) {
                    return (['default', 'small', 'medium', 'large'].indexOf(value) !== -1);
                }
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
                    'wp-pagination': true,
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
                this.query(1);
            },
            lastPage() {
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
    .wp-pagination {
        align-items: center;
        box-sizing: border-box;
        display: flex;
        font-size: 1rem;
        justify-content: flex-end;

        &.is-small {
            font-size: 0.75rem;
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
            margin-right: 0.5rem;
            font-size: 1em;
        }

        &-link {
            -moz-appearance: none;
            -webkit-appearance: none;
            align-items: center;
            border-radius: 4px;
            box-shadow: none;
            display: inline-flex;
            height: 2.25em;
            line-height: 1.5;
            position: relative;
            vertical-align: top;
            font-size: 1em;
            padding: calc(.375em - 1px) .5em;
            justify-content: center;
            margin: .25em;
            text-align: center;
            text-decoration: none;
            border: 1px solid #dbdbdb;
            background: #ffffff;
            color: #363636;
            min-width: 2.25em;

            &.is-disabled {
                cursor: not-allowed;
                opacity: 0.5;
            }
        }

        &-input-container {
            align-items: center;
            display: inline-flex;
            margin: .25em;
        }

        &-current-page {
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
            height: 2.25em;
            line-height: 1.5;
        }

        &-paging-text {
            margin-left: 0.5rem;
            font-size: 1em;
        }
    }
</style>
