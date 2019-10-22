# shapla-data-table-pagination
A simple pagination based on WordPress list table pagination specially for  data table pagination.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-data-table-pagination
```

# Usage
Add the component:

```js
import pagination from 'shapla-data-table-pagination';

export default {
  name: 'Hello',

  components: {
    pagination
  },
  
  methods: {
    paginate(){
      // Handle pagination event
    }
  }
}

```

```html
<pagination @pagination="paginate"></pagination>
```

### Props
| Property              | Type     | Required  | Default            | Description                                                                   |
|-----------------------|----------|-----------|--------------------|-------------------------------------------------------------------------------|
| `total_items`         | Number   | **Yes**   | `0`                | Total number of items.                                                        |
| `per_page`            | Number   | **Yes**   | `20`               | Number of items to show per page.                                             |
| `current_page`        | Number   | **Yes**   | `1`                | Current page number.                                                          |
| `size`                | String   | **No**    | `default`          | Pagination button size. Value can be `default`, `small`, `medium`, `large`    |
| `textName`            | String   | **No**    | `items`            | Plural name of item.                                                          |
| `textNameSingular`    | String   | **No**    | `item`             | Singular name of item.                                                        |
| `textCurrentPage`     | String   | **No**    | `Current Page`     | Screen reader text for current page.                                          |
| `textFirstPage`       | String   | **No**    | `First Page`       | Screen reader text for first page.                                            |
| `textPreviousPage`    | String   | **No**    | `Previous Page`    | Screen reader text for previous page.                                         |
| `textNextPage`        | String   | **No**    | `Next Page`        | Screen reader text for next page.                                             |
| `textLastPage`        | String   | **No**    | `Last Page`        | Screen reader text for last page.                                             |
| `textOf`              | String   | **No**    | `of`               | Screen reader text for 'of' text.                                             |

## Listeners
The pagination component fires the following events:

**`pagination`**: When any navigation icon is clicked, it fires the event and it gives current page number.

```html
<!-- template -->
<pagination @pagination="close"></pagination>


<!-- method -->
methods: {
  paginate(page){
    // Handle click event
  }
}
```