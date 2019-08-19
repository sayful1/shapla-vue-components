<template>
    <div>
        <columns>
            <column>
                <span>Input</span>
                <star-rating v-model="rating"></star-rating>
                <pre>{{rating}}</pre>
            </column>
            <column>
                <span>Static</span>
                <star-rating v-model="staticRating" :is-static="true"></star-rating>
                <pre>{{staticRating}}</pre>
            </column>
        </columns>
    </div>
</template>

<script>
    import StarRating from "../../shapla-star-rating/src/StarRating";
    import {columns, column} from '../../shapla-columns'

    export default {
        name: "TestStarRating",
        components: {StarRating, columns, column},
        data() {
            return {
                rating: 3,
                staticRating:3.7
            }
        }
    }
</script>

<style scoped>

</style>