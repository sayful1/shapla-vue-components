<template>
    <month-navigation @change="changeMonth"/>
</template>

<script>
    import MonthNavigation from "../../../shapla-month-navigation/src/MonthNavigation";
    export default {
        name: "TestMonthNavigation",
        components:{MonthNavigation},
        methods:{
            changeMonth(data){
                console.log(data);
            }
        }
    }
</script>

<style scoped>

</style>