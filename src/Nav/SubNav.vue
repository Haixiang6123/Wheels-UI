<template>
    <div class="w-sub-nav">
        <span>
            <slot name="title"></slot>
        </span>
        <div class="w-sub-nav-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "w-sub-nav"
    }
</script>

<style scoped lang="scss">
    .w-sub-nav {
        position: relative;
        padding: 10px 20px;
        &-content {
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid black;
            white-space: nowrap;
        }
    }
</style>