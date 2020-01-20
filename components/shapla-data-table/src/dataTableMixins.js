const dataTableMixins = {
    props: {
        items: {type: Array, required: true,},
        columns: {type: Array, required: true,},
        selectedItems: {type: Array, default: () => []},
        actions: {type: Array, default: () => []},
        actionColumn: {type: String, default: 'title'},
        index: {type: String, default: 'id'},
        showCb: {type: Boolean, default: true},
        selectAllText: {type: String, default: 'Select All'},
        notFoundText: {type: String, default: 'No items found.'},
        sortBy: {type: String, default: 'id'},
        sortOrder: {type: String, default: "desc"},
        mobileWidth: {type: Number, default: 768},
    },
    data() {
        return {
            windowWidth: 0,
        }
    },
    computed: {
        tableClasses() {
            return {
                'shapla-data-table': true,
                'shapla-data-table--fullwidth': true,
                'shapla-data-table--mobile': this.windowWidth <= this.mobileWidth
            }
        },
        colspan() {
            let columns = Object.keys(this.columns).length;

            if (this.showCb) {
                columns += 1;
            }

            return columns;
        },

        hasActions() {
            return this.actions.length > 0;
        },

        isAllSelected() {
            if (!this.items.length) {
                return false;
            }

            return this.selectedItems.length === this.items.length;
        }
    },
    mounted() {
        this.updateTableWidth();

        window.addEventListener('resize', () => {
            this.updateTableWidth();
        });

        window.addEventListener('orientationchange', () => {
            this.updateTableWidth();
        });
    },
    methods: {
        updateTableWidth() {
            if (this.$el.offsetWidth) {
                this.windowWidth = this.$el.offsetWidth;
            } else {
                this.windowWidth = window.innerWidth;
            }
        },
        getHeadColumnClass(key, value) {
            let nonNumeric = typeof value.numeric === "undefined" || (typeof value.numeric !== "undefined" && value.numeric === false);
            return [
                'manage-column',
                'manage-' + key,
                {'shapla-data-table__cell--non-numeric': nonNumeric},
                {'column-primary': this.actionColumn === key},
                {'sortable': this.isSortable(value)},
                {'sorted': this.isSorted(key)},
                {'shapla-data-table__header--sorted-ascending': this.isSorted(key) && this.sortOrder === 'asc'},
                {'shapla-data-table__header--sorted-descending': this.isSorted(key) && this.sortOrder === 'desc'}
            ]
        },
        getBodyColumnClass(value) {
            let nonNumeric = typeof value.numeric === "undefined" || (typeof value.numeric !== "undefined" && value.numeric === false);
            return [
                'manage-column',
                'manage-' + value.key,
                {'shapla-data-table__cell--non-numeric': nonNumeric},
                {'column-primary': this.actionColumn === value.key},
            ]
        },

        toggleRow(event) {
            let el = event.target, tr = el.closest('tr'), table = el.closest('table');
            table.querySelectorAll('tr').forEach(element => {
                if (element.classList.contains('is-expanded') && element !== tr) {
                    element.classList.remove('is-expanded');
                }
            });

            setTimeout(() => {
                tr.classList.toggle('is-expanded');
            }, 50);
        },

        actionClicked(action, row) {
            this.$emit('action:click', action, row);
        },

        isSortable(column) {
            return column.hasOwnProperty('sortable') && column.sortable === true;
        },

        isSorted(column) {
            return column === this.sortBy;
        },

        handleSortBy(column) {
            let order = this.sortOrder === 'asc' ? 'desc' : 'asc';

            this.$emit('sort', column, order);
        },
        handleSelectItem(item) {
            let value = item[this.index] !== undefined ? item[this.index] : item.id,
                selectedItems = this.selectedItems,
                index = selectedItems.indexOf(value);
            if (-1 === index) {
                selectedItems.push(value);
            } else {
                selectedItems.splice(index, 1);
            }
            this.$emit('item:select', selectedItems);
        },
        handleSelectAll() {
            let selected = [];

            if (this.items.length && (this.selectedItems.length !== this.items.length)) {
                this.items.forEach(item => {
                    if (item[this.index] !== undefined) {
                        selected.push(item[this.index]);
                    } else {
                        selected.push(item.id);
                    }
                });
            }

            this.$emit('item:select', selected);
        }
    }
};

export default dataTableMixins;
