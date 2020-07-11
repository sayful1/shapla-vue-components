<template>
    <div id="app" class="shapla-vue-components--demo">
        <div class="shapla-layout__header">
            <div class="shapla-icon shapla-icon-button m-r-20" @click="activateSideNav = true">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"/>
                </svg>
            </div>
            <div class="shapla-layout-title">Shapla Vue Components</div>
            <div class="shapla-layout-spacer"></div>
            <div class="shapla-icon shapla-icon-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                          fill="currentColor"/>
                </svg>
            </div>
        </div>

        <side-navigation :active="activateSideNav" @close="activateSideNav = false" position="left">
            <div class="sidenav-customer-profile">
                <div class="sidenav-customer-profile__avatar" v-if="current_user.avatarUrl">
                    <img :src="current_user.avatarUrl" :alt="current_user.name">
                </div>
                <div class="sidenav-customer-profile__name">
                    <span>Hello,</span>
                    <b>{{current_user.name}}</b>
                </div>
            </div>

            <div class="sidenav-menu">
                <ul class="sidenav-list">
                    <li class="sidenav-list__item" v-for="menuItem in menuItems" :key="menuItem.routerName">
                        <a class="sidenav-list__link" :class="{'is-active':$route.name === menuItem.routerName}"
                           href="#" @click.prevent="handleMenuItemClick(menuItem)">{{menuItem.label}}</a>
                    </li>
                </ul>
            </div>
        </side-navigation>

        <div class="shapla-layout__content">
            <div class="shapla-layout__content-inner">
                <router-view/>
            </div>
        </div>
    </div>
</template>

<script>
    import sideNavigation from "shapla-side-navigation";
    import menuItems from "./menuItems";
    import SimpleBar from 'simplebar';

    export default {
        name: 'app',
        components: {sideNavigation},
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
            new SimpleBar(this.$el.querySelector('.sidenav-menu'));
        }
    }
</script>

<style lang="scss">
    @import "scss/frontend";
    @import "~simplebar/src/simplebar.css";
</style>
