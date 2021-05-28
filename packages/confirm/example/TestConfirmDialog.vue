<template>
  <div>
    <button @click="openConfirmModal">Confirm</button>
    <button @click="openAlertModal">Alert</button>

    <shapla-confirm-container/>
  </div>
</template>

<script>
import {ShaplaConfirmContainer, Dialog} from '../src'

export default {
  name: "TestConfirmDialog",
  components: {ShaplaConfirmContainer, Dialog},
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
</script>

<style scoped>

</style>
