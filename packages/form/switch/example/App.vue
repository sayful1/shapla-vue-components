<template>
  <div id="app" class="shapla-vue-components--demo">
    <div class="container">
      <h4>Single Switch</h4>

      <shapla-switch v-model="singleSwitch">Enable this</shapla-switch>

      <shapla-switch v-model="singleSwitch" disabled>Disabled Switch</shapla-switch>

      <pre><code>{{ singleSwitch }}</code></pre>
    </div>
    <div class="container">
      <h4>Multiple Switch</h4>

      <shapla-switch v-model="multiSwitches" value="one">If checked, value should be added one.</shapla-switch>
      <shapla-switch v-model="multiSwitches" value="two">If checked, value should be added two.</shapla-switch>
      <shapla-switch v-model="multiSwitches" value="three">If checked, value should be added three.</shapla-switch>
      <shapla-switch v-model="multiSwitches" value="four" readonly>
        Readonly field, you cannot change it
      </shapla-switch>

      <pre><code>{{ multiSwitches }}</code></pre>
    </div>
  </div>
</template>

<script>
import shaplaSwitch from "../src/shaplaSwitch";

export default {
  name: 'app',
  components: {shaplaSwitch},
  data() {
    return {
      singleSwitch: false,
      multiSwitches: ['four'],
    }
  }
}
</script>

<style lang="scss">
// Blocks
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

// Headings
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}

// List
ul {
  list-style: none;
}

// Form
button,
input,
select,
textarea {
  margin: 0;
}

// Box sizing
html {
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

// Media
img,
embed,
iframe,
object,
audio,
video {
  height: auto;
  max-width: 100%;
}

// Iframe
iframe {
  border: 0;
}

// Table
table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
  text-align: left;
}

body {
  background-color: #f1f1f1;
}

.container {
  background-color: white;
  max-width: 1040px;
  margin: 1em auto;
  padding: 1em;
}
</style>
