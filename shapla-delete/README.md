# shapla-delete
A simple circle with a cross based on Bulma delete element for Vue

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-delete
```

# Usage
Add the component:

```js
import deleteIcon from 'shapla-delete';

export default {
  name: 'Hello',

  components: {
    deleteIcon
  },
  
  methods: {
    close(){
      // Handle click event
    }
  }
}

```

```html
<delete-icon @click="close"></delete-icon>
```

### Props
| Property      | Type      | Required  | Default   | Description                           |
|---------------|-----------|-----------|-----------|---------------------------------------|
| `small`       | Boolean   | **no**    | `false`   | If set `true`, icon size will be 16px |
| `medium`      | Boolean   | **no**    | `false`   | If set `true`, icon size will be 24px |
| `large`       | Boolean   | **no**    | `false`   | If set `true`, icon size will be 32px |

## Listeners
The modal component fires the following events:

**`click`**: When icon is clicked, it fires the event.

```html
<!-- template -->
<delete-icon @click="close"></delete-icon>


<!-- method -->
methods: {
  close(){
    // Handle click event
  }
}
```