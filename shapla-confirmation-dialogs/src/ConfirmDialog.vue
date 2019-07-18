<template>
    <modal type="dialog-confirm" :active="modalActive" :show-close-icon="false" content-size="small">
        <div class="shapla-confirm-modal">
            <div class="shapla-confirm-modal__content">
                {{ params.message }}
            </div>
            <div class="shapla-confirm-modal__actions">
                <button
                        class="button button--cancel"
                        @click.prevent="handleClick(false)"
                        v-if="params.cancelButton"
                        v-text="params.cancelButton"
                >
                </button>

                <button
                        class="button button--confirm"
                        @click.prevent="handleClick(true)"
                        v-if="params.confirmButton"
                        v-text="params.confirmButton"
                >
                </button>
            </div>
        </div>
    </modal>
</template>

<script>
    import modal from './plugin';

    export default {
        name: 'ConfirmDialog',
        components: {modal},
        data() {
            return {
                params: {
                    message: 'Are you sure?',
                    confirmButton: 'Ok',
                    cancelButton: 'Cancel'
                },
                modalActive: false,
            };
        },

        beforeMount() {
            modal.events.$on('show', params => {
                Object.assign(this.params, params);
                this.modalActive = true;
            });
        },

        methods: {
            handleClick(confirmed) {
                this.modalActive = false;
                modal.events.$emit('clicked', confirmed);
            }
        }
    }
</script>

<style lang="scss">
    .shapla-confirm-modal {
        background: white;
        border-radius: 4px;

        &__content {
            padding: 1rem;
        }

        &__actions {
            padding: 1rem;
            display: flex;
            justify-content: flex-end;
            border-top: 1px solid #eee;

            button:not(:last-child) {
                margin-right: 1rem;
            }
        }
    }
</style>
