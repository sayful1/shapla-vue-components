# shapla-radio-buttons

A custom buttons group component that works like native radio.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-radio-buttons
```

# Usage

Add the component:

```js
import radioButtons from 'shapla-radio-buttons';

export default {
    name: 'Hello',

    components: {
        radioButtons
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
<radio-buttons :options="options" v-model="option"></radio-buttons>
```

### Props
| Property      | Type     | Required  | Default    | Description                                                       |
|---------------|----------|-----------|------------|-------------------------------------------------------------------|
| `value`   | String   | **no**    | `left`     | Possible value can be `left`, `center` or `right`.                |
| `options`        | String   | **no**    | `default`  | Possible value can be `default`, `small`, `medium` or `large`.    |
