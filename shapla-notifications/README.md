# shapla-notifications

A simple dependency-free JavaScript notification component for VueJS

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-notifications
```
# Usage

Add the component:

```js
import notification from 'shapla-notifications';

export default {
  name: 'Hello',

  components: {
    notification
  },

  data () {
    return {
        note:{},
    };
  },
}
```

```html
<notification v-model="note"></notification>
<notification ref="notify"></notification>
```

`notification` will show the notification whenever the `note` property is updated (normal Vue reactivity).
Alternatively, by default `notification` listens to `vm.$root` for the `'show-notification'` event.
To show the snackbar, emit the event passing the _notification data object_

```html
<button @click="showNotification">Show Notification</button>
<notification v-model="note"></notification>
```

```html
methods: {
    showNotification() {
        this.note = {
            type: 'success',
            message: 'This is success message.',
        };
    }
}
```

or using global event bus

```html
<button @click="showNotification">Show Notification</button>
<notification ref="notify"></notification>
```

```html
methods: {
    showNotification() {
        vm.$root.$emit('show-notification', {
            type: 'error',
            title: 'Error!',
            message: 'This is error message.'
        });
    },
}
```

Alternatively, you can also use the `show` method to trigger the display of the snackbar.

```html
<notification ref="notify"></notification>
```

```javascript
vm.$refs.notify.show({ message: 'Message' })
```

### props

| props             | Type    | Default             | Description                                                                   |
| ------------------| ------- | ------------------- | ------------------------------------------------------------------------------|
| `options`         | Object  |                     | optional v-model when set shows notification                                  |
| `event`           | String  | `show-notification` | specifies the name of the event the notification listens to.                  |
| `event-source`    | Vue     | `vm.$root`          | specifies the source of the event. must be a vue instance or component ref    |
| `show-dismisses`  | Boolean | `true`              | If set `true`, a cross icon will be show to dismiss notification.             |
| `timeout`         | Number  | `2750`              | The amount of time in milliseconds to show the notification.                  |

### methods

| method       | Description                                            |
| ------------ | ------------------------------------------------------ |
| `show(data)` | trigger the display of a message with optional action. |

### notification data object

The `options` prop, event, and `show` method takes an object for notification data. The table below shows the
properties and their usage.

| Property  | Effect                                                             | Remarks                      | Type     |
| --------- | ------------------------------------------------------------------ | ---------------------------- | -------- |
| message   | The text message to display.                                       | Required                     | String   |
| timeout   | The amount of time in milliseconds to show the snackbar.           | Optional (default `2750`)    | Integer  |
| type      | Supported types are `success`, `info`,`warning`, `error`           | Optional (default `info`)    | String   |
