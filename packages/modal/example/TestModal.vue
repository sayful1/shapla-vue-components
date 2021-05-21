<template>
  <div>
    <p>
      <button @click="openCoreModal = true">Open Core Modal</button>
    </p>
    <p>
      <button @click="openConfirmModal = true">Open Confirm Modal</button>
    </p>
    <p>
      <button @click="openBoxModal = true">Open Box Modal</button>
    </p>
    <p>
      <button @click="openCardModal = true">Open Card Modal (Default / Medium)</button>
      <button @click="openSmallCardModal = true">Open Card Modal (Small)</button>
      <button @click="openLargeCardModal = true">Open Card Modal (Large)</button>
      <button @click="openFullCardModal = true">Open Card Modal (Full)</button>
    </p>
    <p>
      <button @click="openFullCardModal2 = true">Open All-in-One modal</button>
    </p>

    <modal-core :active="openCoreModal" @close="openCoreModal = false">
      <img src="https://via.placeholder.com/600x600.png?text=1280x960" alt="Placeholder image (600x600)">
    </modal-core>

    <modal-box v-if="openBoxModal" :active="openBoxModal" @close="openBoxModal = false">
      Box modal
    </modal-box>

    <modal-confirm v-if="openConfirmModal" :active="openConfirmModal" @click="openConfirmModal = false">
      Confirm
    </modal-confirm>

    <modal-card v-if="openCardModal" :active="openCardModal" @close="openCardModal = false">
      Add some content
    </modal-card>
    <modal-card v-if="openSmallCardModal" :active="openSmallCardModal" @close="openSmallCardModal = false"
                content-size="small" title="Modal Demo 1"> Small width modal.
    </modal-card>
    <modal-card v-if="openLargeCardModal" :active="openLargeCardModal" @close="openLargeCardModal = false"
                content-size="large" title="Modal Demo 1"> Large width modal.
    </modal-card>
    <modal-card v-if="openFullCardModal" :active="openFullCardModal" @close="openFullCardModal = false"
                content-size="full" title="Modal Demo 1"> Full width modal.
    </modal-card>
    <shapla-modal :active="openFullCardModal2" @close="openFullCardModal2 = false"
                  content-size="full" title="Modal Demo 1">
      Full width modal.
    </shapla-modal>
  </div>
</template>

<script>
import ShaplaModal, {ModalBox, ModalCard, ModalConfirm, ModalCore} from "../src";

export default {
  name: "TestModal",
  components: {ShaplaModal, ModalConfirm, ModalBox, ModalCore, ModalCard},
  data() {
    return {
      openBoxModal: false,
      openCoreModal: false,
      openConfirmModal: false,
      openCardModal: false,
      openSmallCardModal: false,
      openLargeCardModal: false,
      openFullCardModal: false,
      openFullCardModal2: false,
    }
  }
}
</script>

<style scoped>

</style>
