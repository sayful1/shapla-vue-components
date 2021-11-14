# shapla-dashboard-layout
A simple dashboard layout to build your app dashboard. for Vue.js

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm i shapla-dashboard-layout
```

# Usage

Add the component:

```js
import dashboardLayout from 'shapla-dashboard-layout';

export default {
    name: 'Hello',

    components: {
        dashboardLayout
    },

    data() {
        return {
            activateSideNav: false,
        }
    },

    computed: {
        menuItems() {
            return Array.from({length: 50}, (x, i) => i + 1);
        }
    }

}

```

```html
<dashboard-layout
    title="Dashboard"
    :activate-side-nav="activateSideNav"
    @open:sidenav="activateSideNav = true"
    @close:sidenav="activateSideNav = false"
    user-display-name="Sayful Islam"
    avatar-url="https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?s=80"
    greeting="Hello,"
>
    <template v-slot:sidenav-menu>
        <ul class="sidenav-list">
            <li class="sidenav-list__item" v-for="number in menuItems">
                <a class="sidenav-list__link" href="#">Menu item {{number}}</a>
            </li>
        </ul>
    </template>

    <p v-for="number in menuItems">{{number}}. Dashboard Content will go here</p>
</dashboard-layout>
```

### Props

| Property          | Type      | Required  | Default   | Description
|-------------------|-----------|-----------|-----------|---------------------------------
| `activateSideNav` | Boolean   | **no**    | `false`   | Boolean value hide/show sidenav
| `title`           | String    | **no**    | ``        | Dashboard title
| `userDisplayName` | String    | **no**    | ``        | User display name
| `avatarUrl`       | String    | **no**    | ``        | User avatar url
| `greeting`        | String    | **no**    | `Hello,`  | Greeting text
| `headerHeight`    | String    | **no**    | `56px`    | Height of header
| `headerTheme`     | String    | **no**    | `primary` | Value can be `default` or `primary` or `secondary`
| `navWidth`        | String    | **no**    | `300px`   | Width of side navigation
| `sideNavType`     | String    | **no**    | `overlay` | Value can be `overlay` or `off-canvas`. `off-canvas` is experimental
| `showOverlay`     | Boolean   | **no**    | `true`    | Should show overlay color when side navigation active.

## Listeners
The dashboard layout component fires the following events:

**`open:sidenav`**: When burger icon is clicked, it fires the event.

**`close:sidenav`**: When outside of sidenav is clicked, it fires the event.

```html
<!-- template -->
<dashboard-layout @open:sidenav="handleOpenSidenav" @close:sidenav="handleCloseSidenav"></dashboard-layout>


<!-- method -->
methods: {
  handleOpenSidenav(){
    // Handle click event
  },
  handleCloseSidenav(){
    // Handle click event
  }
}
```