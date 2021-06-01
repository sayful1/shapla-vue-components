# Shapla Chip
Chip component is a small, interactive element. Chips are commonly used for contacts, text, rules, icons, and photos.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-chip
```

# Usage

### Styles

with SCSS:

```js
import '@shapla/vue-chip/src/index.scss';
```

with CSS:

```js
import '@shapla/vue-chip/dist/style.css';
```

### Javascript Instantiation

```js
import ShaplaChip from '@shapla/vue-chip';

export default {
  name: 'Hello',

  components: {
    ShaplaChip
  }
}

```

```html
<shapla-chip text="Sayful Islam" :deletable="true" @delete="handleDeleteEvent"/>
```

### Props
| Property      | Type      | Required  | Default   | Description
|---------------|-----------|-----------|-----------|----------------------------------------
| `text`        | String    | **no**    | ``        | Chip text
| `image_src`   | String    | **no**    | ``        | Chip contact image url
| `deletable`   | Boolean   | **no**    | `false`   | If set `true`, Delete icon will appear
| `small`       | Boolean   | **no**    | `false`   | If set `true`, a small chip with display
| `height`      | String    | **no**    | `32px`    | Custom height of chip

## Listeners
The chip component fires the following events:

**`delete`**: When delete icon is clicked, it fires the event.

```html
<!-- template -->
<shapla-chip @delete="handleDeleteEvent"></shapla-chip>


<!-- method -->
methods: {
    handleDeleteEvent(){
    // Handle delete event
    }
}
```