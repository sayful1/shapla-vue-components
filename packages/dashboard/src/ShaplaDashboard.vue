<template>
  <div class="shapla-dashboard" :class="dashboardClasses" :style="dashboardStyles">

    <div class="shapla-dashboard-header" :class="headerClasses">

      <div class="shapla-dashboard-header__burger" @click="toggleSideNavigation">
        <shapla-icon :hoverable="true">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"/>
          </svg>
        </shapla-icon>
      </div>

      <slot name="navbar-brand">
        <div class="shapla-dashboard-header__title" v-if="title">{{ title }}</div>
      </slot>

      <slot name="navbar-start"/>

      <div class="shapla-dashboard-header__spacer"></div>

      <slot name="navbar-end"/>

    </div>

    <shapla-sidenav :active="activateSideNav" :nav-width="navWidth" :show-overlay="showOverlay" position="left"
                    @close="closeSideNavigation">
      <div class="shapla-dashboard-sidenav-profile" :class="sidenavProfileClass">
        <div class="shapla-dashboard-sidenav-profile__avatar" v-if="avatarUrl">
          <img :src="avatarUrl" :alt="userDisplayName">
        </div>
        <div class="shapla-dashboard-sidenav-profile__name" v-if="userDisplayName">
          <span v-if="greeting">{{ greeting }}</span>
          <b v-if="userDisplayName">{{ userDisplayName }}</b>
        </div>
      </div>

      <div class="shapla-dashboard-sidenav-menu">
        <slot name="sidenav-menu"/>
      </div>
    </shapla-sidenav>

    <div class="shapla-dashboard-content">
      <div class="shapla-dashboard-content__inner">
        <slot/>
      </div>
    </div>

  </div>
</template>

<script>
import ShaplaSidenav from '@shapla/vue-sidenav';
import ShaplaIcon from "@shapla/vue-icon";
import {computed, onMounted} from "vue";

export default {
  name: "ShaplaDashboard",
  components: {ShaplaSidenav, ShaplaIcon},
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
  emits: ['open:sidenav', 'close:sidenav'],
  setup(props, {emit}) {
    const openSideNavigation = () => emit('open:sidenav')
    const closeSideNavigation = () => emit('close:sidenav')
    const toggleSideNavigation = () => props.activateSideNav ? closeSideNavigation() : openSideNavigation();

    const headerClasses = computed(() => [`theme-${props.headerTheme}`])
    const sidenavProfileClass = computed(() => [`theme-${props.headerTheme}`])
    const dashboardStyles = computed(() => {
      let styles = {};
      styles['--shapla-dashboard-header-height'] = props.headerHeight;
      styles['--shapla-dashboard-sidenav-width'] = props.navWidth;
      return styles;
    });

    const dashboardClasses = computed(() => {
      let classes = [];
      classes.push(`sidenav-type--${props.sideNavType}`);
      if (props.activateSideNav) {
        classes.push('is-sidenav-active');
      }
      return classes;
    })

    onMounted(() => {
      document.querySelector('body').classList.add('has-shapla-dashboard');
    })

    return {
      openSideNavigation,
      closeSideNavigation,
      toggleSideNavigation,
      dashboardClasses,
      dashboardStyles,
      sidenavProfileClass,
      headerClasses
    }
  }
}
</script>

<style lang="scss">
@import "index";
</style>
