<template>
  <div class="shapla-text-field" :dir="direction" :class="containerClasses">
    <div class="shapla-text-field__control" :class="{'has-icons-right':hasRightIcon}">
      <template v-if="isTextarea">
        <textarea class="shapla-text-field__textarea" :class="inputClasses" :id="id" :name="name"
                  :value="value" :required="required" :disabled="disabled" :autocomplete="autocomplete"
                  :rows="rows" :readonly="readonly" placeholder="" :dir="direction" @focus="handleFocusEvent($event)"
                  @keydown="handleKeydownEvent($event)" @blur="handleBlurEvent($event)"
                  @input="handleInputEvent($event)"/>
      </template>
      <template v-else>
        <input class="shapla-text-field__input" :class="inputClasses" :type="type" :id="id" :name="name"
               :value="value" :required="required" :disabled="disabled" :autocomplete="autocomplete"
               :readonly="readonly" :placeholder="placeholderText" :dir="direction" @focus="handleFocusEvent($event)"
               @keydown="handleKeydownEvent($event)" @blur="handleBlurEvent($event)"
               @input="handleInputEvent($event)"/>
      </template>
      <label class="shapla-text-field__label" :dir="direction" :for="id" v-if="label" v-html="label"/>
      <slot name="icon-right">
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
      </slot>
    </div>
    <small class="shapla-text-field__help-text is-invalid" v-if="showValidationText" v-html="validationText"/>
    <small class="shapla-text-field__help-text" v-if="showHelpText" v-html="helpText"/>
  </div>
</template>

<script>
import textFieldMixins from "./textFieldMixins";

export default {
  name: "textField",
  mixins: [textFieldMixins],
}
</script>

<style lang="scss">
@import "text-field";
</style>
