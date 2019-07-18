<template>
    <modal type="confirm" class="shapla-modal--confirm" :active="modalActive" :show-close-icon="false"
           content-size="small">
        <div class="shapla-confirm-modal">
            <div class="shapla-confirm-modal__content">
                {{ params.message }}
            </div>
            <div class="shapla-confirm-modal__actions">
                <button :class="cancelButtonClass" @click.prevent="handleClick(false)"
                        v-if="params.cancelButton" v-text="params.cancelButton">
                </button>

                <button :class="confirmButtonClass" @click.prevent="handleClick(true)"
                        v-if="params.confirmButton" v-text="params.confirmButton">
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
        props: {
            confirmButtonClass: {type: String, default: 'button button--confirm'},
            cancelButtonClass: {type: String, default: 'button button--cancel'},
        },
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
    .shapla-modal--confirm {
        .shapla-modal-background {
            background-color: rgba(#fff, 0.6);
        }

        .shapla-modal-content {
            background-color: #ffffff;
            border-radius: 4px;
            box-shadow: 0 9px 46px 8px rgba(0, 0, 0, 0.14), 0 11px 15px -7px rgba(0, 0, 0, 0.12), 0 24px 38px 3px rgba(0, 0, 0, 0.2);
        }
    }

    .shapla-confirm-modal {

        &__content {
            padding: 1rem;
        }

        &__actions {
            padding: 1rem;
            display: flex;
            justify-content: flex-end;
            border-top: 1px solid rgba(#000, .12);

            button:not(:last-child) {
                margin-right: 1rem;
            }
        }
    }
</style>
