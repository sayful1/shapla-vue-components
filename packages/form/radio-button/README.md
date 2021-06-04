# Shapla Radio Button

A custom buttons group component that works like native radio.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-radio-button
```

# Usage

Add the component:

```js
import ShaplaRadioButton from '@shapla/vue-radio-button';

export default {
  name: 'Hello',

  components: {
    ShaplaRadioButton
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

<shapla-radio-button v-for="_option in options" :key="_option.value" :value="_option.value" v-model="option">
  {{_option.label}}
</shapla-radio-button>
```

### Props

| Property  | Type     | Required  | Default    | Description
|-----------|----------|-----------|------------|-------------
| `label`   | String   | **no**    | ``         | Radio label
| `value`   | String   | **no**    | ``         | Radio value
