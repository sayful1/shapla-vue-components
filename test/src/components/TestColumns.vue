<template>
    <div class="shapla-columns-example">
        <h2>Columns</h2>

        <columns>
            <column>Column example 1</column>
            <column>Column example 2</column>
            <column>Column example 3</column>
            <column>Column example 4</column>
        </columns>
    </div>
</template>

<script>
    import {columns, column} from '../../../shapla-columns/src/index';

    export default {
        name: "TestColumns",
        components: {columns, column}
    }
</script>

<style scoped>

</style>