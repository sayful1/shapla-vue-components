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
            <dropdown-menu :active="showDropdown" role="listbox">
				<span class="shapla-dropdown-item is-search-input" v-if="searchable">
					<input type="text" class="shapla-select-field__search" v-model="search">
				</span>
                <span role="option" class="shapla-dropdown-item is-link" v-for="_option in filteredOptions"
                      :key="_option['value']" :class="dropdownItemClasses(_option)"
                      :aria-selected="value.toString() === _option['value']" :data-value="_option['value']"
                      @click="selectOption(_option)">
                    <span v-html="_option['label']"> </span>
                    <span v-if="value.toString() === _option['value']" class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                    </span>
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
    import selectFieldMixins from './selectFieldMixins'

    export default {
        name: "selectField",
        components: {dropdownMenu, textField, deleteIcon},
        mixins: [selectFieldMixins],
    }
</script>

<style lang="scss">
    @import "select-field";
</style>
