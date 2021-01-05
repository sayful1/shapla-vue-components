<template>
  <div>
    <button @click="openCoreModal = true">Open Core Modal</button>
    <button @click="openCardModal = true">Open Card Modal</button>
    <button @click="openConfirmModal = true">Open Confirm Modal</button>
    <button @click="openBoxModal = true">Open Box Modal</button>

    <modal-core v-if="openCoreModal" :active="openCoreModal" @close="openCoreModal = false">
      Add some content
    </modal-core>

    <modal-card v-if="openCardModal" :active="openCardModal" @close="openCardModal = false">
      Add some content
    </modal-card>

    <modal-box v-if="openBoxModal" :active="openBoxModal" @close="openBoxModal = false">
      Box modal
    </modal-box>

    <modal-confirm :active="openConfirmModal">
      Confirm
    </modal-confirm>
  </div>
</template>

<script>
import {ModalCard, ModalCore, ModalBox} from "../src";
import ModalConfirm from "@/components/ModalConfirm";

export default {
  name: "TestModal",
  components: {ModalConfirm, ModalBox, ModalCore, ModalCard},
  data() {
    return {
      openCoreModal: false,
      openConfirmModal: false,
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
