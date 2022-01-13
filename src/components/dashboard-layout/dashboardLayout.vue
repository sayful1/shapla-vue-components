<template>
  <div
    class="shapla-dashboard"
    :class="dashboardClasses"
    :style="dashboardStyles"
  >
    <div
      class="shapla-dashboard-header"
      :class="headerClasses"
    >
      <div
        class="shapla-dashboard-header__burger"
        @click="toggleSideNavigation"
      >
        <icon-container :hoverable="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              fill="currentColor"
            />
          </svg>
        </icon-container>
      </div>

      <slot name="navbar-brand">
        <div
          v-if="title"
          class="shapla-dashboard-header__title"
        >
          {{ title }}
        </div>
      </slot>

      <slot name="navbar-start">
&nbsp;
      </slot>

      <div class="shapla-dashboard-header__spacer" />

      <slot name="navbar-end">
&nbsp;
      </slot>
    </div>

    <side-navigation
      :active="activateSideNav"
      :nav-width="navWidth"
      :show-overlay="showOverlay"
      position="left"
      @close="closeSideNavigation"
    >
      <div
        class="shapla-dashboard-sidenav-profile"
        :class="sidenavProfileClass"
      >
        <div
          v-if="avatarUrl"
          class="shapla-dashboard-sidenav-profile__avatar"
        >
          <img
            :src="avatarUrl"
            :alt="userDisplayName"
          >
        </div>
        <div
          v-if="userDisplayName"
          class="shapla-dashboard-sidenav-profile__name"
        >
          <span v-if="greeting">{{ greeting }}</span>
          <b v-if="userDisplayName">{{ userDisplayName }}</b>
        </div>
      </div>

      <div class="shapla-dashboard-sidenav-menu">
        <slot name="sidenav-menu">
&nbsp;
        </slot>
      </div>
    </side-navigation>

    <div class="shapla-dashboard-content">
      <div class="shapla-dashboard-content__inner">
        <slot>&nbsp;</slot>
      </div>
    </div>
  </div>
</template>

<script>
import sideNavigation from '../side-navigation/sideNavigation.vue';
import iconContainer from "../icon-container/iconContainer.vue";

export default {
  name: "DashboardLayout",
  components: {sideNavigation, iconContainer},
  props: {
    title: {type: String},
    userDisplayName: {type: String},
    avatarUrl: {type: String},
    greeting: {type: String, default: 'Hello,'},
    headerHeight: {type: String, default: '56px'},
    headerTheme: {
      type: String,
      default: 'primary',
      validator: value => ['default', 'primary', 'secondary'].indexOf(value) !== -1
    },
    sideNavType: {
      type: String,
      default: 'overlay',
      validator: value => ['overlay', 'off-canvas'].indexOf(value) !== -1
    },
    // Side navigation props
    activateSideNav: {type: Boolean, default: false},
    showOverlay: {type: Boolean, default: true},
    navWidth: {type: String, default: '300px'},
  },
  computed: {
    dashboardClasses() {
      let classes = [];
      classes.push(`sidenav-type--${this.sideNavType}`);
      if (this.activateSideNav) {
        classes.push('is-sidenav-active');
      }
      return classes;
    },
    dashboardStyles() {
      let styles = {};
      styles['--shapla-dashboard-header-height'] = this.headerHeight;
      styles['--shapla-dashboard-sidenav-width'] = this.navWidth;
      return styles;
    },
    headerClasses() {
      let classes = [];
      classes.push(`theme-${this.headerTheme}`);
      return classes;
    },
    sidenavProfileClass() {
      let classes = [];
      classes.push(`theme-${this.headerTheme}`);
      return classes;
    }
  },
  mounted() {
    document.querySelector('body').classList.add('has-shapla-dashboard');
  },
  methods: {
    toggleSideNavigation() {
      if (this.activateSideNav) {
        this.closeSideNavigation();
      } else {
        this.openSideNavigation();
      }
    },
    openSideNavigation() {
      this.$emit('open:sidenav');
    },
    closeSideNavigation() {
      this.$emit('close:sidenav');
    }
  }
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.dashboard;
</style>
