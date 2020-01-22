# Shapla Side Navigation

A simple side overlay navigation. Normally to use to develop admin panel.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-side-navigation
```

# Usage
Add the component:

```js
import sideNavigation from 'shapla-side-navigation';

export default {
  name: 'Hello',

  components: {
    sideNavigation
  }
}

```

```html
<side-navigation :active="true"></side-navigation>
```

### Props
| Property      | Type      | Required  | Default   | Description                                       |
|---------------|-----------|-----------|-----------|---------------------------------------------------|
| `active`      | Boolean   | **no**    | `true`    | If set `true`, side navigation will be opened.    |
| `navWidth`    | String    | **no**    | `300px`   | Sidenav width in pixels.                          |
| `position`    | String    | **no**    | `left`    | Value can be `left` or `right`.                   |

## Listeners
The side navigation component fires the following events:

**`close`**: When outside area is clicked, it fires the event.

```html
<!-- template -->
<side-navigation @close="handleClose"></side-navigation>


<!-- method -->
methods: {
  handleClose(){
    // Handle close event
  }
}
```
