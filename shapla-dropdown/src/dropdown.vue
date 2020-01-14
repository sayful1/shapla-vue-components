<template>
    <div :class="wrapperClasses">
        <div class="dropdown-trigger" aria-haspopup="true" :aria-expanded="isActive"
             @click.prevent="isActive = !isActive">
            <slot name="trigger"></slot>
        </div>
        <div class="dropdown-menu" :role="role">
            <div class="dropdown-content" @click="handleDropdownContentClick">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dropdown",
        props: {
            hoverable: {type: Boolean, default: true},
            right: {type: Boolean, default: false},
            up: {type: Boolean, default: false},
            closeOnSelect: {type: Boolean, default: false},
            role: {type: String, default: 'menu'},
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

                if (this.right) {
                    classes.push('is-right');
                }

                if (this.up) {
                    classes.push('is-up');
                }

                if (this.isActive) {
                    classes.push('is-active');
                }

                return classes;
            }
        },
        methods: {
            handleDropdownContentClick() {
                if (this.isActive && this.closeOnSelect) {
                    this.isActive = false;
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "dropdown";
</style>