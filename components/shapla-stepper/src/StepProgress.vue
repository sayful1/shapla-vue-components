<template>
    <div class="shapla-multistep-tabs" :class="wrapperClasses">
        <div class="shapla-multistep-tabs__items">
            <step-progress-item
                    :key="step.key"
                    :item="step"
                    v-for="step in steps"
                    :layout="layout"
            />
        </div>
    </div>
</template>

<script>
    import StepProgressItem from "./StepProgressItem";

    export default {
        name: "StepProgress",
        components: {StepProgressItem},
        props: {
            steps: {type: Array, required: true},
            layout: {
                type: String, default: 'outline',
                validator: value => ['outline', 'square', 'arrow', 'progress-bar'].indexOf(value) !== -1
            },
            orientation: {
                type: String,
                default: 'horizontal',
                validator: value => ['horizontal'].indexOf(value) !== -1
            },
        },
        computed: {
            wrapperClasses() {
                return [`is-layout-${this.layout}`, `is-orientation-${this.orientation}`];
            }
        }
    }
</script>

<style lang="scss">
    @import "styles/multistep-tabs";
</style>