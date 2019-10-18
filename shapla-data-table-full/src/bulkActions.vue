<template>
    <div class="bulk-action-selector" v-if="hasBulkActions">
        <label :for="`bulk-action-selector-${position}`" class="screen-reader-text">Select bulk action</label>
        <select name="action" :id="`bulk-action-selector-${position}`" :value="value"
                @input="handleChangeEvent($event)">
            <option value="-1">Bulk Actions</option>
            <option v-for="action in actions" :key="action.key" :value="action.key">{{ action.label }}</option>
        </select>

        <button @click="handleBulkAction" :disabled="!isApplyActive">Apply</button>
    </div>
</template>

<script>

    export default {
        name: "bulkActions",
        props: {
            value: {type: String, default: '-1'},
            actions: {type: Array, required: false, default: () => []},
            active: {type: Boolean, default: false},
            position: {type: String, default: 'top'},
        },
        data() {
            return {
                localModel: '-1',
            }
        },
        mounted() {
            this.localModel = this.value;
        },
        computed: {
            isApplyActive() {
                if (this.value === '-1') return false;

                return this.active;
            },
            hasBulkActions() {
                return this.actions.length > 0;
            }
        },
        methods: {
            handleBulkAction() {
                if (this.localModel === '-1') {
                    return;
                }

                this.$emit('bulk:click', this.localModel);
            },
            handleChangeEvent(event) {
                this.localModel = event.target.value;
                this.$emit('input', this.localModel);
            }
        }
    }
</script>

<style scoped>

</style>
