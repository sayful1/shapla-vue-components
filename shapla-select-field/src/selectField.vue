<template>
    <div class="shapla-text-field">
        <div class="shapla-text-field__control">
            <select id="delivery-type-loc" name="delivery_type_loc" class="shapla-text-field__input has-value">
                <option data-visiblemobile="Type of location" value="">Choose</option>
                <option data-required="true" data-value="Name" value="Hotel">Hotel</option>
                <option data-required="true" data-value="Name" value="Other">Other</option>
                <option data-required="true" data-value="Name of the church" value="Church">Church</option>
                <option data-required="true" data-value="Name" value="Funeral Home">Funeral Home</option>
                <option data-required="false" data-value="I don't know" value="I don't know">I don't know</option>
            </select>
            <label for="delivery-type-loc" class="shapla-text-field__label">Type of location *</label>
        </div>
        <small class="shapla-text-field__help-text">Information missing, please re-check the form</small>
    </div>
</template>

<script>
    export default {
        name: "selectField"
    }
</script>

<style lang="scss">
    // @import "select-field";
    @import "../shapla-text-field/src/text-field";
</style>