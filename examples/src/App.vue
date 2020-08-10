<template>
  <div id="app" class="shapla-vue-components--demo">
    <dashboard-layout
        title="Shapla Vue Components"
        :activate-side-nav="activateSideNav"
        @open:sidenav="activateSideNav = true"
        @close:sidenav="activateSideNav = false"
        user-display-name="Sayful Islam"
        avatar-url="https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?s=80"
        greeting="Hello, "
    >
      <template v-slot:sidenav-menu>
        <ul class="sidenav-list">
          <li class="sidenav-list__item" v-for="menuItem in menuItems" :key="menuItem.routerName">
            <a class="sidenav-list__link" :class="{'is-active':$route.name === menuItem.routerName}"
               href="#" @click.prevent="handleMenuItemClick(menuItem)">{{ menuItem.label }}</a>
          </li>
        </ul>
      </template>
      <router-view/>
    </dashboard-layout>
  </div>
</template>

<script>
import dashboardLayout from 'shapla-dashboard-layout';
import menuItems from "./menuItems";
import SimpleBar from 'simplebar';

export default {
  name: 'app',
  components: {dashboardLayout},
  data() {
    return {
      activateSideNav: false,
      menuItems: menuItems,
      current_user: {
        name: '',
        avatarUrl: ''
      }
    }
  },
  methods: {
    handleMenuItemClick(menuItem) {
      this.activateSideNav = false;
      if (this.$route.name !== menuItem.routerName) {
        this.$router.push({name: menuItem.routerName});
      }
    }
  },
  mounted() {
    new SimpleBar(this.$el.querySelector('.shapla-dashboard-sidenav-menu'));
    new SimpleBar(this.$el.querySelector('.shapla-dashboard-content'));
  }
}
</script>

<style lang="scss">
@import "scss/frontend";
@import "~simplebar/src/simplebar.css";
@import "~highlight.js/scss/github";

.section {
	margin-bottom: 3rem;
}

.section-title {
	border-bottom: 1px solid rgba(#000, 0.12);
	font-size: 24px;
	font-weight: 600;
	margin-bottom: 15px;
	padding-bottom: 15px;
	line-height: 1.2;
}
</style>
