<template>
  <div>
    <pagination
      :total_items="total_items"
      :per_page="per_page"
      :current_page="current_page"
      @pagination="paginate"
    />
  </div>
</template>

<script>
import pagination from "shapla-data-table-pagination";

export default {
  name: "TestPagination",
  components: {pagination},
  data() {
    return {
      total_items: 100,
      per_page: 10,
      current_page: 1,
    }
  },
  methods: {
    paginate(page) {
      this.current_page = page;
    }
  }
}
</script>

<style lang="scss">
.sr-only {
  display: none;
}
</style>
