<template>
    <div>
        <button @click="confirm">Confirm</button>
        <confirm-modal></confirm-modal>
    </div>
</template>

<script>
    import {ConfirmModal} from '../../../shapla-confirm-modal';

    export default {
        name: "TestConfirmationDialogs",
        components: {
            ConfirmModal
        },
        methods: {
            confirm() {
                this.$modal.confirm({
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