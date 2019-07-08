# shapla-spinner

[![npm](https://img.shields.io/npm/v/shapla-spinner.svg) ![npm](https://img.shields.io/npm/dm/shapla-spinner.svg)](https://www.npmjs.com/package/shapla-spinner)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A loading spinner component based on Material Design Lite Spinner for Vue.js

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-spinner
```

# Usage

Add the component:

```js
import spinner from 'shapla-spinner';

export default {
  name: 'Hello',

  components: {
    spinner
  },

  data () {
    return {
        active:true,
    };
  }
}

```

```html
<spinner :active="true" :single="false" :show-text="false" position="static"></spinner>
```

### Props
| Property          | Type      | Required  | Default   | Description                                                       |
|-------------------|-----------|-----------|-----------|-------------------------------------------------------------------|
| `active`          | Boolean   | **no**    | `true`    | Spinner will be shown only when `active` value is `true`          |
| `single`          | Boolean   | **no**    | `false`   | If set `true`, only primary color will be shown for all layers.   |
| `showText`        | Boolean   | **no**    | `false`   | If set `true`, `Loading...` text will be show beside spinner.     |
| `position`        | String    | **no**    | `fixed`   | Value can be `fixed`, `absolute`, or `static`.                    |
| `primaryColor`    | String    | **no**    | `#3F51B5` | You can use any hex/rgb/rgba color code.                          |
| `layer1Color`     | String    | **no**    | `#42A5F5` | You can use any hex/rgb/rgba color code.                          |
| `layer2Color`     | String    | **no**    | `#f44336` | You can use any hex/rgb/rgba color code.                          |
| `layer3Color`     | String    | **no**    | `#FDD835` | You can use any hex/rgb/rgba color code.                          |
| `layer4Color`     | String    | **no**    | `#4CAF50` | You can use any hex/rgb/rgba color code.                          |
