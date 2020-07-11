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

        <h2>Columns with custom gap (1.25rem)</h2>
        <columns multiline variable column-gap="1.24rem">
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

    </div>
</template>

<script>
    import {columns, column} from 'shapla-columns';

    export default {
        name: "TestColumns",
        components: {columns, column}
    }
</script>

<style lang="scss">
    .shapla-columns-example {
        h2 {
            font-size: 20px;
            margin-bottom: 10px;
            border-bottom: 1px solid rgba(#000, 0.12);
            padding-bottom: 10px;

            &:not(:first-child) {
                margin-top: 20px;
            }
        }
    }

    .card-column-box {
        background: rgba(#000, 0.12);
        padding: 5px;
    }
</style>