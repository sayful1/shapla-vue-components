# Shapla Notification

A simple notification component for Vue 3

[<img src="./packages/notification/screenshot.png" style="width: 100%;" />](https://github.com/sayful1/shapla-vue-components)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-notification
```

# Usage

### Note
**Use only one `ShaplaNotificationContainer` component in the app.**

**You can import `Notify` anywhere of your app to trigger notification**

### Styles

with Sass:
```js
import '@shapla/vue-notification/src/index.scss';
```

with CSS:
```js
import '@shapla/vue-notification/dist/style.css';
```

### Javascript Instantiation

```js
import Notify, {ShaplaNotificationContainer} from '@shapla/vue-notification';

export default {
  name: 'Hello',

  components: {
    ShaplaNotificationContainer
  },
  
  methods: {
    createNotification(type){
      switch (type) {
        case 'info':
          Notify.info('Info message');
          break;
        case 'success':
          Notify.success('Success message', 'Title here');
          break;
        case 'warning':
          Notify.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          Notify.error('Error message', 'Click me!', 5000);
          break;
      }
    }
  }
}

```

```vue
<button @click="createNotification('info')">Info</button>
<button @click="createNotification('success')">Success</button>
<button @click="createNotification('warning')">Warning</button>
<button @click="createNotification('error')">Error</button>

<shapla-notification-container position='top-right'/>
```

### NotificationContainer Props
| Property          | Type      | Required  | Default       | Description
|-------------------|-----------|-----------|---------------|-----------------------------------------------------------
| `timeout`         | Number    | **no**    | `4000`        | Time to stay visible notification before auto dismiss.
| `position`        | String    | **no**    | `top-right`   | Value can be 'top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'
| `showDismisses`   | Boolean   | **no**    | `true`        | Set `false` to hide close icon from notification

## Notify API

- Notify.info(message, title, timeout);
- Notify.success(message, title, timeout);
- Notify.warning(message, title, timeout);
- Notify.error(message, title, timeout);

| Property  | Type      | Required  | Default  | Description
|-----------|-----------|-----------|----------|----------------------------------
| `message` | String    | **yes**   | ``       | Notification message
| `title`   | String    | **no**    | ``       | Notification title
| `timeout` | Number    | **no**    | `4000`   | The popup timeout in milliseconds
