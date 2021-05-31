# Shapla Checkbox

A custom checkbox for Vue 3 that exactly work same way as native checkbox

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-checkbox
```

# Usage
### Styles

with SCSS:

```js
import '@shapla/vue-checkbox/src/index.scss';
```

with CSS:

```js
import '@shapla/vue-checkbox/dist/style.css';
```

### Javascript Instantiation

```js
import ShaplaCheckbox from '@shapla/vue-checkbox';

export default {
  name: 'Hello',

  components: {
    ShaplaCheckbox
  },

  data(){
    return {
  	    singleCheckbox:false
  	}
  }
}

```

```html
<shapla-checkbox v-model="singleCheckbox">Label goes here.</shapla-checkbox>
```

### Props
| Property      | Type      | Required  | Default     | Description
|---------------|-----------|-----------|-------------|-----------------------------------------------------------
| `label`       | String    | **no**    | ``          | Checkbox label
| `value`       | String    | **no**    | `on`        | The default value for the checkbox
| `trueValue`   | String    | **no**    | `true`      | The value when user checked the checkbox
| `falseValue`  | String    | **no**    | `false`     | The value when user unchecked the checkbox
| `disabled`    | Boolean   | **no**    | `false`     | If set `true`, Checkbox will be disabled to check.
| `checked`     | Boolean   | **no**    | `undefined` | If set `true`, Checkbox will be checked.
