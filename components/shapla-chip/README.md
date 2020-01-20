# Shapla Chip
Chip component is a small, interactive element. Chips are commonly used for contacts, text, rules, icons, and photos.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-chip
```

# Usage
Add the component:

```js
import shaplaChip from 'shapla-chip';

export default {
  name: 'Hello',

  components: {
    shaplaChip
  },
  
  methods: {
    handleDeleteEvent(){
      // Handle click event
    }
  }
}

```

```html
<shapla-chip text="Sayful Islam" :deletable="true" @delete="handleDeleteEvent"></shapla-chip>
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