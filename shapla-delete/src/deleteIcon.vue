<template>
	<span :class="classes" :aria-label="ariaLabel" @click.prevent="handleClickEvent"></span>
</template>

<script>
	export default {
		name: "deleteIcon",
		props: {
			small: {type: Boolean, default: false},
			medium: {type: Boolean, default: false},
			large: {type: Boolean, default: false},
			fixed: {type: Boolean, default: false},
			ariaLabel: {type: String, default: 'close'}
		},
		computed: {
			classes() {
				return {
					'shapla-delete-icon': true,
					'is-small': this.small,
					'is-medium': this.medium,
					'is-large': this.large,
					'is-fixed': this.fixed,
				}
			}
		},
		methods: {
			handleClickEvent() {
				this.$emit('click');
			}
		}
	}
</script>

<style lang="scss">
	@import "delete";
</style>
