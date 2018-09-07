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
        mounted() {
            this.eventBus.$on('update:selected', (itemName, item) => {
                let {width, height, top, left} = item.$el.getBoundingClientRect();
                this.$refs.line.style.width = `${width}px`;
                this.$refs.line.style.left = `${left}px`;
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
            bottom: 0;
            border-bottom: 2px solid $primary-color;
            transition: all 300ms;
        }

        > .actions-wrapper  {
            margin-left: auto;
        }
    }
</style>