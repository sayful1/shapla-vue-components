<template>
    <div class="shapla-text-field">
        <div class="shapla-text-field__control" :class="{'has-icons-right':hasSuccess || hasError}">
            <input class="shapla-text-field__input" :class="inputClasses" :type="type" :id="id" :name="name"
                   :value="value" :required="required" :disabled="disabled" :autocomplete="autocomplete" placeholder=""
                   @focus="isFocus = true" @blur="isFocus = false" @input="handleInputEvent($event)">
            <label class="shapla-text-field__label" :for="id" v-if="label" v-html="label"/>
            <span class="icon is-right" v-if="hasSuccess">
                <svg class="icon-success" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                </svg>
            </span>
            <span class="icon is-right" v-if="hasError">
                <svg class="icon-error" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                </svg>
            </span>
        </div>
        <small class="shapla-text-field__help-text is-invalid" v-if="validationText.length && hasError"
               v-html="validationText"/>
        <small class="shapla-text-field__help-text" v-if="helpText" v-html="helpText"/>
    </div>
</template>

<script>
    import textFieldMixins from "./textFieldMixins";

    export default {
        name: "textField",
        mixins: [textFieldMixins],
        computed: {
            inputClasses() {
                let classes = [];

                if (this.hasSuccess) {
                    classes.push('is-valid');
                }

                if (this.hasError) {
                    classes.push('is-invalid');
                }

                if (this.hasValue) {
                    classes.push('has-value');
                }

                return classes;
            }
        }
    }
</script>

<style lang="scss">
    @import "~shapla-color-system/src/variables";

    $error: #f14668;
    $success: #67c332;

    .shapla-text-field {
        box-sizing: border-box;
        color: $text-secondary;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 16px;
        position: relative;
        text-align: left;

        &__control {
            .icon {
                align-items: center;
                display: inline-flex;
                justify-content: center;
                height: 1.5rem;
                width: 1.5rem;

                svg.icon-success {
                    fill: $success;
                }

                svg.icon-error {
                    fill: $error;
                }
            }

            &.has-icons-left .icon,
            &.has-icons-right .icon {
                color: #dbdbdb;
                height: calc(1.5em + 1.5rem);
                pointer-events: none;
                position: absolute;
                top: 0;
                width: 2.5em;
                z-index: 4;
            }

            &.has-icons-right .icon.is-right {
                right: 0;
            }
        }
    }

    .shapla-text-field__input {
        text-align: left;
        text-transform: none;
        display: block;
        width: 100%;
        height: calc(1.5em + 1.5rem);
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: $text-primary;
        background-color: #fff;
        background-clip: padding-box;
        border: .0625rem solid rgba(0, 14, 16, 0.12);
        border-radius: .25rem;
        box-shadow: 0 0 0 transparent;
        transition: border-color .15s ease-out, color .15s ease-out, box-shadow .15s ease-out;
        padding: 0.9375rem 0.9375rem 0;

        &:focus {
            color: rgba(0, 14, 16, .68);
            background-color: #fff;
            border-color: $primary;
            outline: 0;
            box-shadow: 0 0 0 transparent, 0 .0625rem .1875rem rgba(0, 14, 16, .06);
        }

        &.is-invalid {
            border-color: $error;
            padding-right: 2.5em;
        }

        &.is-valid {
            border-color: $success;
            padding-right: 2.5em;
        }
    }

    .shapla-text-field__label {
        cursor: text;
        position: absolute;
        top: 14px;
        left: 1rem;
        font-size: 1rem;
        text-transform: none;
        transition: all .1s ease-out;
        margin: auto;
        color: $text-secondary;
        white-space: nowrap;
        pointer-events: none;
        text-overflow: ellipsis;
        line-height: 1.2;
    }

    .shapla-text-field__input.has-value + label,
    .shapla-text-field__input:focus + label {
        font-size: .7rem;
        top: 4px;
    }

    .shapla-text-field__help-text {
        display: block;
        width: 100%;
        margin-top: .25rem;
        font-size: .875rem;
        line-height: 1.2;
        color: $text-hint;

        &.is-invalid {
            color: $error;
        }
    }
</style>