<template>
    <div class="wp-frontend-media-modal">
        <modal :active="active" @close="closeModal" :title="title">
            <columns desktop>
                <column :desktop="6" class="column--dropzone">
                    <dropzone-uploader :options="options" @upload="upload"></dropzone-uploader>
                </column>
                <column :desktop="6" class="column--media-list">
                    <div class="attachment-list mdl-list" v-if="images.length">
                        <div class="mdl-list__item" :class="{'is-active': isActive(attachment)}"
                             v-for="attachment in images" v-if="attachment.title" @click="chooseMedia(attachment)">
                            <div class="mdl-list__item-primary-content">
                                <img class="mdl-list__item-avatar" :src="attachment.attachment_url"
                                     :alt="attachment.title">
                                <span v-text="attachment.title"></span>
                            </div>
                            <div class="mdl-list__item-secondary-action" @click="deleteMedia(attachment)">
                                <delete-icon></delete-icon>
                            </div>
                        </div>
                    </div>
                </column>
            </columns>
            <div slot="foot">
                <button class="button" @click="closeModal">Close</button>
            </div>
        </modal>
    </div>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import DropzoneUploader from './DropzoneUploader';
    import {columns, column} from 'shapla-columns';
    import modal from 'shapla-modal';
    import deleteIcon from 'shapla-delete';

    export default {
        name: "MediaModal",
        components: {vue2Dropzone, DropzoneUploader, modal, deleteIcon, columns, column},
        props: {
            active: {type: Boolean, default: false},
            title: {type: String, default: "Edit Images"},
            images: {type: Array, default: () => []},
            image: {
                type: [Object, Array], default: () => {
                }
            },
            options: {
                type: Object, required: false, default: () => {
                }
            },
        },
        methods: {
            isActive(attachment) {
                if (Array.isArray(this.image)) {
                    return this.image.indexOf(attachment) !== -1;
                }
                if (typeof this.image === "object") {
                    return this.image === attachment;
                }

                return false;
            },
            chooseMedia(attachment) {
                this.$emit('selected', attachment);
            },
            closeModal() {
                this.$emit('close');
            },
            deleteMedia(attachment) {
                if (confirm('Are you sure to delete this item?')) {
                    this.$emit('delete', attachment);
                }
            },
            upload(file, response) {
                this.$emit('upload', file, response);
            }
        }
    }
</script>

<style lang="scss">
    .wp-frontend-media-modal {

        .shapla-columns {
            align-items: flex-start !important;
        }

        .mdl-list {
            padding: 0;
        }

        .mdl-list__item {
            border: 1px solid rgba(#000, 0.2);
            margin-bottom: 1rem;
            cursor: pointer;

            &.is-active,
            &:hover {
                border-color: #fdd835;
            }

            &.is-active {
                border-width: 2px;
            }
        }

        @media screen and (min-width: 1000px) {
            .shapla-modal-content,
            .shapla-modal-card {
                width: 900px;
            }
        }
    }
</style>
