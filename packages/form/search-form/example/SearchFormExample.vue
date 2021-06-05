<template>
  <div>
    <div style="margin-bottom: 1rem;">
      <search-form/>
    </div>
    <search-form font-size="18px"/>
  </div>
</template>

<script>
import searchForm from "@/searchForm";

export default {
  name: "SearchFormExample",
  components: {searchForm}
}
</script>

<style lang="scss">
.sr-only {
  border: none !important;
  clip: rect(0, 0, 0, 0) !important;
  height: 0.01em !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 0.01em !important;
}
</style>
