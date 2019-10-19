<template>
    <ul class="shapla-status-list" :class="`shapla-status-list--${type}`">
        <li v-for="status in statuses" :key="status.key" class="shapla-status-list__item"
            :class="{'is-active':status.active}">
            <a href="#" @click.prevent="handleClickEvent(status)" class="shapla-status-list__item-link">
                <span class="shapla-status-list__item-label">{{status.label}}</span>
                <span class="shapla-status-list__item-count">{{status.count}}</span>
            </a>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "statusList",
        props: {
            type: {
                type: String,
                default: 'horizontal',
                validator: (value) => -1 !== ['vertical', 'horizontal'].indexOf(value)
            },
            statuses: {type: Array, default: () => []},
        },
        methods: {
            handleClickEvent(status) {
                this.$emit('change', status);
            }
        }
    }
</script>

<style lang="scss">
    $borderColor: rgba(0, 0, 0, 0.38);

    .shapla-status-list {
        display: flex;
        color: var(--shapla-text-primary, rgba(0, 0, 0, 0.84));
        font-size: 1rem;
        float: left;
        list-style: none;
        margin: .5em 0;
        padding: 0;

        &__item {
            cursor: pointer;
            display: flex;
            width: 100%;
            margin: 0;
            padding: 0;
            white-space: nowrap;
            line-height: 1;

            &-count {
                background-color: rgba(#000, .1);
                color: var(--shapla-text-primary, rgba(0, 0, 0, 0.84));
                font-size: 12px;
                min-width: 1.5em;
                height: 1.5em;
                text-align: center;
                justify-content: center;
                align-items: center;
                border-radius: 3px;
                display: flex;
            }

            &-link {
                align-items: center;
                display: flex;
                justify-content: space-between;
                width: 100%;
                line-height: 1;
                text-decoration: none;

                &:hover, &:focus {
                    box-shadow: none;
                }
            }

            &:last-child {
                a {
                    border-right: none;
                    padding-right: 0;
                    margin-right: 0;
                }
            }

            &-label {
                color: var(--shapla-text-primary, rgba(0, 0, 0, 0.84));
            }

            &.is-active {
                .shapla-status-list__item-label {
                    font-weight: 600;
                    color: var(--shapla-primary, #108e56);
                }

                .shapla-status-list__item-count {
                    background-color: var(--shapla-primary, #108e56);
                    color: var(--shapla-on-primary, #fff);

                }
            }
        }
    }

    .shapla-status-list--horizontal {

        .shapla-status-list__item-link {
            border-right: 1px solid $borderColor;
            padding-right: 0.5em;
            margin-right: 0.5em;
        }

        .shapla-status-list__item-count {
            margin-left: 15px;
        }
    }

    .shapla-status-list--vertical {
        flex-direction: column;

        .shapla-status-list__item {
            margin-bottom: 1rem;
        }

        .shapla-status-list__item-label {
            overflow: hidden;
            white-space: nowrap;
            width: calc(100% - 1.5em);
            margin-right: 10px;
        }

        .shapla-status-list__item-count {
            margin-left: 50px;
        }

    }

</style>
