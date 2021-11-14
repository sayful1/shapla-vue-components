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
        <template v-slot:name>
          <span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
          <span>Pictures</span>
        </template>
        Tab One Content
      </tab>
      <tab name="Tab 2">
        Tab Two Content
      </tab>
    </tabs>
  </div>
</template>

<script>
import {tab, tabs} from '../src/index'

export default {
  name: "TestTabs",
  components: {tabs, tab}
}
</script>

<style lang="scss">
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css");
</style>
