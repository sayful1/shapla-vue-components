<template>
    <div class="shapla-input-slider">
        <input class="shapla-input-slider__range" type="range" :value="value" :min="min" :max="max" :step="step"
               @input="triggerInput($event)">
        <div class="shapla-input-slider__input-container" v-show="showInput">
            <input type="number" class="shapla-input-slider__input" :value="value" :min="min" :max="max" :step="step"
                   @input="triggerInput($event)">
        </div>
        <div class="shapla-input-slider__reset" title="Reset to default value" @click="resetToDefault"
             v-show="showReset">
            <shapla-button shadow fab theme="primary">
                <svg class="shapla-input-slider__reset-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                     viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0V0z"/>
                    <path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
                </svg>
            </shapla-button>
        </div>
    </div>
</template>

<script>
    import shaplaButton from 'shapla-button';

    export default {
        name: "inputSlider",
        model: {prop: 'value', event: 'input'},
        components: {shaplaButton},
        props: {
            value: {type: [Number, String]},
            default: {type: Number, default: 0},
            min: {type: Number, required: false},
            max: {type: Number, required: false},
            step: {type: Number, required: false},
            showReset: {type: Boolean, default: true},
            showInput: {type: Boolean, default: true}
        },
        methods: {
            triggerInput(event) {
                this.$emit('input', this.formatNumber(event.target.value));
            },
            resetToDefault() {
                this.$emit('input', this.formatNumber(this.default));
            },
            formatNumber(value) {
                let _value = Number.parseFloat(value);
                return Number.isNaN(_value) ? 0 : _value;
            }
        }
    }
</script>

<style lang="scss">
    @import "slider";
</style>
