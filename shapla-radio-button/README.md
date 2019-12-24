# shapla-radio-button

A custom buttons group component that works like native radio.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-radio-button
```

# Usage

Add the component:

```js
import radioButton from 'shapla-radio-button';

export default {
    name: 'Hello',

    components: {
        radioButton
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
<radio-button v-for="_option in options" :key="_option.value" :value="_option.value" v-model="option">{{_option.label}}</radio-button>
```

### Props
| Property  | Type     | Required  | Default    | Description
|-----------|----------|-----------|------------|-------------
| `label`   | String   | **no**    | ``         | Radio label
| `value`   | String   | **no**    | ``         | Radio value
