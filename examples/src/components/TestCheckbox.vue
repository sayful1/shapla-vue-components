<template>
    <div>
        <div>
            <h4>Single Checkbox</h4>

            <shapla-checkbox v-model="singleCheckbox">Label goes here.</shapla-checkbox>

            <pre><code>{{singleCheckbox}}</code></pre>
        </div>

        <div>
            <h4>Multiple Checkbox</h4>

            <shapla-checkbox v-model="multiCheckbox" value="one">One</shapla-checkbox>
            <shapla-checkbox v-model="multiCheckbox" value="two">Two</shapla-checkbox>
            <shapla-checkbox v-model="multiCheckbox" value="three">Three</shapla-checkbox>

            <pre><code>{{multiCheckbox}}</code></pre>
        </div>

        <div>
            <h4>Multiple Checkbox (with disabled)</h4>

            <shapla-checkbox v-model="multiCheckbox" value="one">One</shapla-checkbox>
            <shapla-checkbox v-model="multiCheckbox" value="two" disabled>Two</shapla-checkbox>
            <shapla-checkbox v-model="multiCheckbox" value="three">Three</shapla-checkbox>

            <pre><code>{{multiCheckbox}}</code></pre>
        </div>
    </div>
</template>

<script>
    import shaplaCheckbox from "../../../components/shapla-checkbox/src/shaplaCheckbox";

    export default {
        name: "TestCheckbox",
        components: {shaplaCheckbox},
        data() {
            return {
                singleCheckbox: false,
                multiCheckbox: []
            }
        }
    }
</script>

<style scoped>

</style>