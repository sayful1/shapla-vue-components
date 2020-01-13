<template>
    <div class="shapla-select shapla-text-field">
        <dropdown :hoverable="false" :right="true">
            <template v-slot:trigger>
                <text-field label="Label" :value="value">
                    <template v-slot:icon-right>
                        <span class="icon is-right">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"/>
                                <path fill="none" d="M0 0h24v24H0V0z"/>
                            </svg>
                        </span>
                    </template>
                </text-field>
            </template>
            <template v-for="_option in options">
                <span
                        class="dropdown-item"
                        :class="{'is-active':value === _option}"
                        :key="_option"
                        v-text="_option"
                        @click="selectOption(_option)"
                />
            </template>
        </dropdown>
    </div>
</template>

<script>
    import dropdown from 'shapla-dropdown';
    import textField from "shapla-text-field";

    export default {
        name: "selectField",
        components: {dropdown, textField},
        props: {
            value: {type: [String, Number], default: null},
            options: {type: Array, default: () => []},
        },
        methods: {
            selectOption(option) {
                this.$emit('input', option);
            }
        }
    }
</script>

<style lang="scss">
    @import "~shapla-color-system/src/variables";

    .shapla-select {
        .dropdown {
            width: 100%;
        }

        .dropdown-trigger {
            width: 100%;
        }

        .dropdown-menu {
            width: 100%;
        }

        .dropdown-content {
            max-height: 12em;
            overflow: auto;
        }

        .dropdown-item {
            cursor: pointer;
            padding-right: 3rem;
            text-align: left;
            white-space: nowrap;
            width: 100%;

            &:hover,
            &:hover {
                background-color: #f5f5f5;
                color: $text-primary;
            }

            &.is-active,
            &.is-active {
                color: $primary;
            }
        }
    }
</style>