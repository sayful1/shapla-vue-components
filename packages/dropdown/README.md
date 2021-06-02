# Shapla Dropdown

A simple and interactive dropdown menu for discoverable content for Vue 3

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save @shapla/vue-dropdown
```

# Usage

### Styles

with Sass:

```js
import '@shapla/vue-dropdown/src/index.scss';
```

with CSS:

```js
import '@shapla/vue-dropdown/dist/style.css';
```

### Javascript Instantiation

```js
import ShaplaDropdown from '@shapla/vue-dropdown';

export default {
  name: 'Hello',

  components: {
    ShaplaDropdown
  }
}

```

```html

<shapla-dropdown :hoverable="false" :right="true">
  <template v-slot:trigger>
    <div class="shapla-icon is-hoverable">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path
          d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
          fill="currentColor"/>
      </svg>
    </div>
  </template>
  <a href="https://example.com" class="shapla-dropdown-item is-active">Link 1</a>
  <a href="https://example.com" class="shapla-dropdown-item">Link 2</a>
  <span class="shapla-dropdown-divider"></span>
</shapla-dropdown>
```

### Props

| Property      | Type      | Required  | Default   | Description
|---------------|-----------|-----------|-----------|---------------------------------------------------------------------------
| `hoverable`   | Boolean   | **no**    | `true`    | If set `true`, the dropdown will show up when hovering the trigger slot.
| `right`       | Boolean   | **no**    | `false`   | Set `true` to have a right-aligned dropdown.
| `role`        | String    | **no**    | `menu`    | Role of component. Mostly for accessibility.
| `direction`   | Boolean   | **no**    | `auto`    | Value can be `auto`, `up`, `down`
