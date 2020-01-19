# Shapla Select Field
A simple customized select field.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-select-field
```

# Usage
Add the component:

```js
import selectField from 'shapla-select-field';

export default {
  name: 'Hello',

  components: {
    selectField
  },

  data(){
    return {
      options:['Sayful Islam', 3, true, {label: 'Bangladesh', value: 'BD'}],
    }
  },
}

```

```html
<select-field
    v-model="option"
    :options="options"
    label="Choose a option"
    help-text="Help text goes here"
/>
```

### Props
| Property          | Type      | Required  | Default   | Description 
|-------------------|-----------|-----------|-----------|-------------------------------------------------
| `options`         | Array     | **yes**   | ``        | Array of value for select options.
| `label`           | String    | **yes**   | ``        | Input field label
| `value`           | String    | **no**    | ``        | Field value
| `labelKey`        | String    | **no**    | `label`   | If `options` contain object, then which key should show as label
| `valueKey`        | String    | **no**    | `value`   | If `options` contain object, then which key should show as value
| `clearable`       | Boolean   | **no**    | `true`    | If set `true`, clear icon will be shown when there is a value
| `autocomplete`    | String    | **no**    | ``        | Field autocomplete attribute
| `name`            | String    | **no**    | ``        | Field name attribute
| `id`              | String    | **no**    | ``        | Field id attribute
| `helpText`        | String    | **no**    | ``        | Field help text
| `validationText`  | String    | **no**    | ``        | Field validation text
| `hasError`        | Boolean   | **no**    | `false`   | If set `true`, field will show `validationText`
| `hasSuccess`      | Boolean   | **no**    | `false`   | If set `true`, field will show success status
| `disabled`        | Boolean   | **no**    | `false`   | If set `true`, field will be read only
| `required`        | Boolean   | **no**    | `false`   | If set `true`, field must be filled

## Listeners
The select component fires the following events:

**`change`**: When you choose a value

```html
<!-- template -->
<select-field @click="handleChangeEvent"/>


<!-- method -->
methods: {
  handleChangeEvent(value){
    // Handle input event
  }
}
```