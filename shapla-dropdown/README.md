# Shapla Dropdown
A simple and interactive dropdown menu for discoverable content for VueJS

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-dropdown
```

# Usage
Add the component:

```js
import dropdown from 'shapla-dropdown';

export default {
  name: 'Hello',

  components: {
    dropdown
  }
}

```

```html
<dropdown :hoverable="false" :right="true">
    <template v-slot:trigger>
        <div class="shapla-icon shapla-icon-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" fill="currentColor"/>
            </svg>
        </div>
    </template>
    <a href="https://example.com" class="dropdown-item is-active">Link 1</a>
    <a href="https://example.com" class="dropdown-item">Link 2</a>
    <span class="dropdown-divider"></span>
</dropdown>
```

### Props
| Property      | Type      | Required  | Default   | Description                                                                   |
|---------------|-----------|-----------|-----------|-------------------------------------------------------------------------------|
| `hoverable`   | Boolean   | **no**    | `true`    | If set `true`, the dropdown will show up when hovering the trigger slot.      |
| `right`       | Boolean   | **no**    | `false`   | Set `true` to have a right-aligned dropdown.                                  |
| `up`          | Boolean   | **no**    | `false`   | Set `true` to have a dropdown menu that appears above the dropdown button.    |
