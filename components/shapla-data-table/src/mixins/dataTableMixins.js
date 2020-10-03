const dataTableMixins = {
  props: {
    items: {type: Array, required: true,},
    columns: {type: Array, required: true,},
    selectedItems: {type: Array, default: () => []},
    actions: {type: Array, default: () => []},
    index: {type: String, default: 'id'},
    showCb: {type: Boolean, default: true},
    selectAllText: {type: String, default: 'Select All'},
    notFoundText: {type: String, default: 'No items found.'},
    sortBy: {type: String, default: 'id'},
    sortOrder: {type: String, default: "desc"},
    mobileWidth: {type: Number, default: 768},
    areaLabel: {type: String, required: false},
    showExpand: {type: Boolean, default: false},
  },
  data() {
    return {
      windowWidth: 0,
    }
  },
  computed: {
    isMobileView() {
      return this.windowWidth <= this.mobileWidth;
    },
    actionColumn() {
      let column = 'title';
      this.columns.forEach((col, index) => {
        if (index === 0) column = col.key;
      });
      return column;
    },
    tableClasses() {
      return {
        'shapla-data-table': true,
        'shapla-data-table--mobile': this.isMobileView
      }
    },
    colspan() {
      let columns = Object.keys(this.columns).length;

      if (this.showCb) {
        columns += 1;
      }

      if (this.showExpand) {
        columns += 1;
      }

      return columns;
    },

    expandColSpanLength() {
      let length = this.columns.length + 1;
      if (this.showCb) {
        length += 1;
      }
      return length;
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

    getHeadCellClass(value) {
      let isNumeric = (typeof value.numeric !== "undefined" && value.numeric === true);
      return [
        'shapla-data-table__header-cell',
        'shapla-data-table__header-cell-' + value.key,
        {'shapla-data-table__header-cell--numeric': isNumeric},
        {'column-primary': this.actionColumn === value.key},
        {'is-sortable': this.isSortable(value)},
        {'is-sorted-ascending': this.isSorted(value.key) && this.sortOrder === 'asc'},
        {'is-sorted-descending': this.isSorted(value.key) && this.sortOrder === 'desc'}
      ]
    },
    getBodyCellClass(value) {
      let isNumeric = (typeof value.numeric !== "undefined" && value.numeric === true);
      return [
        'shapla-data-table__cell',
        'shapla-data-table__cell-' + value.key,
        {'shapla-data-table__cell--numeric': isNumeric},
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


    toggleExpandRow(event) {
      let el = event.target, tr = el.closest('tr'), nextTr = tr.nextElementSibling,
        up = tr.querySelector('.expand-triangle-up'),
        down = tr.querySelector('.expand-triangle-down');

      if ("none" === nextTr.style.display) {
        nextTr.style.display = '';
        up.style.display = 'block';
        down.style.display = 'none';
      } else {
        up.style.display = 'none';
        nextTr.style.display = 'none';
        down.style.display = 'block';
      }
    },

    actionClicked(action, row) {
      this.$emit('action:click', action, row);
    },

    isSortable(column) {
      return column.sortable && column.sortable === true;
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
