# shapla-toggles
A simple toggle component.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-toggles
```

# Usage
Add the component:

```js
import {toggles,toggle} from 'shapla-toggles';

export default {
  name: 'Hello',

components: {toggles,toggle}
}

```

```html
    <toggles>
        <toggle name="Toggle One" :selected="true">
            <!-- content -->
        </toggle>
        <toggle name="Toggle Two">
            <!-- content -->
        </toggle>
    </toggles>
```

### Props for `toggles`
| Property      | Type      | Required  | Default   | Description                                                                                        |
|---------------|-----------|-----------|-----------|----------------------------------------------------------------------------------------------------|
| `accordion`   | Boolean   | **no**    |  `true`   | If you set `false`. All toggle components can be opened. Otherwise opening one will close another. |
| `iconPosition`| String    | **no**    |  `left`   | Value can be `left` or `right`.                                                                    |
| `boxedMode`   | Boolean   | **no**    |  `true`   | Set `false` if you don't want border on all side.                                                  |
| `showDivider` | Boolean   | **no**    |  `true`   | Only works when `boxedMode` is `false`. Remove all borders.                                        |


### Props for `toggle`
| Property      | Type      | Required  | Default   | Description                               |
|---------------|-----------|-----------|-----------|-------------------------------------------|
| `name`        | String    | **yes**   | `true`    | Toggle title.                             |
| `subtext`     | String    | **yes**   | `true`    | Toggle subtitle.                          |
| `selected`    | Boolean   | **no**    |  `false`  | Set true if you to keep open by default.  |
