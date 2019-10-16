<template>
    <div id="app">
        <tabs alignment="center">
            <tab name="Radio Buttons" selected>
                <test-radio-buttons></test-radio-buttons>
            </tab>
            <tab name="Confirmation Dialogs">
                <test-confirmation-dialogs></test-confirmation-dialogs>
            </tab>
            <tab name="Modal">
                <test-modal></test-modal>
            </tab>
            <tab name="Columns">
                <test-columns></test-columns>
            </tab>
            <tab name="Delete">
                <test-delete></test-delete>
            </tab>
            <tab name="Notifications">
                <test-notifications></test-notifications>
            </tab>
            <tab name="Spinner">
                <test-spinner></test-spinner>
            </tab>
            <tab name="Tabs">
                <test-tabs></test-tabs>
            </tab>
            <tab name="Data Table">
                <test-data-table></test-data-table>
            </tab>
            <tab name="Side Navigation">
                <test-side-navigation></test-side-navigation>
            </tab>
            <tab name="Star Rating">
                <test-star-rating></test-star-rating>
            </tab>
            <tab name="Toggles">
                <test-toggles></test-toggles>
            </tab>
        </tabs>
    </div>
</template>

<script>
    import {tabs, tab} from '../shapla-tabs';
    import TestColumns from "./components/TestColumns";
    import TestDelete from "./components/TestDelete";
    import TestModal from "./components/TestModal";
    import TestNotifications from "./components/TestNotifications";
    import TestSpinner from "./components/TestSpinner";
    import TestTabs from "./components/TestTabs";
    import TestDataTable from "./components/TestDataTable";
    import TestConfirmationDialogs from "./components/TestConfirmationDialogs";
    import TestSideNavigation from "./components/TestSideNavigation";
    import TestStarRating from "./components/TestStarRating";
    import TestToggles from "./components/TestToggles";
    import TestRadioButtons from "./components/TestRadioButtons";

    export default {
        name: 'app',
        components: {
            TestRadioButtons,
            TestToggles,
            TestStarRating,
            TestSideNavigation,
            TestConfirmationDialogs,
            TestDataTable,
            tabs,
            tab,
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
