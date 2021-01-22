<template>
  <div>
    <button @click="confirm">Confirm</button>
    <dialog-container/>
  </div>
</template>

<script>
import {DialogContainer} from '../src'

export default {
  name: "TestConfirmDialog",
  components: {DialogContainer},
  methods: {
    confirm() {
      this.$dialog.confirm({
        title: 'Are you sure?',
        message: 'Are you sure to delete this item permanently?',
        cancelButton: 'Cancel',
        confirmButton: 'Yes'
      }).then(confirmed => {
        console.log('Do somethings', confirmed);
      });
    }
  }
}
</script>

<style scoped>

</style>
