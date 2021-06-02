<template>
  <div>
    <h1>Font awasome</h1>
    <div>
      <shapla-icon size="medium" hoverable><i class="far fa-address-book"></i></shapla-icon>
    </div>
  </div>
</template>

<script>
import {ShaplaIcon} from "../src";

export default {
  name: "ExampleIcon",
  components: {ShaplaIcon}
}
</script>

<style lang="scss">
@import url("https://unpkg.com/@fortawesome/fontawesome-free/css/all.css");
</style>
