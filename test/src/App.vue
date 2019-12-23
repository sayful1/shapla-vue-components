<template>
    <div id="app">
        <test-radio/>
        <test-checkbox/>
    </div>
</template>

<script>
    import TestRadio from "./components/TestRadio";
    import TestCheckbox from "./components/TestCheckbox";

    export default {
        name: 'app',
        components: {TestCheckbox, TestRadio}
    }
</script>

<style lang="scss">
    html {
        box-sizing: border-box;
        background-color: #fff;
        font-size: 16px;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        min-width: 320px;
        overflow-x: hidden;
        overflow-y: scroll;
        text-rendering: optimizeLegibility;

        * {
            box-sizing: border-box;
        }
    }

    body, button, input, select, textarea {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
        font-size: 1rem;
        line-height: 1.5;
        color: #323232;
        text-transform: none;
        text-align: left;
    }

    #app {
        padding: 1rem;
    }
</style>
