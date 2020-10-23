<template>
  <div class="shapla-select-field" :class="{'is-searchable':searchable}">
    <div class="shapla-select-field__control">
      <text-field :label="label" :value="getLabelFromValue" :name="name" :id="id" :required="required"
                  :autocomplete="autocomplete" :has-error="hasError" :has-success="hasSuccess"
                  :readonly="isReadonly" :disabled="disabled" @focus="handleFocusEvent" @blur="handleBlurEvent"
                  @keydown="handleKeydownEvent">
        <template v-slot:icon-right>
          <span class="icon is-right icon--delete" v-if="clearable && ( hasSelectedOption || hasValue )">
            <delete-icon @click="clearSelectedValue"/>
          </span>
          <span class="icon is-right">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
              <path fill="none" d="M0 0h24v24H0V0z"/>
            </svg>
          </span>
        </template>
      </text-field>
      <div v-if="multiple && selectedOptions.length" class="shapla-select-field__selected-values">
        <shapla-chip :deletable="true" :small="true" v-for="_option in selectedOptions" :key="_option.value"
                     @delete="removeSelectedItem(_option)" v-html="_option.label"/>
      </div>
      <dropdown-menu :active="showDropdown" :max-items="5" role="listbox">
        <template v-slot:before-content="slotProps">
          <span class="shapla-dropdown-item is-search-input" v-if="searchable && slotProps.direction === 'is-down'">
            <input type="text" class="shapla-select-field__search" v-model="search">
          </span>
        </template>
        <template v-slot:after-content="slotProps">
          <span class="shapla-dropdown-item is-search-input" v-if="searchable && slotProps.direction === 'is-up'">
            <input type="text" class="shapla-select-field__search" v-model="search">
          </span>
        </template>
        <span role="option" class="shapla-dropdown-item" v-for="_option in filteredOptions"
              :key="_option['value']" :class="dropdownItemClasses(_option)"
              :aria-selected="isItemSelected(_option)" :data-value="_option['value']"
              @click="selectOption(_option)">
                    <span v-html="_option['label']"> </span>
                    <span v-if="isItemSelected(_option)" class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                    </span>
                </span>
        <span v-if="!filteredOptions.length" class="shapla-dropdown-item is-link no-options">
					<slot name="no-options">{{ noOptionsText }}</slot>
				</span>
      </dropdown-menu>
    </div>
    <small class="shapla-text-field__help-text is-invalid" v-if="hasError" v-html="validationText"/>
    <small class="shapla-text-field__help-text" v-if="helpText" v-html="helpText"/>
  </div>
</template>

<script>
import {dropdownMenu} from 'shapla-dropdown';
import deleteIcon from 'shapla-delete';
import textField from "shapla-text-field";
import shaplaChip from 'shapla-chip';
import selectFieldMixins from './selectFieldMixins'

export default {
  name: "selectField",
  components: {dropdownMenu, textField, deleteIcon, shaplaChip},
  mixins: [selectFieldMixins]
}
</script>

<style lang="scss">
@import "select-field";
</style>
