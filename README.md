# Shapla Vue Components

A collection of reusable components for Vue 3.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

**To install all components, run the following command in terminal**

```
npm install --save @shapla/vue-components
```

# Usage

For example, to use button and progress bar components:

```js
import {ShaplaButton} from '@shapla/vue-components';
import {ShaplaProgress} from '@shapla/vue-components';

export default {
  name: 'Hello',

  components: {
    ShaplaButton,
    ShaplaProgress
  }
}

```

```vue

<shapla-progress :value="1" :max="10" :striped="true" :animated="true" size="small" theme="primary"/>
<shapla-button @click="handleClick">button text</shapla-button>
```

# Components
