<template>
    <div class="wp-frontend-media-modal">
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
    </div>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'
    import DropzoneUploader from './DropzoneUploader';
    import {columns, column} from 'shapla-columns';
    import deleteIcon from 'shapla-delete';

    export default {
        name: "MediaUploader",
        components: {vue2Dropzone, DropzoneUploader, deleteIcon, columns, column},
        data() {
            return {
              size:'1024'
            }
        },
        props: {
            size:{type: String, default: "500MB"},
            active: {type: Boolean, default: false},
            title: {type: String, default: "Edit Images"},
            images: {type: Array, default: () => []},
            image: {
                type: [Object, Array], default: () => {
                },
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
</style>
