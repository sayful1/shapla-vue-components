# Shapla Confirm Dialog

A simple confirm modal/dialog based on modal component for Vue 3

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-confirm
```

# Usage

### Note

**Use only one 'ShaplaConfirmContainer' component in the app.**

### Javascript Instantiation

```js
import Dialog, {ShaplaConfirmContainer} from '@shapla/vue-confirm';

export default {
  name: 'Hello',

  components: {
    ShaplaConfirmContainer
  },
  setup() {
    const openConfirmModal = () => {
      Dialog.confirm('Are you sure to delete the item?').then(confirm => {
        if (confirm) {
          console.log('Confirmed');
        }
      });
    }

    const openAlertModal = () => {
      Dialog.alert({message: 'You need to click Ok button to close it.', title: 'Simple Alert'});
    }

    return {
      openAlertModal,
      openConfirmModal
    }
  },
}

```

```vue
<button @click="openConfirmModal">Confirm</button>
<button @click="openAlertModal">Alert</button>

<shapla-confirm-container/>
```

## Notify API

- Dialog.alert(message);
- Dialog.confirm(message);

Both `alert` and `confirm` can accept String for the message or Object with following props.

| Property          | Type              | Required  | Default       | Description
|-------------------|-------------------|-----------|---------------|-------------------------------------------------------
| `message`         | String            | **yes**   | ``            | Confirm dialog message
| `title`           | String            | **no**    | ``            | Confirm dialog title
| `icon`            | String            | **no**    | `primary`     | Value can be `primary`, `success` or `error`.
| `confirmButton`   | String, Boolean   | **no**    | `OK`          | Confirm button text. Set `false` to hide confirm button
| `cancelButton`    | String, Boolean   | **no**    | `Cancel`      | Cancel button text. Set `false` to hide cancel button
