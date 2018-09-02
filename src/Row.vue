<template>
    <div class="row">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "w-row"
    }
</script>

<style scoped lang="scss">
    .row {
        display: flex;
    }
</style>