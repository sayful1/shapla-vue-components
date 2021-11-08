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
      <button @click="openCardNoFooterModal = true">Open Card Modal (No Footer)</button>
      <button @click="openSmallCardModal = true">Open Card Modal (Small)</button>
      <button @click="openLargeCardModal = true">Open Card Modal (Large)</button>
      <button @click="openFullCardModal = true">Open Card Modal (Full)</button>
    </p>

    <modal-core v-if="openCoreModal" :active="openCoreModal" @close="openCoreModal = false">
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
    <modal-card v-if="openCardNoFooterModal" :active="openCardNoFooterModal" @close="openCardNoFooterModal = false"
                :show-card-footer="false">
      This modal has no footer.
    </modal-card>
  </div>
</template>

<script>
import {ModalBox, ModalCard, ModalConfirm, ModalCore} from "../src/index.js";

export default {
  name: "TestModal",
  components: {ModalConfirm, ModalBox, ModalCore, ModalCard},
  data() {
    return {
      openBoxModal: false,
      openCoreModal: false,
      openConfirmModal: false,
      openCardModal: false,
      openSmallCardModal: false,
      openLargeCardModal: false,
      openFullCardModal: false,
      openCardNoFooterModal: false,
    }
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.delete-icon;
</style>
