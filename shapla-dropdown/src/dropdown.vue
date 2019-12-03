<template>
    <div :class="wrapperClasses">
        <div class="dropdown-trigger" aria-haspopup="true" :aria-expanded="isActive?'true':'false'"
             @click.prevent="isActive = !isActive">
            <slot name="trigger"></slot>
        </div>
        <div class="dropdown-menu" role="menu">
            <div class="dropdown-content">
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
        }
    }
</script>

<style lang="scss">
    @import "dropdown";
</style>