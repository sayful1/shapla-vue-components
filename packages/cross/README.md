# Shapla Cross

A versatile delete cross for Vue 3

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-cross
```

# Usage

with Sass:

### Styles

```js
import '@shapla/vue-cross/src/index.scss';
```

with CSS:

```js
import '@shapla/vue-cross/dist/style.css';
```

### Javascript Instantiation

```js
import ShaplaCross from '@shapla/vue-cross';

export default {
  name: 'Hello',

  components: {
    ShaplaCross
  },

  methods: {
    handleClick() {
      // Handle click event
    }
  }
}

```

```vue

<shapla-cross @click="handleClick"/>
```

### Props

| Property      | Type      | Required  | Default   | Description
|---------------|-----------|-----------|-----------|--------------------------------------------------------
| `size`        | String    | **no**    | `normal`  | Value can be `normal` or `small` or `medium` or `large`.
| `ariaLabel`   | String    | **no**    | `close`   | Value for html `aria-label` attribute

```vue

<shapla-cross size="large"/>
```