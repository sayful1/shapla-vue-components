<template>
  <div class="shapla-file-uploader-status" v-if="files.length">
    <ul class="shapla-file-uploader-status__items">
      <li class="shapla-file-uploader-status__item">Files: {{ files.length }}</li>
      <li class="shapla-file-uploader-status__item">Percentage: {{ overallProgress }}%</li>
      <li class="shapla-file-uploader-status__item">Time remaining: {{ timeRemaining }}</li>
    </ul>
  </div>
</template>

<script>
import pad from './helpers/pad.js'
import {computed} from "vue";

export default {
  name: 'ShaplaFilesUploadStatus',
  props: {
    files: {type: Array, default: () => []},
  },
  setup(props) {
    const unfinishedFiles = computed(() => {
      let i, files = [];
      for (i = 0; i < props.files.length; i++) {
        if (!(props.files[i].finished || props.files[i].cancelled)) {
          files.push(props.files[i])
        }
      }
      return files
    })

    const overallProgress = computed(() => {
      let _unfinishedFiles = unfinishedFiles.value, totalProgress = 0;

      if (_unfinishedFiles.length === 0) {
        return 0;
      }

      _unfinishedFiles.forEach((file) => {
        totalProgress += file.progress
      });

      return parseInt(totalProgress / _unfinishedFiles.length) || 0;
    })

    const secondsRemaining = computed(() => {
      let secondsRemaining = 0;
      unfinishedFiles.value.forEach(file => secondsRemaining += file.secondsRemaining);

      return secondsRemaining;
    })

    const timeRemaining = computed(() => {
      let minutes = Math.floor(secondsRemaining.value / 60),
        seconds = secondsRemaining.value - minutes * 60;

      return pad.left('00', minutes) + ':' + pad.left('00', seconds)
    })

    return {overallProgress, timeRemaining}
  }
}
</script>

<style lang="scss">
@import "styles/upload-status";
</style>
