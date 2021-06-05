<template>
  <div class="shapla-select-field" :class="{'is-searchable':searchable}" ref="element">
    <div class="shapla-select-field__control">
      <text-field
        :label="label" :model-value="getLabelFromValue" :name="name" :id="id" :required="required"
        :autocomplete="autocomplete" :has-error="hasError" :has-success="hasSuccess" :readonly="isReadonly"
        :disabled="disabled" @focus="handleFocusEvent" @blur="handleBlurEvent" @keydown="handleKeydownEvent">
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
                     @delete="removeSelectedItem(_option)">
          <span v-html="_option.label"></span>
        </shapla-chip>
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
              @click="selectOption(_option)"
        >
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
import {ref, onMounted, watch, reactive, toRefs, computed} from 'vue';
import ShaplaChip from '@shapla/vue-chip';
import ShaplaCross from '@shapla/vue-cross';
import {ShaplaDropdownMenu} from '@shapla/vue-dropdown';
import ShaplaInput from "@shapla/vue-input";

export default {
  name: "ShaplaSelect",
  components: {
    'dropdown-menu': ShaplaDropdownMenu,
    'delete-icon': ShaplaCross,
    'text-field': ShaplaInput,
    'shapla-chip': ShaplaChip
  },
  emits: ['update:modelValue'],
  props: {
    label: {type: String, default: ''},
    modelValue: {type: [String, Number, Boolean, Array], default: null},
    options: {type: Array, default: () => []},
    labelKey: {type: String, default: 'label'},
    valueKey: {type: String, default: 'value'},
    clearable: {type: Boolean, default: true},
    autocomplete: {type: String},
    name: {type: String, required: false},
    id: {type: String, required: false},
    helpText: {type: String, required: false},
    validationText: {type: String, required: false},
    hasError: {type: Boolean, default: false},
    hasSuccess: {type: Boolean, default: false},
    disabled: {type: Boolean, default: false},
    required: {type: Boolean, default: false},
    searchable: {type: Boolean, default: false},
    closeOnSelect: {type: Boolean, default: true},
    clearSearchOnSelect: {type: Boolean, default: true},
    multiple: {type: Boolean, default: false},
    noOptionsText: {type: String, default: 'Sorry, no matching options.'},
    singularSelectedText: {type: String, default: 'item selected'},
    pluralSelectedText: {type: String, default: 'items selected'},
  },
  setup(props, {emit}) {
    const element = ref(null);
    const state = reactive({
      selectedOption: null,
      selectedOptions: [],
      isReadonly: false,
      showDropdown: false,
      search: '',
    })
    const emitEvent = value => emit('update:modelValue', value);

    const filteredOptions = computed(() => {
      if (props.options.length < 1) return [];
      let newOptions = [];
      props.options.forEach(option => {
        if (typeof option == "string") {
          newOptions.push({label: option, value: option});
        } else if (['number', 'boolean'].indexOf(typeof option) !== -1) {
          newOptions.push({label: option.toString(), value: option.toString()});
        } else if (typeof option == "object") {
          newOptions.push({label: option[props.labelKey].toString(), value: option[props.valueKey].toString()});
        }
      });

      if (state.search.length) {
        return newOptions.filter(option => option['label'].toLowerCase().includes(state.search.toLowerCase()) ||
          option['value'].toLowerCase().includes(state.search.toLowerCase()));
      }

      return newOptions;
    })
    const getLabelFromValue = computed(() => {
      let label = '';
      if (props.modelValue && !props.multiple) {
        filteredOptions.value.forEach(option => {
          if (option['value'] == props.modelValue) {
            label = option['label'];
          }
        })
      }
      if (props.multiple && state.selectedOptions.length) {
        if (state.selectedOptions.length > 1) {
          label = `${state.selectedOptions.length} ${props.pluralSelectedText}`;
        } else {
          label = `${state.selectedOptions.length} ${props.singularSelectedText}`;
        }
      }
      return label;
    })
    const hasValue = computed(() => {
      if (Array.isArray(props.modelValue)) {
        return !!props.modelValue.length;
      }
      return !(props.modelValue === null || props.modelValue === '' || props.modelValue === undefined);
    })
    const hasSelectedOption = computed(() => {
      return !!(state.selectedOption && typeof state.selectedOption === "object" && Object.keys(state.selectedOption).length);
    })

    watch(() => props.modelValue, newValue => {
      if (Array.isArray(newValue) && props.multiple) {
        let _values = newValue.map(_item => _item.toString());
        state.selectedOptions = filteredOptions.value.filter(option => _values.indexOf(option['value']) !== -1);
      }
      if (!newValue) {
        state.selectedOption = {};
      }
    })

    onMounted(() => {
      window.addEventListener('click', event => {
        if (!element.value.contains(event.target)) {
          state.showDropdown = false;
        }
      });
      if (props.multiple && Array.isArray(props.modelValue)) {
        let _values = props.modelValue.map(_item => _item.toString());
        state.selectedOptions = filteredOptions.value.filter(option => _values.indexOf(option['value']) !== -1);
      }
    })

    const handleFocusEvent = () => {
      state.isReadonly = true;
      state.showDropdown = true;
    }
    const handleBlurEvent = () => {
      setTimeout(() => state.isReadonly = false, 200);
    }
    const isItemSelected = (option) => {
      return Array.isArray(props.modelValue) ? props.modelValue.indexOf(option['value']) !== -1 : props.modelValue == option['value'];
    }

    const dropdownItemClasses = (option) => {
      let classes = [];
      if (isItemSelected(option)) classes.push('is-active');
      if (hasSelectedOption.value && option['value'] === state.selectedOption['value']) classes.push('is-hover');

      return classes;
    }

    const clearSelectedValue = () => {
      if (props.clearable) {
        state.selectedOption = null;
        state.selectedOptions = [];
        emitEvent(props.multiple ? [] : "")
      }
    }

    const selectOption = (option) => {
      if (props.multiple) {
        if (!state.selectedOptions.find(word => word.value == option.value)) {
          state.selectedOptions.push(option);
          let values = state.selectedOptions.map(_option => _option.value);
          emitEvent(values)
        }
      } else {
        state.selectedOption = option;
        emitEvent(state.selectedOption['value'])
      }

      if (props.closeOnSelect && !props.multiple) {
        state.showDropdown = false;
      }

      if (props.clearSearchOnSelect) {
        state.search = '';
      }
    }

    const removeSelectedItem = (_option) => {
      state.selectedOptions.splice(state.selectedOptions.indexOf(_option), 1);
      emitEvent(state.selectedOptions.length ? state.selectedOptions.map(option => option.value) : [])
    }

    const scrollIfNeeded = (direction) => {
      let dropdownContent = element.value.querySelector('.shapla-dropdown-menu__content'),
        hoverEl = dropdownContent.querySelector('.shapla-dropdown-item.is-hover'),
        hoverElHeight = hoverEl ? hoverEl.clientHeight : 0,
        hoverElFromTop = hoverEl ? hoverEl.offsetTop : 0;

      if ('up' === direction && hoverElFromTop < dropdownContent.clientHeight) {
        dropdownContent.scrollTop = hoverElFromTop + hoverElHeight - dropdownContent.clientHeight;
      }

      if ('down' === direction) {
        setTimeout(() => {
          dropdownContent.scrollTop = hoverElFromTop + hoverElHeight - dropdownContent.clientHeight
        }, 50)
      }
    }

    const handleKeydownEvent = (event) => {
      // Go Up
      if (38 === event.keyCode) {
        let indexOfSelectedOption = filteredOptions.value.indexOf(state.selectedOption),
          preIndex = indexOfSelectedOption - 1;
        if (preIndex >= 0) {
          state.selectedOption = filteredOptions.value[preIndex];
        }

        scrollIfNeeded('up')
      }
      // Go Down
      if (40 === event.keyCode) {
        let indexOfSelectedOption = filteredOptions.value.indexOf(state.selectedOption),
          nextIndex = indexOfSelectedOption + 1;
        if (nextIndex < filteredOptions.value.length) {
          state.selectedOption = filteredOptions.value[nextIndex];
        }

        scrollIfNeeded('down');
      }
      // Select item
      if (13 === event.keyCode) {
        // Go Down
        selectOption(state.selectedOption);
        state.isReadonly = false;
        state.showDropdown = false;
        element.value.querySelector('input').blur();
      }
    }

    return {
      element, ...toRefs(state), filteredOptions, getLabelFromValue, hasValue, hasSelectedOption,
      handleFocusEvent, handleBlurEvent, isItemSelected, dropdownItemClasses, clearSelectedValue, selectOption,
      removeSelectedItem, handleKeydownEvent
    }
  }
}
</script>

<style lang="scss">
@import "index";
</style>
