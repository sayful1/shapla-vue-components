<template>
    <div :class="tabsClasses">
        <div class="shapla-tabs__tab">
            <ul class="shapla-tabs__nav">
                <li v-for="tab in tabs" class="shapla-tabs__nav-item" :class="{'is-active': tab.isActive}">
                    <a @click="changeSelectedTab(tab)" :href="tab.href">{{tab.name}}</a>
                </li>
            </ul>
        </div>

        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs",
        props: {
            vertical: {type: Boolean, default: false},
            fullwidth: {type: Boolean, default: false},
            alignment: {type: String, default: 'left'},
            size: {type: String, default: ''},
            tabStyle: {type: String, default: ''},
        },
        data() {
            return {
                tabs: [],
            }
        },
        computed: {
            tabsClasses() {
                return {
                    'shapla-tabs': true,
                    'shapla-tabs--vertical': this.vertical
                }
            }
        },
        methods: {
            changeSelectedTab(selectedTab) {
                this.tabs.forEach(tab => {
                    tab.isActive = (tab.name === selectedTab.name);
                });
            }
        },
        created() {
            this.tabs = this.$children;
        },
    }
</script>

<style lang="scss">
    @import "tabs";
</style>