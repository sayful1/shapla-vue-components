<template>
    <div class="shapla-toggle-panel" :class="panelClass">
        <div class="shapla-toggle-panel__heading">
            <h4 class="shapla-toggle-panel__title toggle">
                <a href="#" @click.prevent="toggleActive" :class="`shapla-toggle-panel__toggle-icon--${iconPosition}`">
                    <div class="shapla-toggle-panel__icon-wrapper">
                        <template v-if="isSelected">
                            <slot name="close">
                                <svg class="icon-minus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19 13H5v-2h14v2z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                            </slot>
                        </template>
                        <template v-if="!isSelected">
                            <slot name="open">
                                <svg class="icon-plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                                    <path d="M0 0h24v24H0z" fill="none"/>
                                </svg>
                            </slot>
                        </template>
                    </div>
                    <div class="shapla-toggle-panel__title-text">
                        <slot name="title">{{name}}</slot>
                    </div>
                </a>
            </h4>
        </div>
        <div class="shapla-toggle-panel__body" :class="panelBodyClass">
            <div class="shapla-toggle-panel__content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "toggle",
        props: {
            name: {type: String, required: true},
            selected: {type: Boolean, default: false},
            boxedMode: {type: Boolean, default: true},
            iconPosition: {
                type: String,
                default: 'left',
                validator: (value) => -1 !== ['left', 'right'].indexOf(value)
            },
            showDivider: {type: Boolean, default: true},
        },
        data() {
            return {
                isSelected: false,
                panelContent: null,
            }
        },
        computed: {
            panelClass() {
                return {
                    'shapla-toggle-panel--default': true,
                    'shapla-toggle-panel--no-divider': !this.boxedMode,
                    'shapla-toggle-panel--boxed-mode': this.boxedMode,
                }
            },
            panelBodyClass() {
                return {
                    'is-active': this.isSelected,
                }
            }
        },
        mounted() {
            this.isSelected = this.selected;

            this.panelContent = this.$el.querySelector('.shapla-toggle-panel__body');
            this.handleSelect(this.isSelected);
        },
        watch: {
            isSelected(newValue) {
                this.handleSelect(newValue);
            }
        },
        methods: {
            toggleActive() {
                if (this.$parent.accordion && this.$parent.accordion === true) {
                    this.$parent.$children.forEach(element => {
                        if (element !== this && element.isSelected) {
                            element.isSelected = false
                        }
                    });
                }
                this.isSelected = !this.isSelected;
            },
            handleSelect(active) {
                if (active) {
                    this.panelContent.style.maxHeight = this.panelContent.scrollHeight + "px";
                    setTimeout(() => {
                        this.panelContent.style.maxHeight = null;
                    }, 300);
                } else {
                    this.panelContent.style.maxHeight = this.panelContent.scrollHeight + "px";
                    setTimeout(() => {
                        this.panelContent.style.maxHeight = null;
                    }, 10);
                }
            }
        }
    }
</script>

<style lang="scss">
    .shapla-toggle-panel {
        background-color: #ffffff;
        border: 1px none #eeeeee;
        border-bottom-style: solid;
        box-shadow: none;
        font-size: 1rem;

        &:hover {
            // background-color: #f9f9f9;
        }

        &--no-divider {
            border-bottom: none;
        }

        &--boxed-mode {
            border-style: solid;
            margin-bottom: 1em;
            margin-top: 1em;
            cursor: pointer;
        }

        &__title {
            position: relative;
            line-height: 1.5;
            font-size: 1.25em;
            font-weight: 400;
            color: inherit;
            margin: 0;
            padding: 0;

            a {
                align-items: center;
                box-shadow: none;
                display: flex;
                font-size: inherit;
                padding: .75em 1.25em;
                text-decoration: none;
            }

            .shapla-toggle-panel__icon-wrapper,
            svg {
                width: 1em;
                height: 1em;
                overflow: hidden;
            }
        }

        &__icon-wrapper {
            display: flex;
        }

        &__title-text {
            margin-left: 1rem;
        }

        &__body {
            transition: max-height 0.2s ease-out;
            overflow: hidden;

            &:not(.is-active) {
                max-height: 0;
            }
        }

        &__content {
            border: none;
            padding: 10px 25px 15px;
            position: relative;

            &:before,
            &:after {
                display: table;
                content: "";
            }

            &:after {
                clear: both;
            }
        }
    }

    .shapla-toggle-panel__toggle-icon--right {
        display: flex;
        justify-content: space-between;

        .shapla-toggle-panel__icon-wrapper {
            order: 2;
        }

        .shapla-toggle-panel__title-text {
            margin-left: 0;
        }

    }
</style>