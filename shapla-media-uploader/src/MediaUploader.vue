<template>
	<div class="dropzone-media-uploader" v-if="hasOptions">
		<vue2-dropzone id="shaplaMediaModal" ref="shaplaMediaModal" :options="options" :useCustomSlot="true"
					   @vdropzone-success="upload">
			<div class="dz-default dz-message">
				<div class="shapla-dropzone-icon">
					<svg class="icon-upload" xmlns="http://www.w3.org/2000/svg" width="48" height="48"
						 viewBox="0 0 24 24">
						<path d="M0 0h24v24H0z" fill="none"/>
						<path
							d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"/>
					</svg>
				</div>
				<div class="shapla-dropzone-drag" v-html="textLineOne"></div>
				<div class="shapla-dropzone-browse" v-html="textLineTwo"></div>
				<div class="shapla-dropzone-maxsize" v-html="textMaxUploadLimit"></div>
			</div>
		</vue2-dropzone>
	</div>
</template>

<script>
    import vue2Dropzone from 'vue2-dropzone'

    export default {
        name: "MediaUploader",
        components: {vue2Dropzone},
        props: {
            options: {type: Object, required: true},
            textLineOne: {String, default: 'Drag &amp; Drop or'},
            textLineTwo: {String, default: 'Click here to browse your computer'},
            textMaxUploadLimit: {String, default: 'Maximum upload limit: 5MB'},
        },
        computed: {
            hasOptions() {
                return Object.keys(this.options).length > 0;
            }
        },
        methods: {
            upload(file, response) {
                this.$emit('upload', file, response);
                this.$refs.shaplaMediaModal.removeFile(file);
            }
        }
    }
</script>

<style lang="scss">
	@import "colors";
	@import "~dropzone/dist/dropzone.css";

	.dropzone-media-uploader {
		.dz-message {
			margin: 0 !important;
		}

		.shapla-dropzone-drag,
		.shapla-dropzone-browse,
		.shapla-dropzone-maxsize {
			color: $text-secondary;
		}

		svg.icon-upload {
			fill: $text-icon;
		}
	}
</style>
