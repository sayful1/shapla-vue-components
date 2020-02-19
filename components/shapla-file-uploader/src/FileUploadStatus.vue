<template>
    <div class="shapla-file-uploader-file">

        <div class="shapla-file-uploader-file__progress-line" :class="fillClass"
             :style="{ 'width': file.progress + '%' }"></div>

        <div class="shapla-file-uploader-file__content">
            <div class="shapla-file-uploader-file__title">{{ file.file.name }}</div>

            <div class="shapla-file-uploader-file__progress" v-if="isInProgress">
                <div class="shapla-file-uploader-file__percentage">{{ file.progress }}%</div>
                <div class="shapla-file-uploader-file__separator">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <path
                                d="M7.8 10c0 1.215 0.986 2.2 2.201 2.2s2.199-0.986 2.199-2.2c0-1.215-0.984-2.199-2.199-2.199s-2.201 0.984-2.201 2.199z"/>
                    </svg>
                </div>
                <div class="shapla-file-uploader-file__time-remaining">Time remaining: {{ timeRemaining }}</div>
            </div>
        </div>

        <div class="shapla-file-uploader-file__spacer"></div>

        <div class="shapla-file-uploader-file__status">
            <span v-if="file.failed">Failed</span>
            <span v-if="file.finished">Complete</span>
            <span v-if="file.cancelled">Cancelled</span>
        </div>

        <div class="shapla-file-uploader-file__actions">
            <slot name="actions">
                <a class="shapla-file-uploader-file__action-cancel" href="#" @click.prevent="cancel"
                   v-if="canCancel && showCancel">Cancel</a>
            </slot>
        </div>
    </div>
</template>

<script>
    import pad from './helpers/pad.js'

    export default {
        name: "FileUploadStatus",
        props: {
            file: {type: Object, required: true},
            showCancel: {type: Boolean, default: true}
        },
        computed: {
            canCancel() {
                return (!this.file.finished && !this.file.cancelled);
            },
            isInProgress() {
                return (!this.file.finished && !this.file.failed && !this.file.cancelled);
            },
            fillClass() {
                return {
                    'is-finished': this.file.finished,
                    'is-failed': this.file.failed || this.file.cancelled
                }
            },
            timeRemaining() {
                let minutes = Math.floor(this.file.secondsRemaining / 60),
                    seconds = this.file.secondsRemaining - minutes * 60;

                return pad.left('00', minutes) + ':' + pad.left('00', seconds)
            }
        },
        methods: {
            cancel() {
                this.file.xhr.abort();
                this.file.cancelled = true
            }
        }
    }
</script>

<style lang="scss">
    @import "styles/file-upload-status";
</style>
