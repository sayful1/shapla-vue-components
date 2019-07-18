<template>
    <div>
        <confirm-button
                message="Are you sure you want to cancel your account?"
                cancel-button="Go Back"
                confirm-button="Continue On"
                class="bg-blue-500 hover:bg-blue-600 py-2 px-4 text-white rounded-lg"
        >
            Option 2
        </confirm-button>
        <confirm-dialog></confirm-dialog>
    </div>
</template>

<script>
    import ConfirmButton from '../../shapla-confirmation-dialogs/src/ConfirmButton';
    import ConfirmDialog from '../../shapla-confirmation-dialogs/src/ConfirmDialog';

    export default {
        name: "TestConfirmationDialogs",
        components: {
            ConfirmButton,
            ConfirmDialog
        }
    }
</script>

<style scoped>

</style>