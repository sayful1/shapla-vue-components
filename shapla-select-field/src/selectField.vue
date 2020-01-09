<template>
    <div class="shapla-text-field">
        <div class="shapla-text-field__control">
            <select :class="inputClasses" :type="type" :id="id" :name="name" class="shapla-text-field__input has-value">
                <option value="">Choose</option>
                <option value="Hotel">Hotel</option>
                <option value="Other">Other</option>
                <option value="Church">Church</option>
                <option value="Funeral Home">Funeral Home</option>
                <option value="I don't know">I don't know</option>
            </select>
            <label class="shapla-text-field__label" :for="id" v-if="label" v-html="label"/>
        </div>
        <small class="shapla-text-field__help-text is-invalid" v-if="showValidationText" v-html="validationText"/>
        <small class="shapla-text-field__help-text" v-if="showHelpText" v-html="helpText"/>
    </div>
</template>

<script>
    import textFieldMixins from "shapla-text-field/src/textFieldMixins";

    export default {
        name: "selectField",
        mixins: [textFieldMixins],
        props: {
            label: {type: String, default: "label"},
            value: {type: [String, Number], default: null},
            options: {type: Array, default: () => []},
            clearable: {type: Boolean, default: true},
            searchable: {type: Boolean, default: false},
            multiple: {type: Boolean, default: false},
            placeholder: {type: String, default: ""},
            clearSearchOnSelect: {type: Boolean, default: true},
            closeOnSelect: {type: Boolean, default: true},
        }
    }
</script>

<style lang="scss">
    @import "select-field";
</style>