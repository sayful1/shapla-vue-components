# Shapla Toggles

A simple accordion/toggle component for Vue 3

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-toggles
```

# Usage

Add the component:

```js
import {ShaplaToggles, ShaplaToggle} from '@shapla/vue-toggles';

export default {
  name: 'Hello',
  components: {ShaplaToggles, ShaplaToggle}
}

```

```html

<shapla-toggles>
  <shapla-toggle name="Toggle One" :selected="true">
    <!-- content -->
  </shapla-toggle>
  <shapla-toggle name="Toggle Two">
    <!-- content -->
  </shapla-toggle>
</shapla-toggles>
```

### Props for `ShaplaToggles`

| Property      | Type      | Required  | Default   | Description                                                                                        |
|---------------|-----------|-----------|-----------|----------------------------------------------------------------------------------------------------|
| `accordion`   | Boolean   | **no**    |  `true`   | If you set `false`. All toggle components can be opened. Otherwise opening one will close another. |
| `iconPosition`| String    | **no**    |  `left`   | Value can be `left` or `right`.                                                                    |
| `boxedMode`   | Boolean   | **no**    |  `true`   | Set `false` if you don't want border on all side.                                                  |
| `showDivider` | Boolean   | **no**    |  `true`   | Only works when `boxedMode` is `false`. Remove all borders.                                        |

### Props for `ShaplaToggle`

| Property      | Type      | Required  | Default   | Description                               |
|---------------|-----------|-----------|-----------|-------------------------------------------|
| `name`        | String    | **yes**   | `true`    | Toggle title.                             |
| `subtext`     | String    | **yes**   | `true`    | Toggle subtitle.                          |
| `selected`    | Boolean   | **no**    |  `false`  | Set true if you to keep open by default.  |

