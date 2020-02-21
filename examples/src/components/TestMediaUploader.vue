<template>
    <div>
        <featured-image
                @click:add="openLogoModal = true"
                image-url-temp="https://avatars2.githubusercontent.com/u/6873334?s=460&v=4"
        />
        <media-modal
                url="http://wordpress.test/wp-json/stackonet-tracker/v1/avatar"
                :active="openLogoModal"
                @close="openLogoModal = false"
        />
    </div>
</template>

<script>
    import {FeaturedImage, MediaModal} from '../../../components/shapla-media-uploader'

    export default {
        name: "TestMediaUploader",
        components: {FeaturedImage, MediaModal},
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