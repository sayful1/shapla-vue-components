<template>
  <div>
    <h2 class="section-title">Single Checkbox</h2>
    <section class="section">
      <columns>
        <column :tablet="5">
          <shapla-checkbox v-model="singleCheckbox">Label goes here.</shapla-checkbox>
          <div class="m-t-20">
            Value:
            <pre><code>{{ singleCheckbox }}</code></pre>
          </div>
        </column>
        <column :tablet="7">
          <code-highlight>
              <pre>
                <code class="html">&lt;shapla-checkbox v-model=&quot;singleCheckbox&quot;&gt;Label goes here.&lt;/shapla-checkbox&gt;</code>
              </pre>
          </code-highlight>
        </column>
      </columns>
    </section>

    <h4 class="section-title">Multiple Checkbox</h4>
    <div class="section">
      <columns>
        <column :tablet="5">
          <shapla-checkbox v-model="multiCheckbox" value="one">One</shapla-checkbox>
          <shapla-checkbox v-model="multiCheckbox" value="two">Two</shapla-checkbox>
          <shapla-checkbox v-model="multiCheckbox" value="three">Three</shapla-checkbox>

          <div class="m-t-20">
            Value:
            <pre><code>{{ multiCheckbox }}</code></pre>
          </div>
        </column>
        <column :tablet="7">
          <code-highlight>
            <pre>
              <code class="html">&lt;shapla-checkbox v-model=&quot;multiCheckbox&quot; value=&quot;one&quot;&gt;One&lt;/shapla-checkbox&gt;
&lt;shapla-checkbox v-model=&quot;multiCheckbox&quot; value=&quot;two&quot;&gt;Two&lt;/shapla-checkbox&gt;
&lt;shapla-checkbox v-model=&quot;multiCheckbox&quot; value=&quot;three&quot;&gt;Three&lt;/shapla-checkbox&gt;</code>
            </pre>
          </code-highlight>
        </column>
      </columns>
    </div>

    <h4 class="section-title">Multiple Checkbox (with disabled)</h4>
    <div class="section">
      <columns>
        <column :tablet="5">
          <shapla-checkbox v-model="multiCheckbox" value="one">One</shapla-checkbox>
          <shapla-checkbox v-model="multiCheckbox" value="two" disabled>Two</shapla-checkbox>
          <shapla-checkbox v-model="multiCheckbox" value="three">Three</shapla-checkbox>

          <div class="m-t-20">
            Value:
            <pre><code>{{ multiCheckbox }}</code></pre>
          </div>
        </column>
        <column :tablet="7">
          <code-highlight>
            <pre>
              <code class="html">&lt;shapla-checkbox v-model=&quot;multiCheckbox&quot; value=&quot;one&quot;&gt;One&lt;/shapla-checkbox&gt;
&lt;shapla-checkbox v-model=&quot;multiCheckbox&quot; value=&quot;two&quot; disabled&gt;Two&lt;/shapla-checkbox&gt;
&lt;shapla-checkbox v-model=&quot;multiCheckbox&quot; value=&quot;three&quot;&gt;Three&lt;/shapla-checkbox&gt;</code>
            </pre>
          </code-highlight>
        </column>
      </columns>
    </div>
  </div>
</template>

<script>
import {shaplaCheckbox} from "../../src/index.js";
import {columns, column} from "../../src/index.js";
import CodeHighlight from "../CodeHighlight.vue";

export default {
  name: "TestCheckbox",
  components: {CodeHighlight, shaplaCheckbox, columns, column},
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
