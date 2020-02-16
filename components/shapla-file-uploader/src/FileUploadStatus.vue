<template>
	<div class="drag-n-drop-file">

		<div class="drag-n-drop-file__progress-line" :class="fillClass" :style="{ 'width': file.progress + '%' }"></div>

		<div class="drag-n-drop-file__content">
			<div class="drag-n-drop-file__title">{{ file.file.name }}</div>

			<div class="drag-n-drop-file__progress" v-if="isInProgress">
				<div class="drag-n-drop-file__percentage">{{ file.progress }}%</div>
				<div class="drag-n-drop-file__separator">
					<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
						<path
							d="M7.8 10c0 1.215 0.986 2.2 2.201 2.2s2.199-0.986 2.199-2.2c0-1.215-0.984-2.199-2.199-2.199s-2.201 0.984-2.201 2.199z"/>
					</svg>
				</div>
				<div class="drag-n-drop-file__time-remaining">{{ file.secondsRemaining }} seconds remaining</div>
			</div>
		</div>

		<div class="drag-n-drop-file__spacer"></div>

		<div class="drag-n-drop-file__status">
			<span v-if="file.failed">Failed</span>
			<span v-if="file.finished">Complete</span>
			<span v-if="file.cancelled">Cancelled</span>
		</div>

		<div class="drag-n-drop-file__actions">
			<slot name="actions"></slot>
			<a class="drag-n-drop-file__action-cancel" href="#" @click.prevent="cancel" v-if="canCancel && showCancel">Cancel</a>
		</div>
	</div>
</template>

<script>
	import eventHub from './helpers/events.js'

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
		},
		methods: {
			cancel() {
				this.file.xhr.abort();
				this.file.cancelled = true
			},
			updateFileObjectProgress(fileObject, e) {
				if (!e.lengthComputable) {
					return
				}

				fileObject.loadedBytes = e.loaded;
				fileObject.totalBytes = e.total;

				fileObject.progress = Math.ceil((e.loaded / e.total) * 100)
			}
		},
		mounted() {
			eventHub.$on('progress', (fileObject, e) => {
				this.updateFileObjectProgress(fileObject, e)
			});

			eventHub.$on('finished', (fileObject) => {
				if (fileObject.id === this.file.id) {
					this.file.finished = true
				}
			});

			eventHub.$on('failed', (fileObject) => {
				if (fileObject.id === this.file.id) {
					this.file.failed = true
				}
			})
		}
	}
</script>

<style lang="scss">
	@import "styles/file-upload-status";
</style>
