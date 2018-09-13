<template>
    <div class="w-button-group">
        <slot/>
    </div>
</template>

<script>
    export default {
        name: "w-button-group",
        mounted() {
            for (let node of this.$el.children) {
                if (node.nodeName.toLowerCase() !== 'button') {
                    console.warn(`Children of <ButtonGroup> should be <Button>, but <${node.nodeName.toLowerCase()}> detected!`);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $border-radius: 4px;

    .w-button-group {
        display: inline-flex;
        vertical-align: middle;

        > .w-button {
            border-radius: 0;
            &:not(:first-child) {
                margin-left: -1px;
            }

            &:first-child {
                border-top-left-radius: $border-radius;
                border-bottom-left-radius: $border-radius;
            }
            &:last-child {
                border-top-right-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
            &:hover {
                position: relative;
                z-index: 1;
            }
        }
    }
</style>