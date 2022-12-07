<template>
  <div>
    <div class="columns">
      <div class="column">
        <select-field
          v-model="option"
          label="Choose a country"
          :options="options"
        />
      </div>
      <div class="column">
        <select-field
          v-model="option2"
          label="Choose a country"
          help-text="You can search country name"
          :options="options"
          :searchable="true"
        />
      </div>
      <div class="column">
        <select-field
          v-model="option3"
          label="Choose a country"
          help-text="You can search country name and select multiple countries"
          singular-selected-text="country selected"
          plural-selected-text="countries selected"
          :options="options"
          :searchable="true"
          :multiple="true"
        />
      </div>
      <div class="column">
        <select-field
          v-model="option"
          label="Choose a country"
          help-text="Help text goes here"
          validation-text="Validation text test"
          :has-error="true"
          :options="options"
        />
      </div>
      <div class="column">
        <select-field
          v-model="option"
          label="Choose a country"
          help-text="Help text goes here"
          :has-success="true"
          :options="options"
        />
      </div>
    </div>
  </div>
</template>

<script>
import {selectField} from "../../src/index.js";

export default {
  name: "TestSelectField",
  components: {selectField},
  data() {
    return {
      option: '',
      option2: 'SA',
      option3: ['SA', 'Sayful Islam'],
      options: ['Sayful Islam', 'Saif Al Araf', 'Aklima', 3, true, false, 0, 1,
        {label: 'Sayful', value: 'SA'}],
    }
  },
}
</script>

<style lang="scss">
@use "shapla-css/src/index.scss" as shapla;

@include shapla.select;
</style>
