<template>
  <div>
    <image-container container-width="32px" container-height="32px">
      <img src="https://via.placeholder.com/48x48">
    </image-container>
    <image-container container-width="32px" container-height="32px" is-rounded>
      <img src="https://via.placeholder.com/128x128">
    </image-container>
    <div style="width: 420px;height: 560px;">
      <image-container :width-ratio="3" :height-ratio="4">
        <img src="https://via.placeholder.com/420x560">
      </image-container>
    </div>
    <div style="width: 420px;height: 560px;">
      <image-container :width-ratio="16" :height-ratio="9">
        <iframe class="" width="640" height="360" src="https://www.youtube.com/embed/YE7VzlLtp-4?showinfo=0"
                frameborder="0" allowfullscreen></iframe>
      </image-container>
    </div>
  </div>
</template>

<script>
import ShaplaImage from "../src";

export default {
  name: "ExampleImage",
  components: {'image-container': ShaplaImage}
}
</script>

<style lang="scss">

</style>
