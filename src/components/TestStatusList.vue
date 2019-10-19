<template>
    <div>
        <columns>
            <column>
                <status-list :statuses="statuses"></status-list>
            </column>
            <column>
                <status-list :statuses="statuses" type="vertical"></status-list>
            </column>
        </columns>
    </div>
</template>

<script>
    import {columns, column} from '../../shapla-columns'
    import statusList from '../../shapla-data-table-status/src/statusList'

    export default {
        name: "TestStatusList",
        components: {statusList, columns, column},
        data() {
            return {
                statuses: [
                    {key: 'all', active: true, label: 'All', count: 10},
                    {key: 'publish', active: false, label: 'publish', count: 10},
                    {key: 'trash', active: false, label: 'Trash', count: 2},
                ],
            }
        },
    }
</script>

<style scoped>

</style>