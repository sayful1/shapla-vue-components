<template>
    <div class="dropdown-menu" :class="menuClasses" :role="role">
        <div class="dropdown-menu__content" @click="handleContentClick">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dropdownMenu",
        props: {
            active: {type: Boolean, default: false},
            role: {type: String, default: 'menu'},
            right: {type: Boolean, default: false},
            up: {type: Boolean, default: false},
        },
        computed: {
            menuClasses() {
                let classes = [];

                if (this.right) {
                    classes.push('is-right');
                }

                if (this.up) {
                    classes.push('is-up');
                }

                if (this.active) {
                    classes.push('is-active');
                }

                return classes;
            }
        },
        methods: {
            handleContentClick() {
                this.$emit('click:content');
            }
        }
    }
</script>

<style lang="scss">
    @import "dropdown";
</style>