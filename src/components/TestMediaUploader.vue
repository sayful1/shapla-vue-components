<template>
    <div>
        <div class="media-uploader">
            <media-uploader
                    title="Upload image"
                    :images="attachments"
                    :image="images"
                    :options="dropzoneOptions"
                    @upload="dropzoneSuccess"
            ></media-uploader>
            <button class="button" @click="openLogoModal =true">Open Modal</button>
        </div>
        <media-modal
                title="Upload image"
                :active="openLogoModal"
                :images="attachments"
                :image="images"
                :options="dropzoneOptions"
                @upload="dropzoneSuccess"
                @close="openLogoModal = false"
        ></media-modal>
    </div>
</template>

<script>
    import MediaModal from '../../shapla-media-uploader'
    import MediaUploader from "../../shapla-media-uploader/src/MediaUploder";

    export default {
        name: "TestMediaUploader",
        components: {MediaUploader, MediaModal},
        data() {
            return {
                openLogoModal: false,
                attachments: [],
                attachment: {},
                images: [],
            }
        },
        computed: {
            dropzoneOptions() {
                return {
                    url: "https://github.com/settings/profile",
                }
            }
        },
        methods: {
            dropzoneSuccess() {
                alert('image uploaded successfully');
            }
        }
    }
</script>

<style lang="scss">
    .shapla-modal-card-body {
        overflow: hidden !important;
    }

    .media-uploader {
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        .button {
            background-color: #3273DC;
            color: #fff;
        }
    }

</style>