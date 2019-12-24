<template>
    <div>
        <radio-button
                v-for="_option in options"
                :key="_option.value"
                v-model="option"
                :label="_option.label"
                :value="_option.value"
        />
        <pre><code>{{option}}</code></pre>
    </div>
</template>

<script>
    import radioButton from "../../../shapla-radio-buttons/src/radioButton";

    export default {
        name: "TestRadioButtons",
        components: {
            radioButton
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