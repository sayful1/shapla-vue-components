<template>
	<div class="shapla-media-item" :class="{'is-active': active}" v-if="media.title">
		<div class="shapla-media-item__primary-content" @click="chooseMedia(media)">
			<img class="shapla-media-item__avatar" :src="media.attachment_url" :alt="media.title">
			<span v-text="media.title"></span>
		</div>
		<div class="shapla-media-item__secondary-action">
			<delete-icon @click="deleteMedia(media)"></delete-icon>
		</div>
	</div>
</template>

<script>
    import deleteIcon from 'shapla-delete';

    export default {
        name: "mediaItem",
        components: {deleteIcon},
        props: {
            active: {type: Boolean, default: false},
            media: {
                type: Object, default: () => {
                    return {
                        title: '',
                        attachment_url: '',
                    }
                }
            }
        },
        methods: {
            chooseMedia(media) {
                this.$emit('select', media);
            },
            deleteMedia(media) {
                this.$emit('delete', media);
            }
        }
    }
</script>

<style lang="scss">
	@import "colors";

	.shapla-media-item {
		border: 1px solid rgba(#000, .2);
		margin-bottom: 1rem;
		cursor: pointer;
		display: flex;
		align-items: center;
		font-size: 1rem;
		font-weight: 400;
		letter-spacing: .04em;
		line-height: 1;
		min-height: 48px;
		box-sizing: border-box;
		flex-direction: row;
		flex-wrap: nowrap;
		padding: 1rem;
		color: $text-primary;
		overflow: hidden;

		&.is-active {
			border-color: $primary;
		}

		&__primary-content {
			display: flex;
			align-items: center;
			order: 0;
			flex-grow: 2;
			text-decoration: none;
			box-sizing: border-box;
		}

		&__avatar {
			margin-right: 1rem;
			height: 40px;
			width: 40px;
			box-sizing: border-box;
			border-radius: 50%;
			background-color: #757575;
			font-size: 40px;
			color: #fff;
		}

		&__secondary-action {
		}
	}
</style>
