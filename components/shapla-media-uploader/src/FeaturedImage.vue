<template>
    <div class="shapla-featured-image">
        <div class="shapla-featured-image__view">
            <div class="shapla-featured-image__thumbnail" v-if="has_image">
                <delete-icon @click="clearImages"/>
                <img :src="image.attachment_url" alt=""/>
            </div>
            <div class="shapla-featured-image__placeholder" v-if="!has_image">
                {{placeholderText}}
            </div>
            <div class="shapla-featured-image__actions" v-if="!has_image">
                <shapla-button theme="secondary" :fullwidth="true" @click="active = true">{{buttonText}}</shapla-button>
            </div>
        </div>
        <media-modal
                :title="title"
                :active="active"
                :options="options"
                :images="images"
                :image="image"
                :text-line-one="textLineOne"
                :text-line-two="textLineTwo"
                :text-max-upload-limit="textMaxUploadLimit"
                @close="active = false"
                @selected="chooseImage"
                @upload="upload"
                @delete="deleteMediaItem"
        />
    </div>
</template>

<script>
    import deleteIcon from 'shapla-delete';
    import MediaModal from "./MediaModal";
    import shaplaButton from 'shapla-button'

    export default {
        name: "FeaturedImage",
        components: {MediaModal, deleteIcon, shaplaButton},
        props: {
            placeholderText: {type: String, default: 'No File Selected'},
            buttonText: {type: String, default: 'Add Image'},
            removeButtonText: {type: String, default: 'Remove'},
            modalTitle: {type: String, default: 'Select Image'},
            modalButtonText: {type: String, default: 'Set Image'},
            // Props for MediaModal
            title: {type: String, default: "Edit Images"},
            image: {type: [Object, Array], default: () => []},
            images: {type: Array, default: () => []},
            // Props for MediaUploader
            options: {type: Object, required: true},
            textLineOne: {String, default: 'Drag &amp; drop files'},
            textLineTwo: {String, default: 'or'},
            textMaxUploadLimit: {String, default: 'Maximum upload limit: 5MB'},
        },
        data() {
            return {
                active: false,
            }
        },
        computed: {
            has_image() {
                return !!(this.image && this.image.attachment_url);
            }
        },
        methods: {
            upload(file, response) {
                this.$emit('upload', file, response);
            },
            deleteMediaItem(image) {
                this.$emit('delete', image);
            },
            chooseImage(image) {
                this.$emit('input', image);
                this.active = false;
            },
            openMediaModal() {
                this.$emit('input', {
                    id: 0,
                    src: '',
                    height: 0,
                    width: 0,
                });
            },
            clearImages() {
                if (confirm('Are you sure to remove this image?')) {
                    this.$emit('input', {});
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    .shapla-featured-image {
        position: relative;

        &__placeholder {
            border: 1px dashed #b4b9be;
            box-sizing: border-box;
            cursor: default;
            line-height: 20px;
            margin-bottom: 10px;
            padding: 9px 0;
            position: relative;
            text-align: center;
            width: 100%;
        }

        &__thumbnail {
            display: inline-flex;
            max-width: 150px;
            position: relative;

            .shapla-delete-icon {
                position: absolute;
                right: 5px;
                top: 5px;
                background-color: rgba(0, 0, 0, .5);
            }

            img {
                max-width: 100%;
                height: auto;
            }
        }
    }
</style>
