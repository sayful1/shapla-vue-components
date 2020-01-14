<template>
    <div class="shapla-select shapla-text-field">
        <dropdown :hoverable="false" :close-on-select="true" role="listbox">
            <template v-slot:trigger>
                <text-field :label="label" :value="getLabelFromValue" :readonly="isReadonly" :name="name" :id="id"
                            :help-text="helpText" :autocomplete="autocomplete" :validation-text="validationText"
                            :has-error="hasError" :has-success="hasSuccess" :required="required" :disabled="disabled"
                            @focus="handleFocusEvent" @blur="handleBlurEvent" @keydown="handleKeydownEvent">
                    <template v-slot:icon-right>
                        <span class="icon is-right icon--delete" v-if="clearable && hasSelectedOption">
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
            </template>
            <template v-for="_option in filteredOptions">
                <span role="option" class="dropdown-item" :class="dropdownItemClasses(_option)"
                      :aria-selected="value === _option[valueKey]" :key="_option[valueKey]"
                      :data-value="_option[valueKey]" @click="selectOption(_option)">
                    <span v-html="_option[labelKey]"/>
                    <span v-if="value === _option[valueKey]" class="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path d="M0 0h24v24H0z" fill="none"/>
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                    </span>
                </span>
            </template>
        </dropdown>
    </div>
</template>

<script>
    import dropdown from '../../shapla-dropdown';
    import textField from "../../shapla-text-field";
    import deleteIcon from '../../shapla-delete';
    import selectFieldMixins from './selectFieldMixins'

    export default {
        name: "selectField",
        components: {dropdown, textField, deleteIcon},
        mixins: [selectFieldMixins],
    }
</script>

<style lang="scss">
    @import "select-field";
</style>