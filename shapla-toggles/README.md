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
<toggle name="Toggle One" :selected="true" :boxedMode="false" :show-divider="false">
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
| Property      | Type      | Required  | Default   | Description                                           |
|---------------|-----------|-----------|-----------|-------------------------------------------------------|
| `name`        | String    | **yes**   | `true`    | Toggle input name                                     |
| `selected`    | Boolean   | **no**    |  `false`  | Defines whether the toggle input is selected or not   |
| `boxedMode`   | Boolean   | **no**    |  `true`   | Set false to remove box                               |
| `iconPosition`| String    | **no**    |  `left`   | Set `right` to see icon position                      |
| `showDivider` | Boolean   | **no**    |  `true`   | Set false to see border                               |


### toggles data object

| Property      | Type      | Required  | Default   | Description                                                             |
|---------------|-----------|-----------|-----------|-------------------------------------------------------------------------|
| `accordion`   | Boolean   | no        | `true`    | Set false to set multiple accordion at same time.                                                      |


```html
<!-- template -->
<toggle name="accordion" :accordion="false">
<!-- template -->
</toggle> 




```


