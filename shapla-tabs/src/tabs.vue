<template>
    <div :class="tabsClasses">
        <div :class="tabClasses">
            <ul class="shapla-tabs__nav">
                <li v-for="(tab, index) in tabs" class="shapla-tabs__nav-item" :class="{'is-active': tab.isActive}"
                    :key="index">
                    <a @click.prevent="changeSelectedTab(tab)" :href="tab.href">{{tab.name}}</a>
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
            alignment: {
                type: String,
                default: 'left',
                validator: value => ['left', 'center', 'right'].indexOf(value) !== -1
            },
            size: {
                type: String,
                default: 'default',
                validator: value => ['default', 'small', 'medium', 'large'].indexOf(value) !== -1
            },
            tabStyle: {
                type: String,
                default: 'default',
                validator: value => ['default', 'boxed', 'rounded', 'toggle'].indexOf(value) !== -1
            },
            fullwidth: {
                type: Boolean,
                default: false
            },
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
            },
            tabClasses() {
                let classes = ['shapla-tabs__tab'];
                if (this.fullwidth) classes.push('is-fullwidth');
                if (this.alignment === 'center') classes.push('is-centered');
                if (this.alignment === 'right') classes.push('is-right');
                if (this.size === 'small') classes.push('is-small');
                if (this.size === 'medium') classes.push('is-medium');
                if (this.size === 'large') classes.push('is-large');
                if (this.tabStyle === 'boxed') classes.push('is-boxed');
                if (this.tabStyle === 'toggle' || this.tabStyle === 'rounded') classes.push('is-toggle');
                if (this.tabStyle === 'rounded') classes.push('is-toggle-rounded');
                return classes
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