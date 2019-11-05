<template>
    <div class="shapla-buttons">
        <shapla-button>Default</shapla-button>
        <shapla-button disabled>Default disabled</shapla-button>
        <shapla-button theme="primary">Primary</shapla-button>
        <shapla-button theme="primary" disabled>Primary disabled</shapla-button>
        <shapla-button theme="secondary">Secondary</shapla-button>
        <shapla-button theme="secondary" disabled>Secondary disabled</shapla-button>
        <shapla-button size="small">Default Small</shapla-button>
        <shapla-button size="medium">Default Medium</shapla-button>
        <shapla-button size="large">Default Large</shapla-button>
        <shapla-button fullwidth>Default full Width</shapla-button>
        <shapla-button outline theme="primary">Primary outline</shapla-button>
        <shapla-button outline theme="secondary">Secondary outline</shapla-button>
        <shapla-button outline disabled theme="primary">Primary outline disabled</shapla-button>
        <shapla-button outline disabled theme="secondary">Secondary outline disabled</shapla-button>
        <shapla-button outline rounded theme="primary">Primary outline rounded</shapla-button>
        <shapla-button outline rounded theme="secondary">Secondary outline rounded</shapla-button>
        <shapla-button fab theme="primary">+</shapla-button>
        <shapla-button fab size="large" theme="secondary">+</shapla-button>
        <shapla-button shadow theme="primary">Primary with shadow</shapla-button>
    </div>
</template>

<script>
    import shaplaButton from "../../shapla-button/src/shaplaButton";

    export default {
        name: "TestButton",
        components: {shaplaButton}
    }
</script>

<style lang="scss">
    .shapla-buttons {

        .shapla-button:not(.is-fullwidth) {
            margin-right: .5em;
        }

        .shapla-button {
            margin-bottom: .5em;
        }
    }
</style>