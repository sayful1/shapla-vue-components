<template>
    <div class="shapla-select">
        <dropdown :hoverable="false" :right="true">
            <template v-slot:trigger>
                <text-field label="Label"/>
            </template>
            <a href="#" class="dropdown-item is-active">Link 1</a>
            <a href="#" class="dropdown-item">Link 2</a>
            <a href="#" class="dropdown-item">Link 3</a>
            <a href="#" class="dropdown-item">Link 4</a>
            <a href="#" class="dropdown-item">Link 5</a>
        </dropdown>
    </div>
</template>

<script>
    import dropdown from 'shapla-dropdown';
    import textField from "shapla-text-field";

    export default {
        name: "selectField",
        components: {dropdown, textField}
    }
</script>

<style lang="scss">
    .shapla-select {
        .dropdown-menu {
            width: 100%;
        }

        .dropdown-content {
            max-height: 12em;
            overflow: auto;
        }
    }
</style>