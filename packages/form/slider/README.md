# Shapla Range Slider
A simple component for input slider for Vue 3

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-slider
```

# Usage

Add the component:

```js
import ShaplaRangeSlider from '@shapla/vue-slider';

export default {
  name: 'Hello',
	data(){
		return {
			number: 10,
		}
	},
	components: {
    ShaplaRangeSlider
	},
}

```

```html
<shapla-range-slider v-model="number" :default="20"/>
```

### Props for `columns`
| Property      | Type     | Required  | Default    | Description 
|---------------|----------|-----------|------------|-------------------------------------------------
| `modelValue`  | Number   | **no**    | `null`     | Value of the input
| `default`     | Number   | **no**    | `0`        | The default value of the input
| `min`         | Number   | **no**    | `0`        | Min value of input
| `max`         | Number   | **no**    | `100`      | Maximum value of input
| `step`        | Number   | **no**    | `1`        | Step of input slider
| `showReset`   | Boolean  | **no**    | `true`     | Set `true` to show reset to default value
| `showInput`   | Boolean  | **no**    | `true`     | Set `true` to show input field to change value

## Listeners
The input slider component fires the following events:

**`update:modelValue`**: When value is changed, it fires the event.

```html
<!-- template -->
<input-slider :value="20" :default="10" @update:modelValue="handleInput"></input-slider>


<!-- method -->
methods: {
  handleInput(newValue){
    // Handle input event
  }
}
```
