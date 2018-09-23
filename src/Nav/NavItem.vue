<template>
    <div class="w-nav-item" :class="{selected}" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "w-nav-item",
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
                this.$emit('add:selected', this.name);
            }
        }
    }
</script>

<style scoped lang="scss">
    .w-nav-item {
        padding: 10px 20px;
        &.selected {
            background: red;
        }
    }
</style>