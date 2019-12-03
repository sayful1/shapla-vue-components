<template>
    <div>
        <div @click.prevent="active = true">
            Left
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                 viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z"></path>
            </svg>
        </div>
        <div @click.prevent="activeRight = true">
            Right
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                 viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z"></path>
            </svg>
        </div>

        <side-navigation :active="active" @close="active = false" nav-width="300px">
            <a>Link 1</a>
        </side-navigation>

        <side-navigation :active="activeRight" @close="activeRight = false" position="right" nav-width="300px">
            <a>Link 1</a>
        </side-navigation>
    </div>
</template>

<script>
    import sideNavigation from '../../../shapla-side-navigation';

    export default {
        name: "TestSideNavigation",
        components: {sideNavigation},
        data() {
            return {
                active: false,
                activeRight: false,
            }
        },
    }
</script>

<style scoped>

</style>