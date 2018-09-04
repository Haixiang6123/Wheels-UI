<template>
    <transition name="slide">
        <div class="sider" v-if="visible">
            <slot></slot>
            <button @click="visible = false">close</button>
        </div>
    </transition>
</template>

<script>
    export default {
        name: "w-sider",
        data() {
            return {
                visible: true
            };
        },
    }
</script>

<style scoped lang="scss">
    .sider {
        position: relative;

        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
    }

    .slide-enter-active, .slide-leave-active {
        transition: width .5s;
    }
    .slide-enter, .slide-leave-to {
        width: 0;
    }
</style>