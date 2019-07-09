<template>
    <div id="app">
        <test-columns></test-columns>
        <test-delete></test-delete>
        <test-modal></test-modal>
    </div>
</template>

<script>

    import TestColumns from "./components/TestColumns";
    import TestDelete from "./components/TestDelete";
    import TestModal from "./components/TestModal";

    export default {
        name: 'app',
        components: {
            TestModal,
            TestDelete,
            TestColumns
        }
    }
</script>

<style>
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
