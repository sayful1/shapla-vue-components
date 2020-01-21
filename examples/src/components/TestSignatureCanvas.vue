<template>
    <div>
        <signature-canvas @save="saveSignature" @clear="clearSignature"/>

        <div v-if="imageData">
            <img :src="imageData" alt="">
        </div>
    </div>
</template>

<script>
    import signatureCanvas from '../../../components/shapla-signature-canvas'

    export default {
        name: "TestSignatureCanvas",
        components: {signatureCanvas},
        data() {
            return {
                imageData: null,
            }
        },
        methods: {
            saveSignature(dataUrl) {
                this.imageData = dataUrl;
            },
            clearSignature() {
                this.imageData = null;
            }
        }
    }
</script>

<style scoped>

</style>