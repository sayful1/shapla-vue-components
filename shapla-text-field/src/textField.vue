<template>
    <div class="shapla-text-field" :class="classes">

        <div class="shapla-text-field__control" @mouseenter="isHovered = true" @mouseleave="isHovered = false">
            <input class="shapla-text-field__input" :type="type" :id="id" :name="name" :value="value"
                   :required="required" :disabled="disabled" :autocomplete="autocomplete" placeholder=""
                   @focus="isFocus = true" @blur="isFocus = false" @input="handleInputEvent($event)"
            />
            <label class="shapla-text-field__label" :for="id" v-if="label" v-html="label"/>
        </div>
        <small class="shapla-text-field__validation" v-if="validationText" v-html="validationText"/>
        <small class="shapla-text-field__help-text" v-if="helpText" v-html="helpText"/>

    </div>
</template>

<script>
    export default {
        name: 'textField',
        props: {
            type: {
                type: String,
                default: 'text',
                validator: value => (['text', 'email', 'search', 'password', 'tel', 'url', 'number'].indexOf(value) !== -1),
            },
            value: {type: [Number, String]},
            label: {type: String, required: true},
            autocomplete: {type: String},
            name: {type: String, required: false},
            id: {type: String, required: false},
            helpText: {type: String, required: false},
            validationText: {type: String, required: false},
            hasError: {type: Boolean, default: false},
            hasSuccess: {type: Boolean, default: false},
            disabled: {type: Boolean, default: false},
            required: {type: Boolean, default: false},
        },
        data() {
            return {
                isHovered: false,
                isFocus: false,
            }
        },
        computed: {
            hasValue() {
                return !!this.value.length;
            },
            classes() {
                let classes = [];

                if (this.hasError) {
                    classes.push('has-error');
                }

                if (this.isHovered && !this.isFocus) {
                    classes.push('is-hovered');
                }

                if (this.isFocus) {
                    classes.push('is-focused');
                }

                if (this.disabled) {
                    classes.push('is-disabled');
                }

                return classes;
            }
        },
        methods: {
            handleInputEvent(event) {
                this.$emit('input', event.target.value);
            }
        }
    }
</script>

<style lang="scss">
    @import "text-field";
</style>
