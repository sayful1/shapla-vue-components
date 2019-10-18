# shapla-data-table

A simple data table component for VueJS

Supports:

 * Row Actions with Slot Support
 * Custom Column Slot
 * Sorting

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-data-table
```

# Usage

Add the component:

```js
import dataTable from 'shapla-data-table';

export default {
  name: 'Hello',

  components: {
    dataTable
  },

  data () {
    return {
        columns:[
            {key:'title', label: 'Title', sortable: true },
            {key:'author', label: 'Author'}
        ],
        actions:[
            { key: 'edit', label: 'Edit' },
            { key: 'trash', label: 'Delete' }
        ],
        items:[
            {
                id: 1,
                title: 'Wings of Fire: An Autobiography',
                author: ['A.P.J. Abdul Kalam'],
                image: 'https://images.gr-assets.com/books/1295670969l/634583.jpg'
            },
            {
                id: 2,
                title: 'Who Moved My Cheese?',
                author: ['Spencer Johnson', 'Kenneth H. Blanchard'],
                image: 'https://images.gr-assets.com/books/1388639717l/4894.jpg'
            },
            {
                id: 3,
                title: 'Option B',
                author: ['Sheryl Sandberg', 'Adam Grant', 'Adam M. Grant'],
                image: 'https://images.gr-assets.com/books/1493998427l/32938155.jpg'
            }
        ]
    };
  },
}

```

```html

<data-table
  :columns="columns"
  :items="items"
  :actions="actions"
  :show-cb="true"
  action-column="title"
  @action:click="onActionClick"
>
  <template slot="title" slot-scope="data">
    <img :src="data.row.image" :alt="data.row.title" width="50">
    <strong><a href="#">{{ data.row.title }}</a></strong>
  </template>

  <template slot="author" slot-scope="data">
    {{ data.row.author.join(', ') }}
  </template>
</list-table>
```

### Props

| Property        | Type    | Required | Default            | Description                                                             |
|-----------------|---------|----------|--------------------|-------------------------------------------------------------------------|
| `items`         | Array   | **yes**  | `null`             |                                                                         |
| `columns`       | Array   | **yes**  | `null`             | Pass an **Array** of **Objects**. See _columns data object_             |
| `selectedItems` | Array   | no       | `[]`               | Pass an **Array** of object id                                          |
| `actions`       | Array   | no       | `[]`               | If you want to show row actions, pass an **Array** of **Objects**       |
| `actionColumn`  | String  | no       | `title`            | Define which is the action column so we could place action items there. |
| `index`         | String  | no       | `id`               | The index identifier of the row                                         |
| `showCb`        | Boolean | no       | `true`             | Whether to show the bulk checkbox in each rows                          |
| `selectAllText` | String  | no       | `Select All`       | Shows if no items are found                                             |
| `notFoundText`  | String  | no       | `No items found.`  | Shows if no items are found                                             |
| `sortBy`        | String  | no       | `null`             | The property in data on which to initially sort.                        |
| `sortOrder`     | String  | no       | `asc`              | The initial sort order.                                                 |
| `mobileWidth`   | Number  | no       | `768`              | Mobile breakpoint for table.                                            |


### columns data object

| Property      | Type      | Required  | Default   | Description                                                             |
|---------------|-----------|-----------|-----------|-------------------------------------------------------------------------|
| `key`         | String    | **yes**   | ``        | Column key.                                                             |
| `label`       | String    | **yes**   | ``        | Column label                                                            |
| `numeric`     | Boolean   | no        | `false`   | Set `true` if table column data type is numeric.                        |
| `sortable`    | Boolean   | no        | `false`   | Whether the column data can be sorted by `asc` or `desc` order.         |


### actions data object

| Property      | Type      | Required  | Default   | Description   |
|---------------|-----------|-----------|-----------|---------------|
| `key`         | String    | **yes**   | ``        | Action key    |
| `label`       | String    | **yes**   | ``        | Action label  |


## Listeners

The table component fires the following events:

**`action:click`**: When a row action is clicked, it fires the event. The action name and the current row will be passed.

```html
<!-- template -->
<list-table
  @action:click="onActionClick"
</list-table>


<!-- method -->
methods: {
  onActionClick(action, row) {
    if ( 'trash' === action ) {
      if ( confirm('Are you sure to delete?') ) {
        alert('deleted: ' + row.title);
      }
    }
  }
}
```

**sort**: When a sorted column is clicked

```html
<!-- template -->
<list-table
  @sort="sortCallback"
</list-table>

<!-- method -->
methods: {
  sortCallback(column, order) {
    this.sortBy = column;
    this.sortOrder = order;

    // this.loadItems(comun, order);
  }
}
```

**item:select**: When a item or all items are selected. Array of selected items will be passed.

```html
<!-- template -->
<list-table
  @item:select="onItemSelect"
</list-table>


<!-- method -->
methods: {
  onItemSelect(ids) {
    this.selectedItems = ids;
  }
}
```
