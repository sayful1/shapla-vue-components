<template>
    <div class="shapla-dashboard">
        <div class="shapla-layout__header">

            <div class="shapla-layout-burger shapla-icon is-hoverable" @click="openSideNavigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" fill="currentColor"/>
                </svg>
            </div>

            <slot name="navbar-brand">
                <div class="shapla-layout-title" v-if="title">{{title}}</div>
            </slot>

            <div class="shapla-layout-spacer"></div>

            <slot name="navbar-end">
                <div class="shapla-icon is-hoverable">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M0 0h24v24H0z" fill="none"/>
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"
                              fill="currentColor"/>
                    </svg>
                </div>
            </slot>

        </div>

        <side-navigation :active="activateSideNav" @close="closeSideNavigation" position="left">
            <div class="sidenav-customer-profile">
                <div class="sidenav-customer-profile__avatar" v-if="avatarUrl">
                    <img :src="avatarUrl" :alt="userDisplayName">
                </div>
                <div class="sidenav-customer-profile__name">
                    <div class="sidenav-customer-profile__name">
                        <span v-if="greeting" v-text="greeting">Hello,</span>
                        <b v-if="userDisplayName">{{userDisplayName}}</b>
                    </div>
                </div>
            </div>

            <div class="sidenav-menu">
                <slot name="sidenav-menu"></slot>
            </div>
        </side-navigation>

        <div class="shapla-layout__content">
            <div class="shapla-layout__content-inner">
                <slot></slot>
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
            greeting: {type: String},
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
            new SimpleBar(this.$el.querySelector('.sidenav-menu'));
            new SimpleBar(this.$el.querySelector('.shapla-layout__content'));
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