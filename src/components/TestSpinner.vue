<template>
    <div>
        <h2>Spinner</h2>
        <columns>
            <column>
                <spinner position="static"></spinner>
            </column>
            <column>
                <spinner position="static" single></spinner>
            </column>
        </columns>
    </div>
</template>

<script>
    import spinner from '../../shapla-spinner';
    import {columns, column} from '../../shapla-columns'

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