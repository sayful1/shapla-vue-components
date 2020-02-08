<template>
    <div :class="classes" :style="containerStyles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "imageContainer",
        props: {
            containerWidth: {type: String, required: false},
            containerHeight: {type: String, required: false},
            heightRatio: {type: Number, required: false, default: 1},
            widthRatio: {type: Number, required: false, default: 1},
            isRounded: {type: Boolean, required: false, default: false},
        },
        computed: {
            classes() {
                return [
                    'shapla-image-container',
                    {'is-fullwidth': !this.containerWidth},
                    {'is-rounded': this.isRounded},
                ]
            },
            containerStyles() {
                let styles = [];

                if (this.containerWidth) {
                    styles.push({width: this.containerWidth});
                    styles.push({height: this.containerHeight ? this.containerHeight : this.containerWidth});
                } else {
                    styles.push({paddingTop: (100 / this.widthRatio * this.heightRatio) + '%'});
                }

                return styles;
            }
        }
    }
</script>

<style lang="scss">
    .shapla-image-container {
        display: block;
        position: relative;

        &.is-fullwidth {
            width: 100%;
        }

        &.is-rounded > * {
            border-radius: 290486px;
        }

        > * {
            display: block;
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 0;
            height: 100%;
            width: 100%;
        }
    }
</style>
