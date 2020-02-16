<template>
	<div>
		<div class="dragndrop" v-bind:class="{ 'dragndrop--dragged': isDraggedOver }"
			 @dragover.prevent="enter" @dragenter.prevent="enter" @dragleave.prevent="leave" @dragend.prevent="leave"
			 @drop.prevent="drop">

			<input type="file" name="files[]" id="dragndrop__input" class="dragndrop__input" multiple
				   v-on:change="select" ref="dragndrop__input">

			<div class="dragndrop-message">
				<div class="dragndrop-message__icon">
					<svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
						<path
							d="M384 250v12c0 6.6-5.4 12-12 12h-98v98c0 6.6-5.4 12-12 12h-12c-6.6 0-12-5.4-12-12v-98h-98c-6.6 0-12-5.4-12-12v-12c0-6.6 5.4-12 12-12h98v-98c0-6.6 5.4-12 12-12h12c6.6 0 12 5.4 12 12v98h98c6.6 0 12 5.4 12 12zm120 6c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-32 0c0-119.9-97.3-216-216-216-119.9 0-216 97.3-216 216 0 119.9 97.3 216 216 216 119.9 0 216-97.3 216-216z"/>
					</svg>
				</div>
				<div class="dragndrop-message__drag" v-html="textLineOne"></div>
				<div class="dragndrop-message__browse" v-html="textLineTwo"></div>
				<label for="dragndrop__input" class="dragndrop-message__select-files shapla-button is-primary"
					   v-html="textButton"></label>
				<div class="dragndrop-message__maxsize" v-html="textMaxUploadLimit"></div>
			</div>

			<upload-status :files="files"/>
		</div>
		<div class="dragndrop__files">
			<file-upload-status v-for="(file,index) in files" :key="index" :file="file"/>
		</div>
	</div>
</template>

<script>
	import UploadStatus from './UploadStatus'
	import eventHub from './helpers/events.js'
	import FileUploadStatus from "./FileUploadStatus";

	export default {
		name: 'UploadForm',
		components: {FileUploadStatus, UploadStatus},
		props: {
			url: {type: String, default: null, required: true},
			method: {type: String, default: 'POST'},
			paramName: {type: String, default: 'file'},
			textLineOne: {String, default: 'Drag &amp; drop files'},
			textLineTwo: {String, default: 'or'},
			textButton: {String, default: 'Select files to upload'},
			textMaxUploadLimit: {String, default: 'Maximum upload file size: 5MB'},
		},
		data() {
			return {
				files: [],
				isDraggedOver: false
			}
		},
		methods: {
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
				this.addFiles(this.$refs.dragndrop__input.files);
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

				eventHub.$emit('init', formData);

				let xhr = new XMLHttpRequest();

				fileObject.xhr = xhr;

				xhr.upload.addEventListener("progress", event => {
					eventHub.$emit('progress', fileObject, event);
				});

				// Define what happens on successful data submission
				xhr.addEventListener("load", () => {
					let contentType = xhr.getResponseHeader("Content-Type"),
						isJsonResponse = (contentType && contentType.indexOf("application/json") !== -1),
						response = isJsonResponse ? JSON.parse(xhr.responseText) : xhr.responseText;

					if (xhr.status >= 200 && xhr.status < 300) {
						eventHub.$emit('finished', fileObject, response);
					} else {
						eventHub.$emit('failed', fileObject, response);
					}
				});

				xhr.addEventListener("error", () => {
					eventHub.$emit('failed', fileObject)
				});

				xhr.open(this.method, this.url);
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
	@import "styles/upload-form";
</style>
