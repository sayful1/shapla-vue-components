# shapla-data-table-status
A simple status list component to show status of data table.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-data-table-status
```

# Usage
Add the component:

```js
import statusList from 'shapla-data-table-status';

export default {
  name: 'Hello',

  components: {
    statusList
  },
  methods: {
   handleClickEvent(status) {
   //this.$emit('change', status);
   }
}

}

```

```html
  <status-list :statuses="statuses"></status-list>

```

### Props
| Property      | Type      | Required  | Default   | Description                           |
|---------------|-----------|-----------|-----------|---------------------------------------|
| `type`        | String    | **no**    | `horizontal`|set `vertical` to see vertical design|
| `statuses`    | Array     | **no**    |    `[]`     |Pass an **Array** of **Objects**.|



```html
<!-- template -->
<status-list :statuses="statuses"></status-list>
<status-list :statuses="statuses" type="vertical"></status-list>

<!-- method -->
  methods: {
   handleClickEvent(status) {
   this.$emit('change', status);
   }
}

```


