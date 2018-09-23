<template>
    <svg :style="{fill: color}" class="w-icon">
        <use :xlink:href="`#i-${name}`"></use>
    </svg>
</template>

<script>
    import '../svg';
    export default {
        name: "w-icon",
        props: {
            name: {
                type: String,
                required: true
            },
            color: {
                type: String,
                default: '#ddd'
            }
        }
    }
</script>

<style scoped lang="scss">
    .w-icon {
        height: 1em;
        width: 1em;
    }
</style>