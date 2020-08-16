<template>
  <div class="shapla-vue-components--welcome">
    <div class="about-title">Welcome <b>Sayful</b></div>
    <div class="about-description">We’ve assembled some links to get you started:</div>

    <columns :multiline="true" class="sidenav-list">
      <column :tablet="4" :desktop="3" :widescreen="2" class="sidenav-list__item" v-for="menuItem in menuItems"
              :key="menuItem.routerName">
        <shapla-button :fullwidth="true" size="medium" @click="handleMenuItemClick(menuItem)">
          {{ menuItem.label }}
        </shapla-button>
      </column>
    </columns>
  </div>
</template>

<script>
import menuItems from "./menuItems";
import shaplaButton from "shapla-button";
import {columns, column} from 'shapla-columns'

export default {
  name: "Home",
  components: {shaplaButton, columns, column},
  data() {
    return {
      menuItems: menuItems,
    }
  },
  methods: {
    handleMenuItemClick(menuItem) {
      if (this.$route.name !== menuItem.routerName) {
        this.$router.push({name: menuItem.routerName});
      }
    }
  }
}
</script>

<style scoped>

</style>
