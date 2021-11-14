# shapla-confirm-dialog
A simple confirm dialog/modal based on modal component for Vue.

## Table of contents

- [Installation](#installation)
- [Usage](#usage)

# Installation

```
npm install --save shapla-confirm-dialog
```

# Usage
Use plugins by calling the Vue.use() global method. This has to be done before you start your app by calling new Vue():

### Note
**Use only one 'DialogContainer' component in the app.**

```js
import {Dialog, DialogContainer} from 'shapla-confirm-dialog'

Vue.use(Dialog);

new Vue({
    el: '#app',
    components:{DialogContainer},
    methods: {
        confirm() {
            this.$dialog.confirm({
                message: 'Are you sure to delete this item permanently?',
                cancelButton: 'Cancel',
                confirmButton: 'Yes'
            }).then(confirmed => {
                console.log('Do somethings', confirmed);
            });
        }
    }
});
```

```html
<button @click="confirm">Confirm</button>
<dialog-container/>
```
