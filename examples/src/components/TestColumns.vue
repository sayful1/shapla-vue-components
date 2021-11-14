<template>
  <div class="shapla-columns-example">
    <h2 class="section-title">Columns with default gap (0.75rem)</h2>
    <section class="section">
      <columns>
        <column :tablet="5">
          <columns>
            <column>
              <div class="card-column-box">25% width</div>
            </column>
            <column>
              <div class="card-column-box">25% width</div>
            </column>
            <column :tablet="6">
              <div class="card-column-box">50% width</div>
            </column>
          </columns>
        </column>
        <column :tablet="7">
          <code-highlight>
            <pre>
              <code class="html">&lt;columns&gt;
 &lt;column&gt;
    &lt;div class=&quot;card-column-box&quot;&gt;25% width&lt;/div&gt;
 &lt;/column&gt;
 &lt;column&gt;
    &lt;div class=&quot;card-column-box&quot;&gt;25% width&lt;/div&gt;
 &lt;/column&gt;
 &lt;column :tablet=&quot;6&quot;&gt;
    &lt;div class=&quot;card-column-box&quot;&gt;50% width&lt;/div&gt;
 &lt;/column&gt;
&lt;/columns&gt;</code>
            </pre>
          </code-highlight>
        </column>
      </columns>
    </section>

    <h2 class="section-title">Columns with custom gap (1.25rem)</h2>
    <section class="section">
      <columns>
        <column :tablet="5">
          <columns multiline variable column-gap="1.24rem">
            <column :tablet="4">
              <div class="card-column-box">Column example 1</div>
            </column>
            <column :tablet="4">
              <div class="card-column-box">Column example 2</div>
            </column>
            <column :tablet="4">
              <div class="card-column-box">Column example 3</div>
            </column>
            <column :tablet="4">
              <div class="card-column-box">Column example 4</div>
            </column>
            <column :tablet="4">
              <div class="card-column-box">Column example 1</div>
            </column>
            <column :tablet="4">
              <div class="card-column-box">Column example 2</div>
            </column>
            <column :tablet="4">
              <div class="card-column-box">Column example 3</div>
            </column>
            <column :tablet="4">
              <div class="card-column-box">Column example 4</div>
            </column>
          </columns>
        </column>
        <column :tablet="7">
          <code-highlight>
            <pre>
              <code class="html">&lt;columns multiline variable column-gap=&quot;1.24rem&quot;&gt;
	&lt;column :tablet=&quot;4&quot;&gt;
		&lt;div class=&quot;card-column-box&quot;&gt;Column example 1&lt;/div&gt;
	&lt;/column&gt;
	&lt;column :tablet=&quot;4&quot;&gt;
		&lt;div class=&quot;card-column-box&quot;&gt;Column example 2&lt;/div&gt;
	&lt;/column&gt;
	&lt;column :tablet=&quot;4&quot;&gt;
		&lt;div class=&quot;card-column-box&quot;&gt;Column example 3&lt;/div&gt;
	&lt;/column&gt;
	&lt;column :tablet=&quot;4&quot;&gt;
		&lt;div class=&quot;card-column-box&quot;&gt;Column example 4&lt;/div&gt;
	&lt;/column&gt;
	&lt;column :tablet=&quot;4&quot;&gt;
		&lt;div class=&quot;card-column-box&quot;&gt;Column example 1&lt;/div&gt;
	&lt;/column&gt;
	&lt;column :tablet=&quot;4&quot;&gt;
		&lt;div class=&quot;card-column-box&quot;&gt;Column example 2&lt;/div&gt;
	&lt;/column&gt;
	&lt;column :tablet=&quot;4&quot;&gt;
		&lt;div class=&quot;card-column-box&quot;&gt;Column example 3&lt;/div&gt;
	&lt;/column&gt;
	&lt;column :tablet=&quot;4&quot;&gt;
		&lt;div class=&quot;card-column-box&quot;&gt;Column example 4&lt;/div&gt;
	&lt;/column&gt;
&lt;/columns&gt;</code>
            </pre>
          </code-highlight>
        </column>
      </columns>
    </section>
  </div>
</template>

<script>
import {columns, column} from 'shapla-vue-components';
import CodeHighlight from "../CodeHighlight.vue";

export default {
  name: "TestColumns",
  components: {CodeHighlight, columns, column}
}
</script>

<style lang="scss">
.card-column-box {
  background: rgba(#000, 0.12);
  padding: 5px;
  text-align: center;
}
</style>
