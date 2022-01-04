<template>
  <div>
    <columns>
      <column>
        <status-list :statuses="statuses" @change="handleStatusChange"/>
      </column>
      <column>
        <status-list :statuses="statuses" @change="handleStatusChange" type="vertical"/>
      </column>
    </columns>
  </div>
</template>

<script>
import {columns, column} from "../../src/index.js"
import {statusList} from "../../src/index.js"

export default {
  name: "TestStatusList",
  components: {statusList, columns, column},
  data() {
    return {
      statuses: [
        {key: 'all', active: true, label: 'All', count: 10},
        {key: 'publish', active: false, label: 'Publish', count: 10},
        {key: 'trash', active: false, label: 'Trash', count: 2},
      ],
    }
  },
  methods: {
    handleStatusChange(status) {
      this.statuses.forEach(_status => {
        _status.active = _status.key === status.key;
      });
    }
  }
}
</script>

<style scoped>

</style>
