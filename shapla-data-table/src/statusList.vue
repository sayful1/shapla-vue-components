<template>
	<ul class="wp-status-list">
		<li v-for="status in statuses" :key="status.key" class="wp-status-list__item"
			:class="{'is-active':status.active}">
			<a href="#" @click.prevent="handleClickEvent(status)" class="wp-status-list__item-link">
				<span class="wp-status-list__item-label">{{status.label}}</span>
				<span class="wp-status-list__item-count">({{status.count}})</span>
			</a>
		</li>
	</ul>
</template>

<script>
	export default {
		name: "statusList",
		props: {
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
	$borderColor: #666;

	.wp-status-list {
		color: $borderColor;
		font-size: 13px;
		float: left;
		list-style: none;
		margin: 8px 0;
		padding: 0;

		&__item {
			display: inline-block;
			margin: 0;
			padding: 0;
			white-space: nowrap;
			line-height: 1;

			&-count {
				color: $borderColor;
			}

			&-link {
				border-right: 1px solid $borderColor;
				display: block;
				padding-right: 0.5em;
				margin-right: 0.5em;
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

			&.is-active {
				.wp-status-list__item-label {
					font-weight: 600;
					color: #000;
				}
			}
		}
	}
</style>
