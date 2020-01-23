# shapla-columns
A simple way to build responsive columns for Vue.js

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-columns
```

# Usage

Add the component:

```js
import {columns, column} from 'shapla-columns';

export default {
  name: 'Hello',

  components: {
    columns,
    column
  },
}

```

```html
<columns multiline centered>
    <column>Column 1</column>
    <column :tablet="4" :desktop="3">Column 2</column>
    <column>Column 3</column>
    <column>Column 4</column>
</columns>
```

### Props for `columns`
| Property      | Type      | Required  | Default   | Description                                                                                                                                                                                                                    |
|---------------|-----------|-----------|-----------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `multiline`   | Boolean   | **no**    | `false`   | Whenever you want to start a new line, you can also add the `multiline` property and add more column elements than would fit in a single row                                                                                   |
| `centered`    | Boolean   | **no**    | `false`   | For centering columns, you can add the `centered` property                                                                                                                                                                     |
| `vcentered`   | Boolean   | **no**    | `false`   | To align your columns vertically, add the `vcentered` property to the columns container.                                                                                                                                       |
| `gapless`     | Boolean   | **no**    | `false`   | There is 1.5rem gap between columns by default. If you want to remove the space between the columns, add the `gapless` property on the columns container                                                                       |
| `mobile`      | Boolean   | **no**    | `false`   | By default, columns are only activated from tablet onwards. This means columns are stacked on top of each other on mobile. If you want columns to work on mobile too, just add the `mobile` property on the columns container. |
| `desktop`     | Boolean   | **no**    | `false`   | If you only want columns on desktop upwards, just use the `desktop` property on the columns container. |


### Props for `column`
If you want to change the size of a single column, you can use one of the following props
Each props can take value from 1 to 12 as it 12 columns grid system.

| Property      | Type     | Required  | Default  | Description                                         |
|---------------|----------|-----------|----------|-----------------------------------------------------|
| `mobile`      | Number   | **no**    | `null`   | When screen size less than 769px.                   |
| `tablet`      | Number   | **no**    | `null`   | When screen size (greater than/equal to) 769px.     |
| `desktop`     | Number   | **no**    | `null`   | When screen size (greater than/equal to) 1088px.    |
| `widescreen`  | Number   | **no**    | `null`   | When screen size (greater than/equal to) 1280px.    |
| `fullhd`      | Number   | **no**    | `null`   | When screen size (greater than/equal to) 1472px.    |
