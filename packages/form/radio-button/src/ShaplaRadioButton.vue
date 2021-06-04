<template>
  <shapla-button :outline="modelValue !== value" :theme="theme" :size="size" :fullwidth="fullwidth"
                 :shadow="shadow" :rounded="rounded" @click.prevent="$emit('update:modelValue',value)">
    <slot>{{ label }}</slot>
  </shapla-button>
</template>

<script>
import ShaplaButton from "@shapla/vue-button";

export default {
  name: "ShaplaRadioButton",
  components: {ShaplaButton},
  model: {prop: 'modelValue', event: 'update:modelValue'},
  props: {
    label: {type: String, default: '', required: false},
    value: {type: String, default: ''},
    modelValue: {default: ''},
    theme: {
      type: String,
      default: 'default',
      validator: value => ['default', 'primary', 'secondary'].indexOf(value) !== -1
    },
    size: {
      type: String,
      default: 'normal',
      validator: value => ['small', 'normal', 'medium', 'large'].indexOf(value) !== -1
    },
    fullwidth: {type: Boolean, default: false},
    shadow: {type: Boolean, default: false},
    rounded: {type: Boolean, default: false},
  }
}
</script>
