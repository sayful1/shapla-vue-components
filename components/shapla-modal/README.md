# shapla-modal

[![npm](https://img.shields.io/npm/v/shapla-modal.svg) ![npm](https://img.shields.io/npm/dm/shapla-modal.svg)](https://www.npmjs.com/package/shapla-modal)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A classic modal overlay for Vue.js, in which you can include any content you want.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-modal
```

# Usage

Add the component:

```js
import modal from 'shapla-modal';

export default {
  name: 'Hello',

  components: {
    modal
  },

  data () {
    return {
        modalActive:true,
    };
  },
  
  methods: {
    closeModal(){
      this.modalActive = false;
    }
  }
}

```

```html
<button @click="modalActive = true">Open Modal</button>
<modal :active="modalActive" title="Modal Title" content-size="full" @close="closeModal">
    Modal content goes here.
    <div slot="foot">
        <button @close="closeModal">Close</button>
    </div>
</modal>
```

### Props
| Property                  | Type      | Required  | Default       | Description                                                                                                                                                                                   |
|---------------------------|-----------|-----------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `active`                  | Boolean   | **yes**   |               |                                                                                                                                                                                               |
| `title`                   | String    | **no**    | `Untitled`    | `title` will not show if you set `type` other than `card`                                                                                                                                     |
| `type`                    | String    | **no**    | `card`        | Currently `card` design available. Use any name like `box` to get blank modal                                                                                                                 |
| `closeOnBackgroundClick`  | Boolean   | **no**    | `true`        | If set `true`, clicking outside content area will trigger close event.                                                                                                                        |
| `showCloseIcon`           | Boolean   | **no**    | `true`        | If set `false`, no closing icon will be shown                                                                                                                                                 |
| `contentSize`             | String    | **no**    | `medium`      | Value can be `small`, `medium`, `large` or `full`. `small` has content width 320px, `medium` has content width 640px, `large` has content width 960px and `full` will take full browser width |

## Listeners
The modal component fires the following events:

**`close`**: When close icon or outside content area is clicked, it fires the event.

```html
<!-- template -->
<modal @close="closeModal">
</modal>


<!-- method -->
methods: {
  closeModal(){
    this.modalActive = false;
  }
}
```