<template>
    <div class="shapla-media-uploader">
        <div :id="id" ref="dropzoneElement" class="dropzone">
            <div class="dz-default dz-message">
                <div class="shapla-dropzone-icon">
                    <svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"/>
                    </svg>
                </div>
                <div class="shapla-dropzone-drag" v-html="textLineOne"></div>
                <div class="shapla-dropzone-browse" v-html="textLineTwo"></div>
                <div class="shapla-dropzone-select-files shapla-button is-primary" v-html="textButton"></div>
                <div class="shapla-dropzone-maxsize" v-html="textMaxUploadLimit"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import mediaUploaderMixins from "./mediaUploaderMixins";

    export default {
        name: "MediaUploader",
        components: {},
        mixins: [mediaUploaderMixins],
        props: {
            id: {type: String, default: "shapla-media-modal"},
            options: {type: Object, required: true},
            textLineOne: {String, default: 'Drag &amp; drop files'},
            textLineTwo: {String, default: 'or'},
            textButton: {String, default: 'Select files to upload'},
            textMaxUploadLimit: {String, default: 'Maximum upload limit: 5MB'},
        }
    }
</script>

<style lang="scss">
    @import "media-uploader";
</style>
