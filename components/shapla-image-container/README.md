# shapla-image-container

The image container to specify a precisely sized container so that your layout isn't broken because of image loading or image errors.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-image-container
```

# Usage
Add the component:

```js
import imageContainer from 'shapla-image-container';

export default {
  name: 'Hello',

  components: {
    imageContainer
  },
}

```

```html
<image-container container-width="32px" container-height="32px" is-rounded>
    <img src="https://via.placeholder.com/48x48">
</image-container>

<image-container :width-ratio="3" :height-ratio="4">
    <img src="https://via.placeholder.com/420x560">
</image-container>

<image-container :width-ratio="16" :height-ratio="9">
    <iframe width="640" height="360" src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0"
        frameborder="0" allowfullscreen></iframe>
</image-container>
```

### Props
| Property          | Type      | Required  | Default   | Description
|-------------------|-----------|-----------|-----------|---------------------------------------------
| `heightRatio`     | Number    | **no**    | `1`       | Image height ratio. You can also put image height
| `widthRatio`      | Number    | **no**    | `1`       | Image width ratio. You can also put image width
| `containerWidth`  | String    | **no**    | ``        | Width of the container.
| `containerHeight` | String    | **no**    | ``        | Height of the container.
| `isRounded`       | Boolean   | **no**    | `false`   | If set `true`, inside item will be rounded
