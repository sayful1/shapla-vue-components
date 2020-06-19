<template>
    <div class="shapla-sidenav" :class="navClasses" :style="`--shapla-side-navigation-width:${navWidth}`">
        <div class="shapla-sidenav__background" v-if="showOverlay" @click="closeNav"></div>
        <div class="shapla-sidenav__body" :style="sidenavBodyStyle">
            <div class="shapla-sidenav__content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sideNavigation",

        props: {
            active: {type: Boolean, default: true},
            showOverlay: {type: Boolean, default: true},
            navWidth: {type: String, default: '300px'},
            position: {
                type: String,
                default: 'left',
                validator: value => ['left', 'right', 'bottom', 'top'].indexOf(value) !== -1
            },
        },

        data() {
            return {
                bodyWidth: '300px',
            }
        },

        mounted() {
            this.bodyWidth = this.navWidth;
        },

        methods: {
            closeNav() {
                this.$emit('close');
            },
        },
        computed: {
            navClasses() {
                return {
                    'shapla-sidenav--left': this.position === 'left',
                    'shapla-sidenav--right': this.position === 'right',
                    'shapla-sidenav--bottom': this.position === 'bottom',
                    'shapla-sidenav--top': this.position === 'top',
                    'is-active': this.active,
                };
            },
            sidenavBodyStyle() {
                if (['left', 'right'].indexOf(this.position) !== -1) {
                    return {width: this.bodyWidth};
                }
                return {height: this.bodyWidth};
            }
        }
    }
</script>

<style lang="scss">
    @import "sidenav";
</style>
