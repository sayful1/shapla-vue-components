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
| Property          | Type      | Required  | Default       | Description                                                       |
|-------------------|-----------|-----------|---------------|-------------------------------------------------------------------|
| `active`          | Boolean   | **no**    | `true`        | Spinner will be shown only when `active` value is `true`          |
| `single`          | Boolean   | **no**    | `false`       | If set `true`, only primary color will be shown for all layers.   |
| `showText`        | Boolean   | **no**    | `false`       | If set `true`, `Loading...` text will be show beside spinner.     |
| `loadingText`     | String    | **no**    | `Loading...`  | Loading text                                                      |
| `position`        | String    | **no**    | `fixed`       | Value can be `fixed`, `absolute`, or `static`.                    |
| `size`            | String    | **no**    | `default`     | Value can be `default`, `small`, or `medium` or `large`.          |
