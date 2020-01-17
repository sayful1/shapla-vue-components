<template>
    <div class="shapla-media-modal">
        <modal :active="active" @close="closeModal" :title="title">
            <columns desktop>
                <column :desktop="6" class="column--dropzone" v-if="Object.keys(options).length">
                    <media-uploader
                            :options="options"
                            @upload="upload"
                            :text-line-one="textLineOne"
                            :text-line-two="textLineTwo"
                            :text-max-upload-limit="textMaxUploadLimit"
                    />
                </column>
                <column :desktop="6" class="column--media-list">
                    <template v-if="images.length">
                        <media-item
                                v-for="attachment in images"
                                :key="attachment.image_id"
                                :media="attachment"
                                :active="isActive(attachment)"
                                @select="chooseMedia"
                                @delete="deleteMedia"
                        />
                    </template>
                </column>
            </columns>
            <template slot="foot">
                <button class="button" @click="closeModal">Close</button>
            </template>
        </modal>
    </div>
</template>

<script>
    import {column, columns} from 'shapla-columns';
    import modal from 'shapla-modal';
    import MediaUploader from './MediaUploader';
    import MediaItem from "./mediaItem";

    export default {
        name: "MediaModal",
        components: {MediaItem, MediaUploader, modal, columns, column},
        props: {
            active: {type: Boolean, default: false},
            title: {type: String, default: "Edit Images"},
            images: {type: Array, default: () => []},
            image: {type: [Object, Array], default: () => []},
            // Props for MediaUploader
            options: {type: Object, required: true},
            textLineOne: {String, default: 'Drag &amp; Drop or'},
            textLineTwo: {String, default: 'Click here to browse your computer'},
            textMaxUploadLimit: {String, default: 'Maximum upload limit: 5MB'},
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
                if (confirm('Are you sure to delete this item permanently?')) {
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
    .shapla-media-modal {

        .shapla-columns {
            align-items: flex-start !important;
        }
    }
</style>
