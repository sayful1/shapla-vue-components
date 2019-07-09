<template>
    <div>
        <h2>Modals</h2>
        <columns>
            <column>
                <button @click="openCardModal = true">Open Card Modal</button>
            </column>
        </columns>

        <modal :active="openCardModal" @close="openCardModal = false" title="Modal Demo 1">
           Medium width modal.
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
            }
        },
    }
</script>

<style scoped>

</style>