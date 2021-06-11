# Shapla Switch

Switch is an enhanced version of the standard HTML input checkbox element for Vue 3

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-switch
```

# Usage

Add the component:

```js
import ShaplaSwitch from '@shapla/vue-switch';

export default {
  name: 'Hello',

  components: {
    ShaplaSwitch
  },

  data() {
    return {
      singleSwitch: false
    }
  }
}

```

```html

<shapla-switch v-model="singleSwitch">Enable this</shapla-switch>
```

### Props

| Property      | Type      | Required  | Default   | Description
|---------------|-----------|-----------|-----------|-----------------------------------------------------------
| `label`       | String    | **no**    | ``        | Switch label
| `value`       | String    | **no**    | `on`      | The default value for the switch
| `trueValue`   | String    | **no**    | `true`    | The value when user checked the switch
| `falseValue`  | String    | **no**    | `false`   | The value when user unchecked the switch
| `disabled`    | Boolean   | **no**    | `false`   | If set `true`, box-shadow will be added around button.
| `readonly`    | Boolean   | **no**    | `false`   | If set `true`, you cannot change the value.

## Listeners

The switch component fires the following events:

**`update:modelValue`**: When switch is clicked, it fires the event.

```html
<!-- template -->
<shapla-button @update:modelValue="handleChange"></shapla-button>


<!-- method -->
methods: {
handleChange(newValue){
// Handle change event
}
}
```
