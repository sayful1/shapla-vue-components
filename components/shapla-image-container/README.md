# shapla-icon-container

The icon-container component is a container for any type of icon font. Because the icons can take a few seconds to load, and because you want control over the space the icons will take, you can use the icon class as a reliable square container that will prevent the page to "jump" on page load.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-icon-container
```

# Usage
Add the component:

```js
import iconContainer from 'shapla-icon-container';

export default {
  name: 'Hello',

  components: {
    iconContainer
  },
}

```

```html
<icon-container size="medium"><i class="fas fa-fw"></i></icon-container>
```

### Props
| Property      | Type      | Required  | Default   | Description
|---------------|-----------|-----------|-----------|---------------------------------------------
| `size`        | String    | **no**    | ``        | Value can be `small` or `medium` or `large`
| `hoverable`   | Boolean   | **no**    | `false`   | If set `true`, transparent background color will be added on hover
