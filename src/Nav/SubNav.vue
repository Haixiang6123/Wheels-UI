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
    @import "var";

    .w-sub-nav {
        position: relative;
        > span {
            display: block;
            padding: 10px 20px;
        }
        &-content {
            margin-top: 1px;
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid #ddd;
            border-radius: $border-radius;
            white-space: nowrap;
            background: white;
            box-shadow: 0 0 3px $light-grey;
            color: $medium-grey;
            font-size: $font-size;
            min-width: 6em;
        }
    }

    .w-sub-nav .w-sub-nav .w-sub-nav-content {
        top: 0;
        left: 100%;
        margin-left: 8px;
    }
</style>