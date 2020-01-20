<template>
    <div class="shapla-modal" v-show="active">
        <div class="shapla-modal-background" @click="backgroundClick"></div>

        <template v-if="!is_card">
            <div :class="contentClass">
                <slot></slot>
            </div>

            <delete-icon v-if="showCloseIcon" fixed large @click="close"></delete-icon>
        </template>

        <div :class="contentClass" v-if="is_card">
            <div class="shapla-modal-card-head">
                <p class="shapla-modal-card-title">{{title}}</p>
                <delete-icon v-if="showCloseIcon" @click="close"></delete-icon>
            </div>
            <div class="shapla-modal-card-body">
                <slot></slot>
            </div>
            <div class="shapla-modal-card-foot is-pulled-right">
                <slot name="foot">
                    <button @click.prevent="close">Cancel</button>
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    import deleteIcon from 'shapla-delete';

    export default {
        name: "modal",

        components: {deleteIcon},

        props: {
            active: {
                type: Boolean,
                required: true
            },
            title: {
                type: String,
                default: 'Untitled'
            },
            type: {
                type: String,
                default: 'card'
            },
            closeOnBackgroundClick: {
                type: Boolean,
                default: true
            },
            showCloseIcon: {
                type: Boolean,
                default: true
            },
            contentSize: {
                type: String,
                default: 'medium',
                validator: value => ['small', 'medium', 'large', 'full'].indexOf(value) !== -1
            },
        },

        watch: {
            active(newValue) {
                this.refreshBodyClass(newValue);
            }
        },

        mounted() {
            this.refreshBodyClass(this.active);
        },

        computed: {
            is_card() {
                return this.type === 'card';
            },
            contentClass() {
                return [
                    {'shapla-modal-content': !this.is_card},
                    {'shapla-modal-card': this.is_card},
                    'is-' + this.contentSize,
                ]
            }
        },

        methods: {
            close() {
                this.$emit('close');
            },
            backgroundClick() {
                if (this.closeOnBackgroundClick) {
                    this.close();
                }
            },
            refreshBodyClass(active) {
                if (active) {
                    document.querySelector('body').classList.add('has-shapla-modal');
                } else {
                    document.querySelector('body').classList.remove('has-shapla-modal');
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "modal";
</style>
