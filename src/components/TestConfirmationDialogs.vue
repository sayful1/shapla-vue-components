<template>
    <div>
        <button @click="confirm">Confirm</button>
        <confirm-dialog></confirm-dialog>
    </div>
</template>

<script>
    import ConfirmDialog from '../../shapla-confirmation-dialogs/src/ConfirmDialog';

    export default {
        name: "TestConfirmationDialogs",
        components: {
            ConfirmDialog
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