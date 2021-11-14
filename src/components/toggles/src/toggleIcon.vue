<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path v-if="icon === 'minus'" d="M19 13H5v-2h14v2z"/>
    <path v-if="icon === 'plus'" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
  </svg>
</template>

<script>
export default {
  name: "toggleIcon",
  props: {
    icon: {type: String, required: true}
  }
}
</script>

<style>

</style>
