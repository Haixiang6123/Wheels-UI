<template>
    <svg class="w-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    import './svg';
    export default {
        name: "w-icon",
        props: ['name']
    }
</script>

<style scoped lang="scss">
    $color: #42B983;

    .w-icon {
        height: 1em;
        width: 1em;
        fill: $color;
    }
</style>