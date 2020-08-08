<template>
    <div class="shapla-multistep-tab" :class="itemClasses" @click="handleClick">
        <div class="shapla-multistep-tab__outer">
            <div class="shapla-multistep-tab__inner">

                <div class="shapla-multistep-tab__number-wrapper">
                    <div class="shapla-multistep-tab__number">
                        <span class="shapla-multistep-tab__number-text">{{localItem.number_text}}</span>
                        <span class="shapla-multistep-tab__completed-icon" v-if="localItem.completed">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                <path d="M0 0h24v24H0z" fill="none"/>
                                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
                            </svg>
                        </span>
                    </div>
                </div>

                <div class="shapla-multistep-tab__text">
                    <span>{{localItem.tab_text}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "StepProgressItem",
        props: {
            layout: {
                type: String,
                default: 'outline',
                validator: value => ['outline', 'square', 'arrow', 'progress-bar'].indexOf(value) !== -1
            },
            orientation: {
                type: String,
                default: 'horizontal',
                validator: value => ['horizontal'].indexOf(value) !== -1
            },
            item: {type: Object, required: true},
        },
        data() {
            return {
                localItem: {}
            }
        },
        computed: {
            itemClasses() {
                let classes = [];
                // classes.push(`is-layout-${this.layout}`);
                if (this.localItem.current) {
                    classes.push('is-current');
                }
                if (this.localItem.completed) {
                    classes.push('is-completed');
                }
                return classes;
            }
        },
        mounted() {
            this.localItem = Object.assign(
                {key: '', number_text: '', completed: false, current: false,},
                this.item
            );
        },
        methods: {
            handleClick() {
                this.$emit('click', this.item);
            }
        }
    }
</script>

<style lang="scss">
    @import "styles/shapla-multistep-tab";
    @import "styles/layout-outline";
    @import "styles/layout-square";
</style>