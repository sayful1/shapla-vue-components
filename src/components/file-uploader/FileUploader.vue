<template>
  <div class="shapla-file-uploader-container">
    <div
      class="shapla-file-uploader"
      :class="{ 'shapla-file-uploader--dragged': isDraggedOver }"
      @dragover.prevent="enter"
      @dragenter.prevent="enter"
      @dragleave.prevent="leave"
      @dragend.prevent="leave"
      @drop.prevent="drop"
    >
      <input
        :id="inputId"
        type="file"
        name="files[]"
        class="shapla-file-uploader__input"
        multiple
        @change="select"
      >

      <div class="shapla-file-uploader-message">
        <div class="shapla-file-uploader-message__icon">
          <svg
            class="icon-plus"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z" />
          </svg>
        </div>
        <div
          class="shapla-file-uploader-message__drag"
          v-html="textLineOne"
        />
        <div
          class="shapla-file-uploader-message__browse"
          v-html="textLineTwo"
        />
        <label
          :for="inputId"
          class="shapla-file-uploader-message__select-files shapla-button is-primary"
        >{{ textButton }}</label>
        <div
          class="shapla-file-uploader-message__maxsize"
          v-html="textMaxUploadLimit"
        />
      </div>

      <upload-status
        v-if="showFileUploadStatus"
        :files="files"
      />
    </div>
    <div
      v-if="showFilesUploadStatus"
      class="shapla-file-uploader-files"
    >
      <file-upload-status
        v-for="(file,index) in files"
        :key="index"
        :file="file"
        @cancel="onCancel"
      />
    </div>
  </div>
</template>

<script>
import UploadStatus from './UploadStatus.vue'
import FileUploadStatus from "./FileUploadStatus.vue";
import timeRemaining from "./helpers/timeremaining.js";

export default {
  name: 'FileUploader',
  components: {FileUploadStatus, UploadStatus},
  props: {
    url: {type: String, default: null, required: true},
    method: {type: String, default: 'POST'},
    paramName: {type: String, default: 'file'},
    inputId: {type: String, default: 'shapla-file-uploader__input'},
    textLineOne: {type: String, default: 'Drag &amp; drop files'},
    textLineTwo: {type: String, default: 'or'},
    textButton: {type: String, default: 'Select files to upload'},
    textMaxUploadLimit: {type: String, default: 'Maximum upload file size: 2MB'},
    params: {
      type: Object, required: false, default: () => {
      }
    },
    showFileUploadStatus: {type: Boolean, default: true},
    showFilesUploadStatus: {type: Boolean, default: true},
  },
  data() {
    return {
      files: [],
      isDraggedOver: false
    }
  },
  methods: {
    onCancel(file) {
      file.xhr.abort();
      file.cancelled = true;
    },
    enter() {
      this.isDraggedOver = true
    },
    leave() {
      this.isDraggedOver = false
    },
    drop(e) {
      this.leave();
      this.addFiles(e.dataTransfer.files)
    },
    select() {
      this.addFiles(this.$el.querySelector("input[type=file]").files);
    },
    addFiles(files) {
      let i, file;

      for (i = 0; i < files.length; i++) {
        file = files[i];

        this.upload(this.generateFileObject(file));
      }
    },
    upload(fileObject) {
      let formData = new FormData();

      formData.append(this.paramName, fileObject.file);

      let xhr = new XMLHttpRequest();

      this.$emit('init', formData);

      fileObject.xhr = xhr;

      xhr.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          fileObject.loadedBytes = event.loaded;
          fileObject.totalBytes = event.total;
          fileObject.progress = Math.ceil((event.loaded / event.total) * 100);

          fileObject.secondsRemaining = timeRemaining.calculate(
            fileObject.totalBytes,
            fileObject.loadedBytes,
            fileObject.timeStarted
          );
        }

        this.$emit('progress', fileObject, event);
      });

      // Define what happens on successful data submission
      xhr.addEventListener("load", () => {
        let contentType = xhr.getResponseHeader("Content-Type"),
          isJsonResponse = (contentType && contentType.indexOf("application/json") !== -1),
          response = isJsonResponse ? JSON.parse(xhr.responseText) : xhr.responseText;

        if (xhr.status >= 200 && xhr.status < 300) {
          fileObject.finished = true;
          this.$emit('success', fileObject, response);
        } else {
          fileObject.failed = true;
          this.$emit('failed', fileObject, response);
        }
      });

      xhr.addEventListener("error", () => {
        this.$emit('error', fileObject);
      });

      xhr.open(this.method, this.url);

      if (this.params && typeof this.params === "object" && Object.keys(this.params).length) {
        for (let [key, value] of Object.entries(this.params)) {
          formData.append(key, value);
        }
      }

      this.$emit('before:send', xhr, formData);

      xhr.send(formData);
    },
    generateFileObject(file) {
      let fileObjectIndex = this.files.push({
        id: Date.now() + Math.floor(Math.random() * 100).toString(),
        file: file,
        progress: 0,
        failed: false,
        loadedBytes: 0,
        totalBytes: 0,
        timeStarted: (new Date).getTime(),
        secondsRemaining: 0,
        finished: false,
        cancelled: false,
        xhr: null
      }) - 1;

      return this.files[fileObjectIndex]
    }
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.file-uploader;
</style>
