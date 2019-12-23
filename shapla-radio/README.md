# shapla-radio

A custom radio vue component that works like native radio component.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-radio
```

# Usage

Add the component:

```js
import shaplaRadio from 'shapla-radio';

export default {
    name: 'Hello',

    components: {
        shaplaRadio
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
<shapla-radio :options="options" v-model="option"></shapla-radio>
```

### Props
| Property  | Type     | Required  | Default    | Description
|-----------|----------|-----------|------------|-------------
| `label`   | String   | **no**    | ``         | Radio label
| `value`   | String   | **no**    | ``         | Radio value
