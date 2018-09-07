<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
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
            this.eventBus.$on('update:selected', (itemName, item) => {

            });
        }
    }
</script>

<style scoped lang="scss">
    $tabs-head-height: 40px;
    $primary-color: #42B983;

    .tabs-head {
        display: flex;
        height: $tabs-head-height;
        justify-content: flex-start;
        position: relative;

        > .line {
            position: absolute;
            width: 100px;
            bottom: 0;
            border-bottom: 1px solid $primary-color;
        }

        > .actions-wrapper  {
            margin-left: auto;
        }
    }
</style>