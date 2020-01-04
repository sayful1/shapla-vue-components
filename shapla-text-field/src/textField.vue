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
    import textFieldMixins from "./textFieldMixins";

    export default {
        name: 'textField',
        mixins: [textFieldMixins],
    }
</script>

<style lang="scss">
    @import "text-field";
</style>
