<template>
	<div>
		<h2 class="section-title">Button Theme</h2>
		<section class="section">
			<columns>
				<column :tablet="5">
					<div class="shapla-buttons">
						<shapla-button>Default</shapla-button>
						<br>
						<shapla-button disabled>Default disabled</shapla-button>
						<br>
						<shapla-button theme="primary">Primary</shapla-button>
						<br>
						<shapla-button theme="primary" disabled>Primary disabled</shapla-button>
						<br>
						<shapla-button theme="secondary">Secondary</shapla-button>
						<br>
						<shapla-button theme="secondary" disabled>Secondary disabled</shapla-button>
					</div>
				</column>
				<column :tablet="7">
				<pre>
					<code class="html">
&lt;shapla-button&gt;Default&lt;/shapla-button&gt;
&lt;shapla-button disabled&gt;Default disabled&lt;/shapla-button&gt;
&lt;shapla-button theme=&quot;primary&quot;&gt;Primary&lt;/shapla-button&gt;
&lt;shapla-button theme=&quot;primary&quot; disabled&gt;Primary disabled&lt;/shapla-button&gt;
&lt;shapla-button theme=&quot;secondary&quot;&gt;Secondary&lt;/shapla-button&gt;
&lt;shapla-button theme=&quot;secondary&quot; disabled&gt;Secondary disabled&lt;/shapla-button&gt;
					</code>
				</pre>
				</column>
			</columns>
		</section>

		<h4 class="section-title">Button Size</h4>
		<section class="section">
			<columns>
				<column :tablet="5">
					<div class="shapla-buttons">
						<shapla-button size="small">Small Button</shapla-button>
						<br>
						<shapla-button size="medium">Medium Button</shapla-button>
						<br>
						<shapla-button size="large">Large Button</shapla-button>
						<br>
					</div>
				</column>
				<column :tablet="7">
					<pre>
						<code class="html">
&lt;shapla-button size=&quot;small&quot;&gt;Small Button&lt;/shapla-button&gt;
&lt;shapla-button size=&quot;medium&quot;&gt;Medium Button&lt;/shapla-button&gt;
&lt;shapla-button size=&quot;large&quot;&gt;Large Button&lt;/shapla-button&gt;
						</code>
					</pre>
				</column>
			</columns>
		</section>
		<h4 class="section-title">Full width Button</h4>
		<section class="section">
			<div class="shapla-buttons">
				<shapla-button fullwidth>Default full Width</shapla-button>
			</div>
		</section>
		<h4 class="section-title">Outline Button</h4>
		<section class="section">
			<div class="shapla-buttons">
				<shapla-button outline>Default outline</shapla-button>
				<br>
				<shapla-button outline disabled>Default outline disabled</shapla-button>
				<br>
				<shapla-button outline theme="primary">Primary outline</shapla-button>
				<br>
				<shapla-button outline disabled theme="primary">Primary outline disabled</shapla-button>
				<br>
				<shapla-button outline theme="secondary">Secondary outline</shapla-button>
				<br>
				<shapla-button outline disabled theme="secondary">Secondary outline disabled</shapla-button>
				<br>
				<shapla-button outline rounded theme="primary">Primary outline rounded</shapla-button>
				<br>
				<shapla-button outline rounded theme="secondary">Secondary outline rounded</shapla-button>
			</div>
		</section>
		<h4 class="section-title">FAB Button</h4>
		<section class="section">
			<div class="shapla-buttons">
				<shapla-button fab theme="primary">+</shapla-button>
				<br>
				<shapla-button fab size="large" theme="secondary">+</shapla-button>
			</div>
		</section>
		<h4 class="section-title">Button with shadow</h4>
		<section class="section">
			<div class="shapla-buttons">
				<shapla-button shadow>Default with shadow</shapla-button>
				<br>
				<shapla-button shadow theme="primary">Primary with shadow</shapla-button>
				<br>
				<shapla-button shadow theme="secondary">Secondary with shadow</shapla-button>
				<br>
				<shapla-button fab shadow>+</shapla-button>
			</div>
		</section>
	</div>
</template>

<script>
import shaplaButton from "shapla-button";
import {columns, column} from 'shapla-columns';
import hljs from "highlight.js";

export default {
	name: "TestButton",
	components: {shaplaButton, columns, column},
	mounted() {
		hljs.initHighlightingOnLoad();
	}
}
</script>

<style lang="scss">
.shapla-buttons {

	.shapla-button:not(:last-child):not(.is-fullwidth) {
		margin-right: .5em;
	}

	.shapla-button {
		margin-bottom: .5em;
	}
}
</style>