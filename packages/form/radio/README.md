# Shapla Radio

A custom radio component that works like native radio component for Vue 3.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-radio
```

# Usage

### Styles

with Sass:

```js
import '@shapla/vue-radio/src/index.scss';
```

with CSS:

```js
import '@shapla/vue-radio/dist/style.css';
```

### Javascript Instantiation

```js
import ShaplaRadio from '@shapla/vue-radio';

export default {
  name: 'Hello',

  components: {
    ShaplaRadio
  },
  data() {
    return {
      option: 'one',
      options: [
        {label: 'One', value: 'one'},
        {label: 'Two', value: 'two'},
        {label: 'Three', value: 'three'},
      ],
    }
  }
}

```

```html

<shapla-radio v-for="_option in options" :key="_option.value" :value="_option.value" v-model="option">
  {{_option.label}}
</shapla-radio>
```

### Props

| Property  | Type     | Required  | Default    | Description
|-----------|----------|-----------|------------|-------------
| `label`   | String   | **no**    | ``         | Radio label
| `value`   | String   | **no**    | ``         | Radio value
