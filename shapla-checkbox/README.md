# Shapla Checkbox
A custom checkbox for VueJS that exactly work same way as native checkbox

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-checkbox
```

# Usage
Add the component:

```js
import shaplaCheckbox from 'shapla-checkbox';

export default {
  name: 'Hello',

  components: {
    shaplaCheckbox
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
| Property      | Type      | Required  | Default   | Description
|---------------|-----------|-----------|-----------|-----------------------------------------------------------
| `label`       | String    | **no**    | ``        | Checkbox label
| `value`       | String    | **no**    | `on`      | The default value for the checkbox
| `trueValue`   | String    | **no**    | `true`    | The value when user checked the checkbox
| `falseValue`  | String    | **no**    | `false`   | The value when user unchecked the checkbox
| `disabled`    | Boolean   | **no**    | `false`   | If set `true`, box-shadow will be added around button.

## Listeners
The button component fires the following events:

**`click`**: When checkbox is clicked, it fires the event.

```html
<!-- template -->
<shapla-button @change="handleChange"></shapla-button>


<!-- method -->
methods: {
  handleChange(newValue){
    // Handle change event
  }
}
```
