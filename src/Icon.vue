<template>
    <svg class="w-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    export default {
        name: "icon",
        props: ['name']
    }
</script>

<style lang="scss">
    .w-icon {
        height: 1em;
        width: 1em;
        fill: var(--color);
    }
</style>