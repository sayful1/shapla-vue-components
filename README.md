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
import {shaplaButton} from 'shapla-vue-components'; // or import shaplaButton from 'shapla-button';
import {progressBar} from 'shapla-vue-components'; // or import progressBar from 'shapla-progress-bar';


export default {
  name: 'Hello',

  components: {
    shaplaButton,
    progressBar
  },
  
  methods: {
    handleClick(){
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

* [Shapla Button](/components/shapla-button/README.md)
* [Shapla Checkbox](/components/shapla-checkbox/README.md)
* [Shapla Color System](/components/shapla-color-system/README.md)
* [Shapla Columns](/components/shapla-columns/README.md)
* [Shapla Confirm Dialog](/components/shapla-confirm-dialog/README.md)
* [Shapla Dashboard Layout](/components/shapla-dashboard-layout/README.md)
* [Shapla Data Table](/components/shapla-data-table/README.md)
* [Shapla Data Table Pagination](/components/shapla-data-table-pagination/README.md)
* [Shapla Data Table Status](/components/shapla-data-table-status/README.md)
* [Shapla Delete](/components/shapla-delete/README.md)
* [Shapla Dropdown](/components/shapla-dropdown/README.md)
* [Shapla File Uploader](/components/shapla-file-uploader/README.md)
* [Shapla Icon Container](/components/shapla-icon-container/README.md)
* [Shapla Image Container](/components/shapla-image-container/README.md)
* [Shapla Input Slider](/components/shapla-input-slider/README.md)
* [Shapla Modal](/components/shapla-modal/README.md)
* [Shapla Notifications](/components/shapla-notifications/README.md)
* [Shapla Progress Bar](/components/shapla-progress-bar/README.md)
* [Shapla Radio](/components/shapla-radio/README.md)
* [Shapla Radio Button](/components/shapla-radio-button/README.md)
* [Shapla Search Form](/components/shapla-search-form/README.md)
* [Shapla Select Field](/components/shapla-select-field/README.md)
* [Shapla Side Navigation](/components/shapla-side-navigation/README.md)
* [Shapla Spinner](/components/shapla-spinner/README.md)
* [Shapla Star Rating](/components/shapla-star-rating/README.md)
* [Shapla Switch](/components/shapla-switch/README.md)
* [Shapla Tabs](/components/shapla-tabs/README.md)
* [Shapla Text Field](/components/shapla-text-field/README.md)
* [Shapla Toggles](/components/shapla-toggles/README.md)
