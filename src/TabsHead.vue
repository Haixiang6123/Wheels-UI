<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "w-tabs-head",
        inject: ['eventBus'],
        created() {
        }
    }
</script>

<style scoped lang="scss">
    $tabs-head-height: 40px;

    .tabs-head {
        display: flex;
        height: $tabs-head-height;
        justify-content: flex-start;
        border: 1px solid red;

        .actions-wrapper  {
            margin-left: auto;
        }
    }
</style>