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
        <div @click.prevent="activeBottom = true">
            Bottom
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                 viewBox="0 0 20 20">
                <title>menu</title>
                <path d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z"></path>
            </svg>
        </div>
        <div @click.prevent="activeTop = true">
            Top
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
        <side-navigation :active="activeBottom" @close="activeBottom = false" position="bottom" nav-width="100%">
            <a>Link 1</a>
        </side-navigation>
        <side-navigation :active="activeTop" @close="activeTop = false" position="top" nav-width="100%">
            <a>Link 1</a>
        </side-navigation>
    </div>
</template>

<script>
    import sideNavigation from '../../../components/shapla-side-navigation';

    export default {
        name: "TestSideNavigation",
        components: {sideNavigation},
        data() {
            return {
                active: false,
                activeRight: false,
                activeBottom: false,
                activeTop: false,
            }
        },
    }
</script>

<style scoped>

</style>