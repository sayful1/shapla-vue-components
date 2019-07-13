<template>
    <div id="app">
        <test-columns></test-columns>
        <test-delete></test-delete>
        <test-modal></test-modal>
        <test-notifications></test-notifications>
        <test-spinner></test-spinner>
        <test-tabs></test-tabs>
    </div>
</template>

<script>

    import TestColumns from "./components/TestColumns";
    import TestDelete from "./components/TestDelete";
    import TestModal from "./components/TestModal";
    import TestNotifications from "./components/TestNotifications";
    import TestSpinner from "./components/TestSpinner";
    import TestTabs from "./components/TestTabs";

    export default {
        name: 'app',
        components: {
            TestTabs,
            TestSpinner,
            TestNotifications,
            TestModal,
            TestDelete,
            TestColumns
        }
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
