<template>
  <month-navigation @change="changeMonth"/>
</template>

<script>
import MonthNavigation from "../../../src/components/month-navigation/src/MonthNavigation.vue";

export default {
  name: "TestMonthNavigation",
  components: {MonthNavigation},
  methods: {
    changeMonth(data) {
      console.log(data);
    }
  }
}
</script>

<style scoped>

</style>
