<template>
	<div class="field-option-data">

		<label v-if="label || helpText" class="shapla-field-option-label">
			<span class="shapla-field-option-label__label" v-if="label">{{ label }}</span>
			<span class="shapla-field-option-label__help-text" v-if="helpText">{{ helpText }}</span>
		</label>

		<div class="shapla-field-option-options" v-if="localOptions.length">

			<div class="shapla-field-option shapla-field-option--header" :class="{'showing-value':show_value}">
				<div class="shapla-field-option__selector">&nbsp;</div>
				<div class="shapla-field-option__sort-handler">&nbsp;</div>
				<div class="shapla-field-option__label"><strong>Label</strong></div>
				<div class="shapla-field-option__value" v-if="show_value"><strong>Value</strong></div>
				<div class="shapla-field-option__action-buttons">&nbsp;</div>
			</div>

			<draggable :list="localOptions" handle=".shapla-field-option__sort-handler" @change="triggerInputEvent">
				<field-option
					v-for="(option, index) in localOptions"
					:key="index"
					:index="index"
					:option="option"
					:show-value="show_value"
					:multiple="multiple"
					@input="handleOptionChange"
					@select="handleOptionSelect"
					@delete="handleOptionDelete"
				/>
			</draggable>

			<div class="shapla-field-option-actions">
				<div class="pull-left">
					<shapla-checkbox v-model="show_value">Show values</shapla-checkbox>
				</div>
				<div class="shapla-field-option-actions__spacer"></div>
				<div class="pull-right" v-if="hasSelectedItem">
					<a href="#" @click.prevent="clear_selection">Clear Selection</a>
				</div>
			</div>
		</div>

		<div class="shapla-field-option-add-options">
			<shapla-button fullwidth @click="add_option">
				<icon-container>
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
						<path d="M0 0h24v24H0z" fill="none"/>
						<path
							d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
					</svg>
				</icon-container>
			</shapla-button>
		</div>

	</div>
</template>

<script>
import iconContainer from 'shapla-icon-container';
import shaplaCheckbox from 'shapla-checkbox';
import shaplaButton from 'shapla-button';
import draggable from 'vuedraggable'
import FieldOption from "./FieldOption";

export default {
	name: "OptionsField",
	components: {FieldOption, iconContainer, shaplaCheckbox, shaplaButton, draggable},
	model: {prop: 'options', event: 'input'},
	props: {
		label: {type: String, required: false, default: ''},
		helpText: {type: String, required: false, default: ''},
		multiple: {type: Boolean, default: false},
		options: {type: Array, default: () => []},
	},
	data() {
		return {
			show_value: false,
			localOptions: [],
		}
	},
	watch: {
		options: {
			handler(newValue) {
				this.updateLocalOptions(newValue);
			},
			deep: true
		}
	},
	mounted() {
		this.updateLocalOptions(this.options);
	},
	computed: {
		hasSelectedItem() {
			if (this.localOptions.length < 1) {
				return false;
			}
			let items = this.localOptions.find(_option => _option.selected === true);

			return !!(typeof items === "object" && Object.keys(items).length);
		}
	},
	methods: {
		updateLocalOptions(options) {
			let _localOptions = [];
			options.forEach((option, index) => {
				_localOptions[index] = Object.assign({label: '', value: '', selected: false}, option);
			});
			this.localOptions = _localOptions;
		},
		add_option() {
			let num = this.localOptions.length;
			this.localOptions.push({label: `Option ${num + 1}`, value: `Option ${num + 1}`, selected: false});

			this.triggerInputEvent();
		},
		clear_selection() {
			this.localOptions.forEach(option => {
				option.selected = false;
			});

			this.triggerInputEvent();
		},
		handleOptionChange(newValue, index) {
			this.localOptions[index] = newValue;

			this.triggerInputEvent();
		},
		handleOptionSelect(index, selected) {
			this.localOptions[index].selected = selected;

			if (!this.multiple) {
				this.localOptions.forEach((option, _index) => {
					if (_index !== index) {
						this.localOptions[_index].selected = false;
					}
				})
			}

			this.triggerInputEvent();
		},
		handleOptionDelete(index) {
			this.$delete(this.localOptions, index);

			this.triggerInputEvent();
		},
		triggerInputEvent() {
			this.$emit('input', this.localOptions);
		},
	}
}
</script>

<style lang="scss">
@import "~shapla-color-system/src/variables";

.shapla-field-option-label {
	display: flex;
	flex-direction: column;
	margin-bottom: 1em;

	&__help-text {
		font-size: 11px;
		display: flex;
		color: $text-secondary;
	}
}

.shapla-field-option-actions {
	align-items: center;
	display: flex;
	min-height: 48px;

	&__spacer {
		flex-grow: 1;
	}
}
</style>