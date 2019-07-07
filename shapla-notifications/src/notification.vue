<template>
    <div class="shapla-notification" v-if="items.length">
        <transition-group name="shapla-notification-transition" tag="div">
            <div v-for="item in items" :class="itemClass(item)" :key="item.id">
                <delete-icon v-if="showDismisses" @click="closeItem(item)"></delete-icon>
                <div class="shapla-notification__title" v-if="item.title">{{item.title}}</div>
                <div class="shapla-notification__message" v-html="item.message"></div>
            </div>
        </transition-group>
    </div>
</template>

<script>
    import deleteIcon from "shapla-delete";

    export default {
        name: "notification",
        components: {deleteIcon},
        model: {
            prop: 'options',
            event: 'queued'
        },
        props: {
            options: {
                type: Object
            },
            event: {
                type: String,
                default: 'show-notification'
            },
            eventSource: {
                type: Object,
                required: false,
                default() {
                    return this.$root
                }
            },
            timeout: {
                type: Number,
                default: 2750,
            },
            showDismisses: {
                type: Boolean,
                default: true,
            }
        },
        watch: {
            options(newValue) {
                this.show(newValue);
            },
        },
        data() {
            return {
                items: [],
                itemsCounts: 0,
            }
        },
        mounted() {
            // Show initial message
            if (this.options && this.options.message) {
                this.show(this.options);
            }
            // if event specified use it, else if no snack prop then use default.
            this.eventSource.$on(this.event, this.show);
        },
        methods: {
            itemClass(item) {
                return {
                    'shapla-notification__item': true,
                    'has-success': item.type === 'success',
                    'has-info': item.type === 'info',
                    'has-warning': item.type === 'warning',
                    'has-error': item.type === 'error',
                };
            },
            show(options) {
                if (options && options.message) {
                    this.itemsCounts += 1;
                    options.id = this.itemsCounts;
                    this.items.unshift(options);
                    let timeout = (options.timeout && typeof options.timeout === "number") ? options.timeout : this.timeout;
                    setTimeout((self) => {
                        self.$delete(self.items, self.items.indexOf(options))
                    }, timeout, this);
                }
            },
            closeItem(options) {
                this.$delete(this.items, this.items.indexOf(options));
            }
        }
    }
</script>

<style lang="scss">
    @import "notification";
</style>