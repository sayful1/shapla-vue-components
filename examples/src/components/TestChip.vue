<template>
  <div>
    <h3 class="section-title">Default Chip</h3>
    <div class="section">
      <columns>
        <column :tablet="5">
          <shapla-chip>Default Chip</shapla-chip>
          <br/>
          <shapla-chip small>Default Chip (small)</shapla-chip>
          <br/>
          <shapla-chip :deletable="true">Deletable Chip</shapla-chip>
          <br/>
          <shapla-chip :deletable="true" :small="true">Deletable Chip (small)</shapla-chip>
        </column>
        <column :tablet="7">
          <code-highlight>
            <pre>
              <code class="html">&lt;shapla-chip&gt;Default Chip&lt;/shapla-chip&gt;
&lt;shapla-chip small&gt;Default Chip (small)&lt;/shapla-chip&gt;
&lt;shapla-chip :deletable=&quot;true&quot;&gt;Deletable Chip&lt;/shapla-chip&gt;
&lt;shapla-chip :deletable=&quot;true&quot; :small=&quot;true&quot;&gt;Deletable Chip (small)&lt;/shapla-chip&gt;</code>
            </pre>
          </code-highlight>
        </column>
      </columns>
    </div>

    <h3 class="section-title">Chip with Contact</h3>
    <div class="section">
      <columns>
        <column :tablet="5">
          <shapla-chip
            image_src="https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?size=100&default=retro"
            text="Chip with Contact"
          />
          <br/>
          <shapla-chip
            image_src="https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?size=100&default=retro"
            text="Deletable Chip with Contact" :deletable="true"
          />
          <br/>
          <shapla-chip
            image_src="https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?size=100&default=retro"
            text="Chip with Contact (small)" :small="true"
          />
          <br/>
          <shapla-chip
            image_src="https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?size=100&default=retro"
            text="Deletable Chip with Contact (small)" :deletable="true" :small="true"
          />
        </column>
        <column :tablet="7">
          <code-highlight>
            <pre>
              <code class="html">&lt;shapla-chip
 image_src=&quot;https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?size=100&amp;default=retro&quot;
 text=&quot;Chip with Contact&quot;
/&gt;
&lt;shapla-chip
 image_src=&quot;https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?size=100&amp;default=retro&quot;
 text=&quot;Deletable Chip with Contact&quot; :deletable=&quot;true&quot;
/&gt;
&lt;shapla-chip
 image_src=&quot;https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?size=100&amp;default=retro&quot;
 text=&quot;Chip with Contact (small)&quot; :small=&quot;true&quot;
/&gt;
&lt;shapla-chip
 image_src=&quot;https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?size=100&amp;default=retro&quot;
 text=&quot;Deletable Chip with Contact (small)&quot; :deletable=&quot;true&quot; :small=&quot;true&quot;
/&gt;</code>
            </pre>
          </code-highlight>
        </column>
      </columns>
    </div>
  </div>
</template>

<script>
import shaplaChip from "shapla-chip";
import {columns, column} from 'shapla-columns'
import CodeHighlight from "@/CodeHighlight";

export default {
  name: "TestChip",
  components: {CodeHighlight, shaplaChip, columns, column},
}
</script>

<style scoped>

</style>
