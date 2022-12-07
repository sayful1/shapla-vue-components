<template>
  <div>
    <file-uploader
      url="https://example.com"
      :chunking="false"
    />
  </div>
</template>

<script>
import {FileUploader} from "../../src/index.js";

export default {
  name: "TestFileUploader",
  components: {FileUploader}
}
</script>

<style scoped>

</style>
