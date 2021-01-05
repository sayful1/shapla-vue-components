<template>
  <div>
    <button @click="openCoreModal = true">Open Core Modal</button>
    <button @click="openCardModal = true">Open Card Modal</button>

    <modal-core v-if="openCoreModal" :active="openCoreModal" @close="openCoreModal = false">
      Add some content
    </modal-core>

    <modal-card v-if="openCardModal" :active="openCardModal" @close="openCardModal = false">
      Add some content
    </modal-card>
  </div>
</template>

<script>
import {ModalCard, ModalCore} from "../src";

export default {
  name: "TestModal",
  components: {ModalCore, ModalCard},
  data() {
    return {
      openCoreModal: false,
      openBoxModal: false,
      openCardModal: false,
      openSmallCardModal: false,
      openLargeCardModal: false,
      openFullCardModal: false,
    }
  }
}
</script>

<style scoped>

</style>
