<template>
  <div>
    <file-uploader
      url="http://yousaidit.test/wp-json/yousaidit/v1/dynamic-cards/video"
      :chunking="true"
      @success="onSuccess"
      @failed="onFailed"
    />
  </div>
</template>

<script>
import {FileUploader} from "../../src/index.js";

export default {
  name: "TestFileUploader",
  components: {FileUploader},
  methods: {
    onSuccess(fileObject, serverResponse) {
      window.console.log('success', fileObject, serverResponse)
    },
    onFailed(fileObject, serverResponse) {
      window.console.log('failed', fileObject, serverResponse)
    },
  }
}
</script>

<style scoped>

</style>
