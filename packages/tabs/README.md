# Shapla Tabs

A simple responsive horizontal navigation tabs component based on Bulma Tabs for Vue 3

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-tabs
```

# Usage

### Styles

with Sass:

```js
import '@shapla/vue-tabs/src/index.scss';
```

with CSS:

```js
import '@shapla/vue-tabs/dist/style.css';
```

### Javascript Instantiation

```js
import {ShaplaTabs, ShaplaTab} from '@shapla/vue-tabs';

export default {
  name: 'Hello',

  components: {ShaplaTabs, ShaplaTab},
}

```

```html
<shapla-tabs fullwidth>
  <shapla-tab name="Tab 1" selected>
    Tab One Content
  </shapla-tab>
  <shapla-tab name="Tab 2">
    Tab Two Content
  </shapla-tab>
</shapla-tabs>
```

### Props for `ShaplaTabs`

| Property      | Type     | Required  | Default    | Description                                                       |
|---------------|----------|-----------|------------|-------------------------------------------------------------------|
| `alignment`   | String   | **no**    | `left`     | Possible value can be `left`, `center` or `right`.                |
| `size`        | String   | **no**    | `default`  | Possible value can be `default`, `small`, `medium` or `large`.    |
| `tabStyle`    | String   | **no**    | `default`  | Possible value can be `default`, `boxed`, `rounded` or `toggle`.  |
| `fullwidth`   | Boolean  | **no**    | `false`    | If set `true`, the tabs will take up available full width.        |

### Props for `ShaplaTab`

| Property      | Type      | Required  | Default   | Description                               |
|---------------|-----------|-----------|-----------|-------------------------------------------|
| `name`        | String    | **yes**   | `true`    | Tab title.                                |
| `selected`    | Boolean   | **no**    |  `false`  | Set true if you to keep open by default.  |
