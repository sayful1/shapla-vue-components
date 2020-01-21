<template>
    <div>
        <h2>Spinner</h2>
        <columns>
            <column>
                <spinner position="static"/>
            </column>
            <column>
                <spinner position="static" single/>
            </column>
        </columns>
    </div>
</template>

<script>
    import spinner from '../../../components/shapla-spinner';
    import {columns, column} from '../../../components/shapla-columns'

    export default {
        name: "TestSpinner",
        components: {
            spinner,
            columns,
            column
        }
    }
</script>

<style scoped>

</style>