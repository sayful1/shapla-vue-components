# Shapla TextField

A simple customized input text field.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-input
```

# Usage

### Styles

with Sass:

```js
import '@shapla/vue-input/src/index.scss';
```

with CSS:

```js
import '@shapla/vue-input/dist/style.css';
```

### Javascript Instantiation

```js
import ShaplaInput from '@shapla/vue-input';

export default {
  name: 'Hello',

  components: {
    ShaplaInput
  }
}

```

```vue
<shapla-input
  label="Email"
  help-text="Write your valid email address"
  validation-text="Please enter a valid email address"
  :has-error="true"
/>
```

### Props

| Property          | Type      | Required  | Default   | Description
|-------------------|-----------|-----------|-----------|-------------------------------------------------
| `type`            | String    | **no**    | `text`    | Input field type. Supports all types that support for normal input field
| `label`           | String    | **yes**   | ``        | Input field label
| `modelValue`      | String    | **no**    | ``        | Field value
| `autocomplete`    | String    | **no**    | ``        | Field autocomplete attribute
| `name`            | String    | **no**    | ``        | Field name attribute
| `id`              | String    | **no**    | ``        | Field id attribute
| `helpText`        | String    | **no**    | ``        | Field help text
| `validationText`  | String    | **no**    | ``        | Field validation text
| `hasError`        | Boolean   | **no**    | `false`   | If set `true`, field will show `validationText`
| `hasSuccess`      | Boolean   | **no**    | `false`   | If set `true`, field will show success status
| `disabled`        | Boolean   | **no**    | `false`   | If set `true`, field will be read only
| `required`        | Boolean   | **no**    | `false`   | If set `true`, field must be filled
| `readonly`        | Boolean   | **no**    | `false`   | If set `true`, User cannot modify field value but data can be submit
| `rows`            | Number    | **no**    | ``        | Set number of rows for textarea field
| `dir`             | String    | **no**    | `ltr`     | Set direction. Value can be `ltr` or `rtl` or `auto`

## Listeners

The input component fires the following events:

**`update:modelValue`**: When you input anything on field

```html
<!-- template -->
<text-field @update:modelValue="handleInputEvent"/>


<!-- method -->
methods: {
handleInputEvent(value){
// Handle input event
}
}
```