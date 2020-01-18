import Dropzone from "dropzone";

Dropzone.autoDiscover = false;

const mediaUploaderMixins = {
    computed: {
        dropzoneSettings() {
            let defaultValues = {
                thumbnailWidth: 200,
                thumbnailHeight: 200
            };
            Object.keys(this.options).forEach(key => defaultValues[key] = this.options[key]);

            return defaultValues
        }
    },
    mounted() {
        this.dropzone = new Dropzone(this.$refs.dropzoneElement, this.dropzoneSettings);

        // When the thumbnail has been generated
        this.dropzone.on("thumbnail", (file, dataUrl) => this.$emit("thumbnail", file, dataUrl));

        // When a file is added to the list
        this.dropzone.on("addedfiles", files => this.$emit("addedfiles", files));

        this.dropzone.on("removedfile", file => {
            this.$emit("removedfile", file);
            if (file.manuallyAdded && this.dropzone.options.maxFiles !== null) {
                this.dropzone.options.maxFiles++;
            }
        });

        this.dropzone.on("success", (file, response) => {
            this.$emit("success", file, response);
            this.$emit("upload", file, response);
        });

        this.dropzone.on("successmultiple", (file, response) => this.$emit("successmultiple", file, response));

        this.dropzone.on("error", (file, message, xhr) => this.$emit("error", file, message, xhr));

        this.dropzone.on("errormultiple", (files, message, xhr) => this.$emit("errormultiple", files, message, xhr));

        this.dropzone.on("sending", (file, xhr, formData) => this.$emit("sending", file, xhr, formData));

        this.dropzone.on("sendingmultiple", (file, xhr, formData) => this.$emit("sendingmultiple", file, xhr, formData));

        this.dropzone.on("complete", (file) => this.$emit("complete", file));

        this.dropzone.on("completemultiple", files => this.$emit("completemultiple", files));

        this.dropzone.on("canceled", file => this.$emit("canceled", file));

        this.dropzone.on("canceledmultiple", files => this.$emit("canceledmultiple", files));

        this.dropzone.on("maxfilesreached", files => this.$emit("maxfilesreached", files));

        this.dropzone.on("maxfilesexceeded", file => this.$emit("maxfilesexceeded", file));

        this.dropzone.on("processing", file => this.$emit("processing", file));

        this.dropzone.on("processingmultiple", files => this.$emit("processingmultiple", files));

        this.dropzone.on("uploadprogress", (file, progress, bytesSent) => {
            this.$emit("uploadprogress", file, progress, bytesSent)
        });

        this.dropzone.on("totaluploadprogress", (totaluploadprogress, totalBytes, totalBytesSent) => {
            this.$emit("totaluploadprogress", totaluploadprogress, totalBytes, totalBytesSent)
        });

        this.dropzone.on("reset", () => this.$emit("reset"));

        this.dropzone.on("queuecomplete", () => this.$emit("queuecomplete"));

        this.dropzone.on("drop", (event) => this.$emit("drop", event));

        this.dropzone.on("dragstart", (event) => this.$emit("dragstart", event));

        this.dropzone.on("dragend", (event) => this.$emit("dragend", event));

        this.dropzone.on("dragenter", (event) => this.$emit("dragenter", event));

        this.dropzone.on("dragover", (event) => this.$emit("dragover", event));

        this.dropzone.on("dragleave", (event) => this.$emit("dragleave", event));

        this.$emit("dropzone-mounted");
    },
};


export default mediaUploaderMixins;