<template>
    <div class="shapla-dropdown-menu" :class="classes" :role="role">
        <div class="shapla-dropdown-menu__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "dropdownMenu",
        props: {
            active: {
                type: Boolean,
                default: false
            },
            role: {
                type: String,
                default: 'menu'
            },
            right: {
                type: Boolean,
                default: false
            },
            up: {
                type: Boolean,
                default: false
            },
            direction: {
                type: String,
                default: 'auto',
                validator: value => ['auto', 'up', 'down'].indexOf(value) !== -1
            },
        },
        data() {
            return {
                classes: [],
            }
        },
        watch: {
            active(isActive) {
                if (isActive) {
                    if (this.direction === 'auto') {
                        this.calculateDirection();
                    }
                    this.classes.push('is-active');
                } else {
                    this.classes.splice(this.classes.indexOf('is-active'), 1);
                }
            }
        },
        mounted() {
            if (this.right) {
                this.classes.push('is-right');
            }

            if (this.up || this.direction === 'up') {
                this.classes.push('is-up');
            }
        },
        methods: {
            calculateDirection() {
                let browserHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight,
                    elParent = this.$el.parentNode,
                    rect = elParent.getBoundingClientRect(),
                    win = elParent.ownerDocument.defaultView,
                    elFromTop = parseInt(rect.top + win.pageYOffset),
                    spaceToBottom = browserHeight - elFromTop;

                let index = this.classes.indexOf('is-up');
                if (spaceToBottom > elFromTop && -1 !== index) {
                    this.classes.splice(index, 1);
                }
                if (spaceToBottom < elFromTop && -1 === index) {
                    this.classes.push('is-up');
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "dropdown-menu";
</style>