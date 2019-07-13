<template>
    <div>
        <h2>Tabs</h2>
        <tabs>
            <tab name="Tab 1" selected>
                Tab One Content
            </tab>
            <tab name="Tab 2">
                Tab Two Content
            </tab>
        </tabs>
    </div>
</template>

<script>
    import {tabs, tab} from '../../shapla-tabs';

    export default {
        name: "TestTabs",
        components: {
            tabs,
            tab
        }
    }
</script>

<style scoped>

</style>