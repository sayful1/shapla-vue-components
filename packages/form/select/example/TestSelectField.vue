<template>
  <div class="p-8 container mx-auto">
    <div class="md:flex flex-wrap -m-4">

      <div class="md:w-3/12 p-4">
        <select-field v-model="option" label="Choose a country" :options="options"/>
      </div>

      <div class="md:w-3/12 p-4">
        <select-field v-model="option2" label="Choose a country" help-text="You can search country name"
                      :options="options" :searchable="true"/>
      </div>

      <div class="md:w-3/12 p-4">
        <select-field v-model="option" label="Choose a country" help-text="Help text goes here"
                      validation-text="Validation text test" :has-error="true" :options="options"/>
      </div>

      <div class="md:w-3/12 p-4">
        <select-field v-model="option" label="Choose a country" help-text="Help text goes here"
                      :has-success="true" :options="options"/>
      </div>

      <div class="md:w-3/12 p-4">
        <select-field v-model="country" :options="countries" :searchable="true" :multiple="true" label-key="name"
                      value-key="code" label="Choose a country"
                      help-text="You can search country name and select multiple countries"
                      singular-selected-text="country selected" plural-selected-text="countries selected"/>
      </div>

      <div class="md:w-3/12 p-4">
        <select-field v-model="students" :options="studentsList" :searchable="true" :multiple="true" label-key="name"
                      value-key="role" label="Choose a student"/>
      </div>

    </div>
  </div>
</template>

<script>
import selectField from "../src/index";
import {countriesList, studentsList} from "./testData";

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
      country: ['ST'],
      students: [1],
    }
  },
  computed: {
    countries() {
      return countriesList;
    },
    studentsList() {
      return studentsList;
    }
  },
  mounted() {
    setTimeout(() => {
      this.country.push('BD');
      this.students.push('3');
    }, 3000);
  }
}
</script>

<style lang="scss">
@import url('https://unpkg.com/tailwindcss/dist/tailwind.min.css');
@import "@shapla/vue-cross/dist/style.css";
@import "@shapla/vue-chip/dist/style.css";
@import "@shapla/vue-dropdown/dist/style.css";
@import "@shapla/vue-input/dist/style.css";
</style>
