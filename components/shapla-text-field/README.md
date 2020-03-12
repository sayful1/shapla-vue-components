# Shapla TextField
A simple customized input text field.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-text-field
```

# Usage
Add the component:

```js
import textField from 'shapla-text-field';

export default {
  name: 'Hello',

  components: {
    textField
  }
}

```

```html
<text-field
    label="Email"
    help-text="Write your valid email address"
    validation-text="Please enter a valid email address"
    :has-error="true"
/>
```

### Props
| Property          | Type      | Required  | Default   | Description 
|-------------------|-----------|-----------|-----------|-------------------------------------------------
| `type`            | String    | **no**    | `text`    | Input field type
| `label`           | String    | **yes**   | ``        | Input field label
| `value`           | String    | **no**    | ``        | Field value
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

## Listeners
The button component fires the following events:

**`input`**: When you input anything on field

```html
<!-- template -->
<text-field @click="handleInputEvent"/>


<!-- method -->
methods: {
  handleInputEvent(value){
    // Handle input event
  }
}
```