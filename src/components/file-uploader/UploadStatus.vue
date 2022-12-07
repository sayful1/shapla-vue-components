<template>
  <div
    v-if="files.length"
    class="shapla-file-uploader-status"
  >
    <ul class="shapla-file-uploader-status__items">
      <li class="shapla-file-uploader-status__item">
        Files: {{ files.length }}
      </li>
      <li class="shapla-file-uploader-status__item">
        Percentage: {{ overallProgress }}%
      </li>
      <li class="shapla-file-uploader-status__item">
        Time remaining: {{ timeRemaining }}
      </li>
    </ul>
  </div>
</template>

<script>
    import {pad} from './helpers/utils.js'

    export default {
        name: 'UploadStatus',
        props: {
            files: {type: Array, default: () => []},
        },
        computed: {
            unfinishedFiles() {
                let i, files = [];

                for (i = 0; i < this.files.length; i++) {
                    if (this.files[i].finished || this.files[i].cancelled) {
                        continue
                    }

                    files.push(this.files[i])
                }

                return files
            },
            overallProgress() {
                let unfinishedFiles = this.unfinishedFiles, totalProgress = 0;

                if (unfinishedFiles.length === 0) {
                    return 0;
                }

                unfinishedFiles.forEach((file) => {
                    totalProgress += file.progress
                });

                return parseInt(totalProgress / unfinishedFiles.length) || 0;
            },
            secondsRemaining() {
                let secondsRemaining = 0;

                this.unfinishedFiles.forEach((file) => {
                    secondsRemaining += file.secondsRemaining
                });

                return secondsRemaining;
            },
            timeRemaining() {
                let minutes = Math.floor(this.secondsRemaining / 60),
                    seconds = this.secondsRemaining - minutes * 60;

                return pad.left('00', minutes) + ':' + pad.left('00', seconds)
            }
        }
    }
</script>

<style lang="scss">
</style>
