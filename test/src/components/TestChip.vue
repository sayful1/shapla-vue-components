<template>
    <div>
        <div>
            <h3>Default Chip</h3>
            <shapla-chip>Sayful Islam</shapla-chip>
        </div>
        <div>
            <h3>Default Chip (small)</h3>
            <shapla-chip small>Sayful Islam</shapla-chip>
        </div>

        <div>
            <h3>Deletable Chip</h3>
            <shapla-chip text="Sayful Islam" :deletable="true"/>
        </div>

        <div>
            <h3>Deletable Chip (small)</h3>
            <shapla-chip text="Sayful Islam" :deletable="true" :small="true"/>
        </div>

        <div>
            <h3>Deletable Chip with Contact</h3>
            <shapla-chip text="Sayful Islam" :deletable="true"
                         image_src="https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?size=100&default=retro"
            />
        </div>

        <div>
            <h3>Deletable Chip with Contact (small)</h3>
            <shapla-chip
                    text="Sayful Islam"
                    image_src="https://s.gravatar.com/avatar/5ba82fcf5f7f8b24097ff9f7ad4b3d5b?size=100&default=retro"
                    :deletable="true"
                    :small="true"
            />
        </div>
    </div>
</template>

<script>
    import shaplaChip from "../../../shapla-chip/src/shaplaChip";

    export default {
        name: "TestChip",
        components: {shaplaChip},
    }
</script>

<style scoped>

</style>