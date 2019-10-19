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
import statusList from 'shapla-toggles';

export default {
  name: 'Hello',

components: {Toggle, Toggles}
}

```

```html
      <toggle name="Toggle One" :selected="true">
                   <!-- content -->
      </toggle>
      <toggle name="Toggle Two">
       <!-- content -->
                <toggle name="Nested Toggle">
           <!-- content -->
                </toggle>
       </toggle>

```

### Props
| Property      | Type      | Required  | Default   | Description                           |
|---------------|-----------|-----------|-----------|---------------------------------------|
| `name`        | String    | **yes**   | `true`    |                                    |
| `selected`    | Boolean   | **no**    |  `false`  |                                    |
| `boxedMode`   | Boolean   | **no**    |  `true`   |                                    |
| `iconPosition`| String    | **no**    |  `left`   |                                    |
| `showDivider` | Boolean   | **no**    |  `true`   |                                    |



```html
<!-- template -->
 <toggle name="Toggle right" :selected="true" iconPosition="right">
 <!-- content -->
</toggle>

```


