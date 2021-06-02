<template>
  <div>
    <h2>Tabs</h2>
    <tabs alignment="center">
      <tab name="Tab 1" >
        <template v-slot:name>Custom name</template>
        Tab One Content
      </tab>
      <tab name="Tab 2" selected>
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
      <tab name='<span class="icon is-small"><i class="fas fa-image" aria-hidden="true"></i></span>
          <span>Pictures</span>' selected>
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
import {ShaplaTabs, ShaplaTab} from '../src'

export default {
  name: "TestTabs",
  components: {tabs: ShaplaTabs, tab: ShaplaTab}
}
</script>

<style lang="scss">
@import url("https://unpkg.com/@fortawesome/fontawesome-free/css/all.css");
</style>
