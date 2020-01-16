<template>
    <div :class="wrapperClasses">
        <div class="dropdown-trigger" aria-haspopup="true" :aria-expanded="isActive"
             @click.prevent="isActive = !isActive">
            <slot name="trigger"></slot>
        </div>
        <dropdown-menu :active="isActive" :role="role" :right="right" :up="up" @click:content="handleContentClick">
            <slot></slot>
        </dropdown-menu>
    </div>
</template>

<script>
    import dropdownMenu from "./dropdownMenu";

    export default {
        name: "dropdown",
        components: {dropdownMenu},
        props: {
            hoverable: {type: Boolean, default: true},
            role: {type: String, default: 'menu'},
            right: {type: Boolean, default: false},
            up: {type: Boolean, default: false},
            closeOnSelect: {type: Boolean, default: false},
        },
        data() {
            return {
                isActive: false,
            }
        },
        watch: {
            isActive(isActive) {
                if (isActive) {
                    document.addEventListener('click', event => {
                        if (!event.target.closest('.dropdown')) {
                            this.isActive = false;
                        }
                    });
                }
            }
        },
        computed: {
            wrapperClasses() {
                let classes = ['dropdown'];

                if (this.hoverable) {
                    classes.push('is-hoverable');
                }

                return classes;
            }
        },
        methods: {
            handleContentClick() {
                if (this.isActive && this.closeOnSelect) {
                    this.isActive = false;
                }
            }
        }
    }
</script>

<style lang="scss">
    .dropdown {
        display: inline-flex;
        position: relative;
        vertical-align: top;

        &.is-hoverable:hover {
            .dropdown-menu {
                display: block
            }
        }
    }
</style>