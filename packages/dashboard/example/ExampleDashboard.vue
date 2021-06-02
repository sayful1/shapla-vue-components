<template>
  <shapla-dashboard
    :activate-side-nav="activeSidenav"
    @open:sidenav="activeSidenav = true"
    @close:sidenav="activeSidenav = false"
    title="Dashboard"
    user-display-name="Sayful Islam"
    avatar-url="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
  >
    <template v-slot:sidenav-menu>
      <ul class="sidenav-list">
        <li class="sidenav-list__item"><a class="sidenav-list__link" href="">Link 1</a></li>
        <li class="sidenav-list__item"><a class="sidenav-list__link" href="">Link 2</a></li>
        <li class="sidenav-list__item"><a class="sidenav-list__link" href="">Link 3</a></li>
        <li class="sidenav-list__item"><a class="sidenav-list__link" href="">Link 4</a></li>
      </ul>
    </template>
    Content should goe here.
  </shapla-dashboard>
</template>

<script>
import ShaplaDashboard from "../src";
import {ref} from 'vue'

export default {
  name: "ExampleDashboard",
  components: {ShaplaDashboard},
  setup() {
    const activeSidenav = ref(false);

    return {
      activeSidenav
    }
  }
}
</script>

<style scoped>

</style>
