<template>
  <div class="shapla-columns-example">
    <h2>Columns with default gap (0.75rem)</h2>
    <columns>
      <column>
        <div class="card-column-box">Column example 1</div>
      </column>
      <column>
        <div class="card-column-box">Column example 2</div>
      </column>
      <column>
        <div class="card-column-box">Column example 3</div>
      </column>
      <column>
        <div class="card-column-box">Column example 4</div>
      </column>
    </columns>
    <h2>Columns (centered)</h2>
    <columns centered>
      <column :tablet="2">
        <div class="card-column-box">16%</div>
      </column>
      <column :tablet="3">
        <div class="card-column-box">25%</div>
      </column>
      <column :tablet="3">
        <div class="card-column-box">25%</div>
      </column>
      <column :tablet="2">
        <div class="card-column-box">16%</div>
      </column>
    </columns>

    <h2>Columns with custom gap (1.25rem)</h2>
    <columns multiline column-gap="1.24rem">
      <column :tablet="4">
        <div class="card-column-box">Column example 1</div>
      </column>
      <column :tablet="4">
        <div class="card-column-box">Column example 2</div>
      </column>
      <column :tablet="4">
        <div class="card-column-box">Column example 3</div>
      </column>
      <column :tablet="4">
        <div class="card-column-box">Column example 4</div>
      </column>
      <column :tablet="4">
        <div class="card-column-box">Column example 1</div>
      </column>
      <column :tablet="4">
        <div class="card-column-box">Column example 2</div>
      </column>
      <column :tablet="4">
        <div class="card-column-box">Column example 3</div>
      </column>
      <column :tablet="4">
        <div class="card-column-box">Column example 4</div>
      </column>
    </columns>

    <h2>Columns (gapless)</h2>
    <columns gapless>
      <column>
        <div class="card-column-box">Column example 1</div>
      </column>
      <column>
        <div class="card-column-box">Column example 2</div>
      </column>
      <column>
        <div class="card-column-box">Column example 3</div>
      </column>
      <column>
        <div class="card-column-box">Column example 4</div>
      </column>
    </columns>

  </div>
</template>

<script>
import {Column, Columns} from '../src'

export default {
  name: "ColumnsExample",
  components: {Columns, Column},
}
</script>

<style lang="scss" scoped>

html, body {
  box-sizing: border-box;
}

html *, body * {
  box-sizing: border-box;
}

.shapla-columns-example h2 {
  font-size: 20px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  padding-bottom: 10px;
}

.shapla-columns-example h2:not(:first-child) {
  margin-top: 20px;
}

.card-column-box {
  background: rgba(0, 0, 0, 0.12);
  padding: 5px;
}
</style>
