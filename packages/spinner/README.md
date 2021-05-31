# Shapla Spinner

A loading spinner component for Vue 3

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-spinner
```

# Usage

### Styles

with Sass:
```js
import '@shapla/vue-spinner/src/index.scss';
```

with CSS:
```js
import '@shapla/vue-spinner/dist/style.css';
```

### Javascript Instantiation

```js
import ShaplaSpinner from '@shapla/vue-spinner';

export default {
  name: 'Hello',

  components: {
    ShaplaSpinner
  },

  data () {
    return {
        active:true,
    };
  }
}

```

```vue
<shapla-spinner :active="true" :single="false" :show-text="false" position="static"/>
```

### Props
| Property          | Type      | Required  | Default       | Description                                                       |
|-------------------|-----------|-----------|---------------|-------------------------------------------------------------------|
| `active`          | Boolean   | **no**    | `true`        | Spinner will be shown only when `active` value is `true`          |
| `single`          | Boolean   | **no**    | `false`       | If set `true`, only primary color will be shown for all layers.   |
| `showText`        | Boolean   | **no**    | `false`       | If set `true`, `Loading...` text will be show beside spinner.     |
| `loadingText`     | String    | **no**    | `Loading...`  | Loading text                                                      |
| `position`        | String    | **no**    | `fixed`       | Value can be `fixed`, `absolute`, or `static`.                    |
| `size`            | String    | **no**    | `default`     | Value can be `default`, `small`, or `medium` or `large`.          |
