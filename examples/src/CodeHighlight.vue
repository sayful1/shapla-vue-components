<template>
  <div class="shapla-code-highlight">
    <slot></slot>
  </div>
</template>

<script>
import hljs from "highlight.js";

export default {
  name: "CodeHighlight",
  mounted() {
    this.$el.querySelectorAll('pre code').forEach(element => {
      hljs.highlightBlock(element);
    })
  }
}
</script>

<style scoped>

</style>
