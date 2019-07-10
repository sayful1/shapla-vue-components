<template>
    <div>
        <h2>Modals</h2>
        <columns>
            <column>
                <button @click="openCardModal = true">Open Card Modal</button>
            </column>
            <column>
                <button @click="openSmallCardModal = true">Open Small Card Modal</button>
            </column>
            <column>
                <button @click="openLargeCardModal = true">Open Large Card Modal</button>
            </column>
            <column>
                <button @click="openFullCardModal = true">Open Full Card Modal</button>
            </column>
        </columns>

        <modal :active="openCardModal" @close="openCardModal = false" title="Modal Demo 1">
            Medium width modal.
        </modal>
        <modal :active="openSmallCardModal" @close="openSmallCardModal = false" content-size="small"
               title="Modal Demo 1">
            Small width modal.
        </modal>
        <modal :active="openLargeCardModal" @close="openLargeCardModal = false" content-size="large"
               title="Modal Demo 1">
            Large width modal.
        </modal>
        <modal :active="openFullCardModal" @close="openFullCardModal = false" content-size="full" title="Modal Demo 1">
            Full width modal.
        </modal>
    </div>
</template>

<script>
    import {columns, column} from '../../shapla-columns'
    import modal from '../../shapla-modal';

    export default {
        name: "TestModal",
        components: {
            modal,
            columns,
            column
        },
        data() {
            return {
                openCardModal: false,
                openSmallCardModal: false,
                openLargeCardModal: false,
                openFullCardModal: false,
            }
        },
    }
</script>

<style scoped>

</style>