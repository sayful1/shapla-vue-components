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

    <shapla-modal-core :active="openCoreModal" @close="openCoreModal = false">
      <img src="https://via.placeholder.com/600x600.png?text=1280x960" alt="Placeholder image (600x600)">
    </shapla-modal-core>

    <shapla-modal-box v-if="openBoxModal" :active="openBoxModal" @close="openBoxModal = false">
      Box modal
    </shapla-modal-box>

    <shapla-modal-confirm v-if="openConfirmModal" :active="openConfirmModal" @click="openConfirmModal = false">
      Confirm
    </shapla-modal-confirm>

    <shapla-modal-card v-if="openCardModal" :active="openCardModal" @close="openCardModal = false">
      Add some content
    </shapla-modal-card>
    <shapla-modal-card v-if="openSmallCardModal" :active="openSmallCardModal" @close="openSmallCardModal = false"
                       content-size="small" title="Modal Demo 1"> Small width modal.
    </shapla-modal-card>
    <shapla-modal-card v-if="openLargeCardModal" :active="openLargeCardModal" @close="openLargeCardModal = false"
                       content-size="large" title="Modal Demo 1"> Large width modal.
    </shapla-modal-card>
    <shapla-modal-card v-if="openFullCardModal" :active="openFullCardModal" @close="openFullCardModal = false"
                       content-size="full" title="Modal Demo 1"> Full width modal.
    </shapla-modal-card>
    <shapla-modal :active="openFullCardModal2" @close="openFullCardModal2 = false"
                  content-size="full" title="Modal Demo 1">
      Full width modal.
    </shapla-modal>
  </div>
</template>

<script>
import ShaplaModal, {ShaplaModalBox, ShaplaModalCard, ShaplaModalConfirm, ShaplaModalCore} from "../src";

export default {
  name: "TestModal",
  components: {ShaplaModal, ShaplaModalConfirm, ShaplaModalBox, ShaplaModalCore, ShaplaModalCard},
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

<style lang="scss">
@import "@shapla/vue-cross/src/index.scss";
</style>
