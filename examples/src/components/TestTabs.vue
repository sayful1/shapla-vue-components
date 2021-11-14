<template>
  <div>
    <h2>Tabs</h2>
    <tabs alignment="center">
      <tab name="Tab 1" selected>
        Tab One Content
      </tab>
      <tab name="Tab 2">
        Tab Two Content
      </tab>
    </tabs>
    <tabs alignment="center" tab-style="boxed">
      <tab name="Tab 1" selected>
        Tab One Content
      </tab>
      <tab name="Tab 2">
        Tab Two Content
      </tab>
    </tabs>
    <tabs alignment="center" tab-style="toggle">
      <tab name="Tab 1" selected>
        Tab One Content
      </tab>
      <tab name="Tab 2">
        Tab Two Content
      </tab>
    </tabs>
    <tabs alignment="center" fullwidth>
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
import {tabs, tab} from 'shapla-vue-components';

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
