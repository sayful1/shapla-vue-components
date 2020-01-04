<template>
    <div class="form-group-label">
        <div>
            <input class="form-control" :class="inputClasses" :type="type" :id="id" :name="name" :value="value"
                   :required="required" :disabled="disabled" :autocomplete="autocomplete" placeholder=""
                   @focus="isFocus = true" @blur="isFocus = false" @input="handleInputEvent($event)">
            <label :for="id" v-if="label" v-html="label"/>
        </div>
        <small class="invalid-feedback" v-if="validationText.length && hasError" v-html="validationText"/>
        <small class="form-text" v-if="helpText" v-html="helpText"/>
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

    .form-group-label {
        box-sizing: border-box;
        color: $text-secondary;
        font-weight: 400;
        line-height: 24px;
        margin-bottom: 16px;
        position: relative;
        text-align: left;
    }

    .form-control {
        text-align: left;
        text-transform: none;
        display: block;
        width: 100%;
        height: calc(1.5em + 1.5rem);
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.5;
        color: $text-secondary;
        background-color: #fff;
        background-clip: padding-box;
        border: .0625rem solid rgba(0, 14, 16, 0.12);
        border-radius: .25rem;
        box-shadow: 0 0 0 transparent;
        transition: border-color .15s ease-out, color .15s ease-out, box-shadow .15s ease-out;
        padding: .6875rem 0.9375rem 0 .9375rem;

        &:focus {
            color: rgba(0, 14, 16, .68);
            background-color: #fff;
            border-color: $primary;
            outline: 0;
            box-shadow: 0 0 0 transparent, 0 .0625rem .1875rem rgba(0, 14, 16, .06);
        }

        &.is-invalid {
            border-color: $error;
            padding-right: calc(1.5em + 1.375rem);
            background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23f9424b' d='M4.47 21h15.06a2 2 0 001.73-3L13.73 5a2 2 0 00-3.46 0L2.74 18a2 2 0 001.73 3zM12 13.5a1 1 0 01-1-1v-2a1 1 0 012 0v2a1 1 0 01-1 1zm1 4.5h-2v-2h2z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: 100% calc((1.5em + 1.375rem) / 4);
            background-size: calc((1.5em + 1.375rem) / 2) calc((1.5em + 1.375rem) / 2);

            &:focus {
                border-color: $error;
                box-shadow: 0 0 0 rgba(249, 66, 75, .25);
            }
        }

        &.is-valid {
            border-color: $success;
            padding-right: calc(1.5em + 1.375rem);
            background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2367c332' d='M9 16.17L5.53 12.7a.996.996 0 10-1.41 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71a.996.996 0 10-1.41-1.41L9 16.17z'/%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: 100% calc((1.5em + 1.375rem) / 4);
            background-size: calc((1.5em + 1.375rem) / 2) calc((1.5em + 1.375rem) / 2);

        }
    }

    .form-group-label label {
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
        text-overflow: ellipsis;
        line-height: 1.2;
    }

    .form-group-label .iti + label,
    .form-group-label input.has-value + label,
    .form-group-label input:focus + label,
    .form-group-label select.has-value + label {
        font-size: .7rem;
        top: 4px;
    }

    .invalid-feedback {
        display: block;
        width: 100%;
        margin-top: .25rem;
        font-size: .8125rem;
        color: $error;
    }

    .form-control.is-invalid ~ .invalid-feedback,
    .form-control.is-invalid ~ .invalid-tooltip,
    .was-validated .form-control:invalid ~ .invalid-feedback,
    .was-validated .form-control:invalid ~ .invalid-tooltip {
        display: block;
    }
</style>