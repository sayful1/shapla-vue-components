<template>
    <div>
        <h2>Notification</h2>
        <columns>
            <column>
                <button @click="showDefaultNotification">Show Default Notification</button>
            </column>
            <column>
                <button @click="showSuccessNotification">Show Success Notification</button>
            </column>
            <column>
                <button @click="showInfoNotification">Show Info Notification</button>
            </column>
            <column>
                <button @click="showWarningNotification">Show Warning Notification</button>
            </column>
            <column>
                <button @click="showErrorNotification">Show Error Notification</button>
            </column>
        </columns>
        <notification></notification>
    </div>
</template>

<script>
    import notification from '../../shapla-notifications'
    import {columns, column} from '../../shapla-columns'

    export default {
        name: "TestNotifications",
        components: {
            notification,
            columns,
            column
        },
        methods: {
            showDefaultNotification() {
                this.$root.$emit('show-notification', {
                    message: 'This is default message.'
                });
            },
            showSuccessNotification() {
                this.$root.$emit('show-notification', {
                    type: 'success',
                    title: 'Success!',
                    timeout: 60000,
                    message: 'This is success message. Self close after 1 minute.'
                });
            },
            showInfoNotification() {
                this.$root.$emit('show-notification', {
                    type: 'info',
                    title: 'Info!',
                    message: 'This is info message.'
                });
            },
            showWarningNotification() {
                this.$root.$emit('show-notification', {
                    type: 'warning',
                    title: 'Warning!',
                    message: 'This is warning message.'
                });
            },
            showErrorNotification() {
                this.$root.$emit('show-notification', {
                    type: 'error',
                    title: 'Error!',
                    message: 'This is error message.'
                });
            },
        }
    }
</script>

<style scoped>

</style>