<template>
    <div>
        <media-uploader :options="dropzoneOptions" @upload="dropzoneSuccess"/>
        <featured-image :options="dropzoneOptions" @upload="dropzoneSuccess"/>
        <media-modal :options="dropzoneOptions" @upload="dropzoneSuccess"/>
    </div>
</template>

<script>
    import {FeaturedImage, MediaModal, MediaUploader} from '../../../shapla-media-uploader'

    export default {
        name: "TestMediaUploader",
        components: {FeaturedImage, MediaUploader, MediaModal},
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
                    url: "http://wordpress.test/wp-json/stackonet-tracker/v1/avatar",
                    maxFilesize: 5,
                    headers: {
                        "X-WP-Nonce": '75ae1212e9'
                    }
                }
            }
        },
        methods: {
            dropzoneSuccess(file, response) {
                alert('image uploaded successfully');
                console.log(file, response);
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