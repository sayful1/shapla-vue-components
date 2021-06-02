# Shapla Icon

The icon-container component is a container for any type of icon font. Because the icons can take a few seconds to load,
and because you want control over the space the icons will take, you can use the icon class 
as a reliable square container that will prevent the page to "jump" on page load.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-icon
```

# Usage

### Styles

with Sass:

```js
import '@shapla/vue-icon/src/index.scss';
```

with CSS:

```js
import '@shapla/vue-icon/dist/style.css';
```

### Javascript Instantiation

```js
import ShaplaIcon from '@shapla/vue-icon';

export default {
  name: 'Hello',

  components: {
    ShaplaIcon
  },
}

```

```html
<shapla-icon size="medium"><i class="fas fa-fw"></i></shapla-icon>
```

### Props
| Property      | Type      | Required  | Default   | Description
|---------------|-----------|-----------|-----------|---------------------------------------------
| `size`        | String    | **no**    | ``        | Value can be `small` or `medium` or `large`
| `hoverable`   | Boolean   | **no**    | `false`   | If set `true`, transparent background color will be added on hover
