# Shapla Button
A simple button, in different colors, sizes, and states

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-button
```

# Usage
Add the component:

```js
import shaplaButton from 'shapla-button';

export default {
  name: 'Hello',

  components: {
    shaplaButton
  },
  
  methods: {
    handleClick(){
      // Handle click event
    }
  }
}

```

```html
<shapla-button @click="handleClick"></shapla-button>
```

### Props
| Property      | Type      | Required  | Default   | Description                                               |
|---------------|-----------|-----------|-----------|-----------------------------------------------------------|
| `theme`       | String    | **no**    | `default` | Value can be `default` or `primary` or `secondary`.       |
| `size`        | String    | **no**    | `normal`  | Value can be `normal` or `small` or `medium` or `large`.  |
| `fullwidth`   | Boolean   | **no**    | `false`   | If set `true`, button will take full width.               |
| `disabled`    | Boolean   | **no**    | `false`   | If set `true`, disabled attribute will be added.          |

## Listeners
The button component fires the following events:

**`click`**: When button is clicked, it fires the event.

```html
<!-- template -->
<shapla-button @click="handleClick"></shapla-button>


<!-- method -->
methods: {
  handleClick(){
    // Handle click event
  }
}
```