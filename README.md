# shapla-vue-components

[![npm](https://img.shields.io/npm/v/shapla-vue-components.svg) ![npm](https://img.shields.io/npm/dm/shapla-vue-components.svg)](https://www.npmjs.com/package/shapla-vue-components)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

A collection of reusable vue components for rapid development.

[Visit Demo Page](https://sayful1.github.io/shapla-vue-components/demo)

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

**To install all components, run the following command in terminal**

```
npm install shapla-vue-components
```

**You can also install each component separately as your requirement.**

For example, to install `Shapla Data Table` component, you can run in terminal `npm install shapla-data-table`

Or to install `Shapla Tabs` component, you can run in terminal `npm install shapla-tabs`

# Usage

For example, to use button and progress bar components:

```js
import {shaplaButton} from 'shapla-vue-components';
import {progressBar} from 'shapla-vue-components';


export default {
  name: 'Hello',

  components: {
    shaplaButton,
    progressBar
  },

  methods: {
    handleClick() {
      // Handle click event
    }
  }
}

```

```html

<progress-bar :value="1" :max="10" :striped="true" :animated="true" size="small" theme="primary"/>
<shapla-button @click="handleClick"></shapla-button>
```

# Components

* [Shapla Button](/src/components/button/README.md)
* [Shapla Checkbox](/src/components/checkbox/README.md)
* [Shapla Color System](/src/components/color-system/README.md)
* [Shapla Columns](/src/components/columns/README.md)
* [Shapla Confirm Dialog](/src/components/confirm-dialog/README.md)
* [Shapla Dashboard Layout](/src/components/dashboard-layout/README.md)
* [Shapla Data Table](/src/components/data-table/README.md)
* [Shapla Data Table Pagination](/src/components/data-table-pagination/README.md)
* [Shapla Data Table Status](/src/components/data-table-status/README.md)
* [Shapla Delete](/src/components/delete/README.md)
* [Shapla Dropdown](/src/components/dropdown/README.md)
* [Shapla File Uploader](/src/components/file-uploader/README.md)
* [Shapla Icon Container](/src/components/icon-container/README.md)
* [Shapla Image Container](/src/components/image-container/README.md)
* [Shapla Input Slider](/src/components/input-slider/README.md)
* [Shapla Modal](/src/components/modal/README.md)
* [Shapla Notifications](/src/components/notifications/README.md)
* [Shapla Progress Bar](/src/components/progress-bar/README.md)
* [Shapla Radio](/src/components/radio/README.md)
* [Shapla Radio Button](/src/components/radio-button/README.md)
* [Shapla Search Form](/src/components/search-form/README.md)
* [Shapla Select Field](/src/components/select-field/README.md)
* [Shapla Side Navigation](/src/components/side-navigation/README.md)
* [Shapla Spinner](/src/components/spinner/README.md)
* [Shapla Star Rating](/src/components/star-rating/README.md)
* [Shapla Switch](/src/components/switch/README.md)
* [Shapla Tabs](/src/components/tabs/README.md)
* [Shapla Text Field](/src/components/text-field/README.md)
* [Shapla Toggles](/src/components/toggles/README.md)
