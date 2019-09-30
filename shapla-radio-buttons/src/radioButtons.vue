<template>
    <div class="shapla-radio-button">
        <label v-for="option in options" class="shapla-radio-button__label" :class="getClasses(option)">
            <input type="radio" class="shapla-radio-button__input"
                   :checked="option.value === value"
                   :value="option.value"
                   @change="updateInput(option.value)"
            >
            <span class="shapla-radio-button__text"><slot>{{ option.label }}</slot></span>
        </label>
    </div>
</template>

<script>
    export default {
        name: "radioButtons",
        model: {prop: 'value', event: 'change'},
        props: {
            options: {type: Array, required: true},
            value: {type: String, default: ''},
        },
        methods: {
            getClasses(option) {
                return {
                    'is-checked': option.value === this.value
                }
            },
            updateInput(value) {
                this.$emit('change', value);
            }
        }
    }
</script>

<style lang="scss">
    .shapla-radio-button {
        display: flex;
        flex-wrap: wrap;

        &__label {
            background: rgba(#000, .05);
            color: rgba(#000, .85);
            cursor: pointer;
            flex-grow: 1;
            font-size: 1rem;
            padding: 0.5em 1em;
            position: relative;
            text-align: center;

            &:first-child {
                border-top-left-radius: 4px;
                border-bottom-left-radius: 4px;
            }

            &:last-child {
                border-top-right-radius: 4px;
                border-bottom-right-radius: 4px;
            }

            &:not(.is-checked):hover {
                background: rgba(#000, .1);
            }

            &.is-checked {
                background-color: var(--shapla-primary, green);
                color: var(--shapla-on-primary, #fff);
            }
        }

        &__input {
            opacity: 0;
            position: absolute;
        }

        &__text {
        }
    }
</style>