<template>
	<div :class="classes">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name: "columns",
		props: {
			multiline: {type: Boolean, default: false},
			centered: {type: Boolean, default: false},
			gapless: {type: Boolean, default: false},
			vcentered: {type: Boolean, default: false},
			mobile: {type: Boolean, default: false},
			desktop: {type: Boolean, default: false},
		},
		computed: {
			classes() {
				return {
					'shapla-columns': true,
					'is-multiline': this.multiline,
					'is-centered': this.centered,
					'is-gapless': this.gapless,
					'is-vcentered': this.vcentered,
					'is-mobile': this.mobile,
					'is-desktop': this.desktop,
				}
			}
		}
	}
</script>

<style lang="scss">
	@import "columns";
</style>
