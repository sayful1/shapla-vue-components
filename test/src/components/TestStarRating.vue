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
            <column>
                <span>Static 2</span>
                <star-rating v-model="staticRating2" :is-static="true"></star-rating>
                <pre>{{staticRating2}}</pre>
            </column>
            <column>
                <span>Static 3</span>
                <star-rating v-model="staticRating3" :is-static="true"></star-rating>
                <pre>{{staticRating3}}</pre>
            </column>
        </columns>
    </div>
</template>

<script>
    import StarRating from "../../../shapla-star-rating/src/StarRating";
    import {columns, column} from '../../../shapla-columns'

    export default {
        name: "TestStarRating",
        components: {StarRating, columns, column},
        data() {
            return {
                rating: 3,
                staticRating: 3.2,
                staticRating2: 3.5,
                staticRating3: 3.7,
            }
        }
    }
</script>

<style scoped>

</style>