<template>
    <div class="w-sub-nav">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div v-show="open" class="w-sub-nav-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "w-sub-nav",
        data() {
            return {
                open: false
            }
        },
        methods: {
            onClick() {
                this.open = !this.open;
            }
        }
    }
</script>

<style scoped lang="scss">
    .w-sub-nav {
        position: relative;
        > span {
            display: block;
            padding: 10px 20px;
        }
        &-content {
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid black;
            white-space: nowrap;
        }
    }

    .w-sub-nav .w-sub-nav .w-sub-nav-content {
        top: 0;
        left: 100%;
        margin-left: 8px;
    }
</style>