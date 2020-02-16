<template>
	<div class="drag-n-drop-status" v-if="files.length">
		<ul class="drag-n-drop-status__items">
			<li class="drag-n-drop-status__item">Files: {{ files.length }}</li>
			<li class="drag-n-drop-status__item">Percentage: {{ overallProgress }}%</li>
			<li class="drag-n-drop-status__item">Time remaining: {{ timeRemaining }}</li>
		</ul>
	</div>
</template>

<script>
	import eventHub from './helpers/events.js'
	import timeRemaining from './helpers/timeremaining.js'
	import pad from './helpers/pad.js'

	export default {
		name: 'UploadStatus',
		props: {
			files: {type: Array, default: () => []},
		},
		data() {
			return {
				overallProgress: 0,
				interval: null,
				secondsRemaining: 0,
				timeRemaining: 'Calculating'
			}
		},
		methods: {
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
			updateOverallProgress() {
				let unfinishedFiles = this.unfinishedFiles(), totalProgress = 0;

				unfinishedFiles.forEach((file) => {
					totalProgress += file.progress
				});

				this.overallProgress = parseInt(totalProgress / unfinishedFiles.length) || 0;
			},
			updateTimeRemaining() {
				let minutes, seconds;

				this.secondsRemaining = 0;

				this.unfinishedFiles().forEach((file) => {
					file.secondsRemaining = timeRemaining.calculate(
						file.totalBytes,
						file.loadedBytes,
						file.timeStarted
					);

					this.secondsRemaining += file.secondsRemaining
				});

				minutes = Math.floor(this.secondsRemaining / 60);
				seconds = this.secondsRemaining - minutes * 60;

				this.timeRemaining = pad.left('00', minutes) + ':' + pad.left('00', seconds)
			}
		},
		mounted() {
			eventHub.$on('progress', () => {
				this.updateOverallProgress()
			});

			eventHub.$on('init', () => {
				if (!this.interval) {
					this.interval = setInterval(() => {
						if (this.unfinishedFiles().length === 0) {
							this.updateOverallProgress();
							clearInterval(this.interval);
							this.interval = null
						}

						this.updateTimeRemaining()
					}, 1000)
				}
			})
		}
	}
</script>

<style lang="scss">
	@import "styles/upload-status";
</style>
