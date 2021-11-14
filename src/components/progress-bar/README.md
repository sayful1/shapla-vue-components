# Shapla Progress Bar
A custom progress bar featuring support for stacked bars, animated backgrounds, and text labels.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-progress-bar
```

# Usage
Add the component:

```js
import progressBar from 'shapla-progress-bar';

export default {
  name: 'Hello',

  components: {
    progressBar
  }
}

```

```html
<progress-bar :value="1" :max="10" :striped="true" :animated="true" size="small" theme="primary"/>
```

### Props
| Property      | Type     | Required  | Default    | Description
|---------------|----------|-----------|------------|---------------------------
| `value`       | Number   | **no**    | ``         | Current progress value
| `max`         | Number   | **no**    | `1`        | Max progress value
| `label`       | String   | **no**    | ``         | Label text
| `striped`     | Boolean  | **no**    | `false`    | Set `true` to display stripped design 
| `animated`    | Boolean  | **no**    | `false`    | Set `true` to display stripped animation
| `size`        | String   | **no**    | `default`  | Progress bar height. Value can be `tiny`, `small`, `medium`, `large`
| `theme`       | String   | **no**    | `default`  | Progress bar color theme. Value can be `primary`, `secondary`
