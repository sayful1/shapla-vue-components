# shapla-star-rating

A simple, highly customisable star rating component for Vue

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-star-rating
```

# Usage

Add the component:

```js
import StarRating from 'shapla-star-rating';

export default {
  name: 'Hello',

  components: {
    StarRating
  },
  data(){
    return {
      rating:4,
      staticRating:4.6,
    }    
  }
}

```

```html
<star-rating v-model="rating"></star-rating>

<star-rating v-model="staticRating" :is-static="true"></star-rating>
```

### Props
| Property       | Type     | Required  | Default           | Description                                           |
|----------------|----------|-----------|-------------------|-------------------------------------------------------|
| `value`        | Number   | **yes**   | ``                | The initial rating                                    |
| `is-static`    | Boolean  | **no**    | `false`           | If set `true`, the rating cannot be edited.           |
| `color`        | String   | **no**    | ``                | The color of the non-highlighted portion of a star.   |
| `active-color` | String   | **no**    | ``                | The color of the highlighted portion of a star.       |
| `ratings`      | Array    | **no**    | `[1, 2, 3, 4, 5]` | List of rating value                                  |
