# Shapla Switch
A custom switch for VueJS that exactly work same way as native checkbox

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-switch
```

# Usage
Add the component:

```js
import shaplaSwitch from 'shapla-switch';

export default {
  name: 'Hello',

  components: {
    shaplaSwitch
  },

  data(){
    return {
  	    singleSwitch:false
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

**`change`**: When switch is clicked, it fires the event.

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
