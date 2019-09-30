<template>
    <radio-buttons :options="options" v-model="option"></radio-buttons>
</template>

<script>
    import radioButtons from "../../shapla-radio-buttons/src/radioButtons";

    export default {
        name: "TestRadioButtons",
        components: {
            radioButtons
        },
        data() {
            return {
                option: 'one',
                options: [
                    {label: 'One', value: 'one'},
                    {label: 'Two', value: 'two'},
                    {label: 'Three', value: 'three'},
                ],
            }
        }
    }
</script>

<style scoped>

</style>