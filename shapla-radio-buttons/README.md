# shapla-tabs

[![npm](https://img.shields.io/npm/v/shapla-tabs.svg) ![npm](https://img.shields.io/npm/dm/shapla-tabs.svg)](https://www.npmjs.com/package/shapla-tabs)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A simple responsive horizontal navigation tabs component based on Bulma Tabs for Vue.js

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-tabs
```

# Usage

Add the component:

```js
import {tabs,tab} from 'shapla-tabs';

export default {
  name: 'Hello',

  components: {
    tabs,
    tab
  },
}

```

```html
<tabs fullwidth>
    <tab name="Tab 1" selected>
        Tab One Content
    </tab>
    <tab name="Tab 2">
        Tab Two Content
    </tab>
</tabs>
```

### Props
| Property      | Type     | Required  | Default    | Description                                                       |
|---------------|----------|-----------|------------|-------------------------------------------------------------------|
| `alignment`   | String   | **no**    | `left`     | Possible value can be `left`, `center` or `right`.                |
| `size`        | String   | **no**    | `default`  | Possible value can be `default`, `small`, `medium` or `large`.    |
| `tabStyle`    | String   | **no**    | `default`  | Possible value can be `default`, `boxed`, `rounded` or `toggle`.  |
| `fullwidth`   | Boolean  | **no**    | `false`    | If set `true`, the tabs will take up available full width.        |
