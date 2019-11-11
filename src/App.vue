<template>
    <div id="app">
        <test-button></test-button>
    </div>
</template>

<script>
    import TestButton from "./components/TestButton";

    export default {
        name: 'app',
        components: {TestButton}
    }
</script>

<style lang="scss">
    html {
        background-color: #fff;
        font-size: 16px;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
        min-width: 320px;
        overflow-x: hidden;
        overflow-y: scroll;
        text-rendering: optimizeLegibility;
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
