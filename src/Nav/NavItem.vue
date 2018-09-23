<template>
    <div class="w-nav-item" :class="{selected}" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "w-nav-item",
        inject: ['root'],
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                selected: false
            }
        },
        methods: {
            onClick() {
                this.root.namePath = [];
                this.$parent.updateNamePath && this.$parent.updateNamePath();
                this.$emit('add:selected', this.name);
            }
        },
        created() {
            this.root.addItem(this);
        }
    }
</script>

<style scoped lang="scss">
    @import 'var';

    .w-nav-item {
        padding: 10px 20px;
        position: relative;
        &.selected {
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 2px solid $color;
                width: 100%;
            }
        }
    }

    .w-sub-nav .w-nav-item {
        &.selected, &:hover {
            background: $light-grey;
            color: $grey;
            &::after {
                display: none;
            }
        }
    }
</style>