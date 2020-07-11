<template>
    <div>
        <columns>
            <column>
                <h2>Default Icon</h2>
                <delete-icon></delete-icon>
            </column>
            <column>
                <h2>Small Icon</h2>
                <delete-icon small></delete-icon>
            </column>
            <column>
                <h2>Medium Icon</h2>
                <delete-icon medium></delete-icon>
            </column>
            <column>
                <h2>Large Icon</h2>
                <delete-icon large></delete-icon>
            </column>
            <column>
                <h2>Fixed Icon</h2>
                <delete-icon fixed></delete-icon>
            </column>
        </columns>
    </div>
</template>

<script>
    import {columns, column} from 'shapla-columns'
    import deleteIcon from 'shapla-delete'

    export default {
        name: "TestDelete",
        components: {
            deleteIcon,
            columns,
            column
        }
    }
</script>

<style scoped>

</style>