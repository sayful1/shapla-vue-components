<template>
  <div id="app" class="shapla-vue-components--demo">
    <div class="container">
      <field-options
          label="Single Option"
          help-text="Example with single value"
          v-model="options"
      />
    </div>
    <div class="container">
      <field-options
          label="Multiple Options"
          help-text="Example with multiple values"
          v-model="multipleOptions"
          :multiple="true"
      />
    </div>
  </div>
</template>

<script>
import FieldOptions from "../src/FieldOptions";

export default {
  name: 'app',
  components: {FieldOptions},
  data() {
    return {
      options: [{label: 'Option', value: 'option', selected: false}],
      multipleOptions: [{label: 'Option', value: 'option', selected: false}],
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
