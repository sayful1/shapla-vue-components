<template>
  <shapla-modal-confirm
    :active="showConfirm"
    :icon="params.icon"
    :title="params.title"
    :message="params.message"
    :confirm-button="params.confirmButton"
    :cancel-button="params.cancelButton"
    @click="handleClick"
  />
</template>

<script>
import {ShaplaModalConfirm} from "@shapla/vue-modal";
import {ref, onMounted} from 'vue'
import Dialog from "./Dialog.js";

export default {
  name: "ShaplaConfirmContainer",
  components: {ShaplaModalConfirm},
  setup() {
    const defaultParamsData = {
      icon: 'primary', title: '', message: 'Are you sure?', confirmButton: 'OK', cancelButton: 'Cancel'
    }
    const params = ref(defaultParamsData);
    const showConfirm = ref(false);

    const handleClick = confirmed => {
      showConfirm.value = false;
      Dialog.dispatch('click.ShaplaVueConfirmModal', confirmed);
    }

    onMounted(() => {
      Dialog.on('show.ShaplaVueConfirmModal', newParams => {
        params.value = Object.assign(defaultParamsData, newParams);
        showConfirm.value = true;
      })
    })

    return {
      showConfirm,
      params,
      handleClick
    }
  }
}
</script>
<style lang="scss">
@import "index.scss";
</style>
