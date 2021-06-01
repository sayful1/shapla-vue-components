# Shapla Data Table

A simple responsive data table component for Vue 3

Supports:

* Row Actions with Slot Support
* Custom Column Slot
* Sorting

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-table
```

# Usage

### Styles

with Sass:

```js
import '@shapla/vue-table/src/index.scss';
```

with CSS:

```js
import '@shapla/vue-table/dist/style.css';
```

*Note: `@shapla/vue-table` component has dependency over `@shapla/vue-checkbox`, also remember to include that style*

### Javascript Instantiation

```js
import ShaplaTable from '@shapla/vue-table';

export default {
  name: 'Hello',

  components: {
    ShaplaTable
  },

  data() {
    return {
      selectedItems: [],
      columns: [
        {key: 'title', label: 'Title', sortable: true},
        {key: 'author', label: 'Author'}
      ],
      actions: [
        {key: 'edit', label: 'Edit'},
        {key: 'trash', label: 'Delete'}
      ],
      items: [
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

```vue

<shapla-table
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
</shapla-table>
```

### Props

| Property        | Type    | Required | Default            | Description                                                             |
|-----------------|---------|----------|--------------------|-------------------------------------------------------------------------|
| `items`         | Array   | **yes**  | `null`             | Pass an **Array** of **Objects** with key:value format.                 |
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

**`click:action`**: When a row action is clicked, it fires the event. The action name and the current row will be passed.

```html
<!-- template -->
<data-table @click:action="onActionClick">
</data-table>


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

**click:sort**: When a sorted column is clicked

```html
<!-- template -->
<data-table @click:sort="sortCallback">
</data-table>

<!-- method -->
methods: {
  sortCallback(column, order) {
    this.sortBy = column;
    this.sortOrder = order;

    // this.loadItems(column, order);
  }
}
```

**select:item**: When an item or all items are selected. Array of selected items will be passed.

```html
<!-- template -->
<data-table @select:item="onItemSelect">
</data-table>

<!-- method -->
methods: {
  onItemSelect(ids) {
    this.selectedItems = ids;
  }
}
```

### Extra components
<details>
<summary>Pagination</summary>


```js
import {Pagination} from '@shapla/vue-table';

export default {
  components: {
    Pagination
  },
  methods: {
    paginate(nextPage){
      // Handle pagination event
    }
  }
}
```

```html
<pagination @paginate="paginate"></pagination>
```

#### Props
| Property              | Type     | Required  | Default            | Description                                                                   |
|-----------------------|----------|-----------|--------------------|-------------------------------------------------------------------------------|
| `totalItems`          | Number   | **Yes**   | `0`                | Total number of items.                                                        |
| `perPage`             | Number   | **Yes**   | `20`               | Number of items to show per page.                                             |
| `currentPage`         | Number   | **Yes**   | `1`                | Current page number.                                                          |
| `size`                | String   | **No**    | `default`          | Pagination button size. Value can be `default`, `small`, `medium`, `large`    |
| `textName`            | String   | **No**    | `items`            | Plural name of item.                                                          |
| `textNameSingular`    | String   | **No**    | `item`             | Singular name of item.                                                        |
| `textCurrentPage`     | String   | **No**    | `Current Page`     | Screen reader text for current page.                                          |
| `textFirstPage`       | String   | **No**    | `First Page`       | Screen reader text for first page.                                            |
| `textPreviousPage`    | String   | **No**    | `Previous Page`    | Screen reader text for previous page.                                         |
| `textNextPage`        | String   | **No**    | `Next Page`        | Screen reader text for next page.                                             |
| `textLastPage`        | String   | **No**    | `Last Page`        | Screen reader text for last page.                                             |
| `textOf`              | String   | **No**    | `of`               | Screen reader text for 'of' text.                                             |

#### Listeners
The pagination component fires the following events:

**`paginate`**: When any navigation icon is clicked, it fires the event and it gives current page number.

```html
<!-- template -->
<pagination @paginate="paginate"></pagination>


<!-- method -->
methods: {
  paginate(NextPage){
    // Handle click event
  }
}
```

</details>

<details>
<summary>Status List</summary>

```js
import {StatusList} from '@shapla/vue-table';

export default {
  name: 'Hello',

  components: {
    StatusList
  }
}

```

```vue
  <status-list :statuses="statuses"/>
```

#### Props

| Property      | Type      | Required  | Default       | Description                                                   |
|---------------|-----------|-----------|---------------|---------------------------------------------------------------|
| `type`        | String    | **no**    | `horizontal`  |set `vertical` to see vertical design                          |
| `statuses`    | Array     | **no**    |    `[]`       |Pass an **Array** of **Objects**. See _statuses data object_   |


#### statuses data object

| Property      | Type      | Required  | Default   | Description                                   |
|---------------|-----------|-----------|-----------|-----------------------------------------------|
| `key`         | String    | **yes**   | ``        | Status key.                                   |
| `label`       | String    | **yes**   | ``        | Status label                                  |
| `active`      | Boolean   | **yes**   | ``        | If set `true`, status will be highlighted.    |
| `count`       | Number    | **yes**   | ``        | How many items has for current status.        |

</details>
