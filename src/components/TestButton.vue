<template>
    <div>
        <shapla-button>Default</shapla-button>
        <shapla-button disabled>Default disabled</shapla-button>
        <shapla-button theme="primary">Primary</shapla-button>
        <shapla-button theme="primary" disabled>Primary disabled</shapla-button>
        <shapla-button theme="secondary">Secondary</shapla-button>
        <shapla-button theme="secondary" disabled>Secondary disabled</shapla-button>
        <shapla-button size="small">Small</shapla-button>
        <shapla-button size="medium">Medium</shapla-button>
        <shapla-button size="large">Large</shapla-button>
        <shapla-button fullwidth>Full Width</shapla-button>
    </div>
</template>

<script>
    import shaplaButton from "../../shapla-button/src/shaplaButton";

    export default {
        name: "TestButton",
        components: {shaplaButton}
    }
</script>

<style scoped>

</style>