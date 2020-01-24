<template>
    <div class="shapla-dashboard">

        <div class="shapla-dashboard-header">

            <div class="shapla-dashboard-header__burger shapla-icon is-hoverable" @click="openSideNavigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"/>
                </svg>
            </div>

            <slot name="navbar-brand">
                <div class="shapla-dashboard-header__title" v-if="title">{{title}}</div>
            </slot>

            <slot name="navbar-start">&nbsp;</slot>

            <div class="shapla-dashboard-header__spacer"></div>

            <slot name="navbar-end">&nbsp;</slot>

        </div>

        <side-navigation :active="activateSideNav" @close="closeSideNavigation" position="left">
            <div class="shapla-dashboard-sidenav-profile">
                <div class="shapla-dashboard-sidenav-profile__avatar" v-if="avatarUrl">
                    <img :src="avatarUrl" :alt="userDisplayName">
                </div>
                <div class="shapla-dashboard-sidenav-profile__name" v-if="userDisplayName">
                    <span v-if="greeting">{{greeting}}</span>
                    <span style="display: inline-flex;width:4px;height:1em;">&nbsp;</span>
                    <b v-if="userDisplayName">{{userDisplayName}}</b>
                </div>
            </div>

            <div class="shapla-dashboard-sidenav-menu">
                <slot name="sidenav-menu">&nbsp;</slot>
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
    import sideNavigation from 'shapla-side-navigation';
    import SimpleBar from 'simplebar';

    export default {
        name: "dashboardLayout",
        components: {sideNavigation},
        props: {
            activateSideNav: {type: Boolean, default: false},
            title: {type: String},
            userDisplayName: {type: String},
            avatarUrl: {type: String},
            greeting: {type: String, default: 'Hello,'},
        },
        methods: {
            openSideNavigation() {
                this.$emit('open:sidenav');
            },
            closeSideNavigation() {
                this.$emit('close:sidenav');
            }
        },
        mounted() {
            document.querySelector('body').classList.add('has-shapla-dashboard');
            setTimeout(() => {
                new SimpleBar(this.$el.querySelector('.shapla-dashboard-sidenav-menu'));
                new SimpleBar(this.$el.querySelector('.shapla-dashboard-content'));
            }, 100);
        }
    }
</script>

<style lang="scss">
    @import "icon";
    @import "dashboard";
    @import "dashboard-sidenav";
    @import "sidenav-list";
    @import "~simplebar/src/simplebar.css";
</style>