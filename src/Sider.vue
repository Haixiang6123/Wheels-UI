<template>
    <transition name="slide">
        <div class="sider" v-if="visible">
            <slot></slot>
            <w-button @click="visible = false">close</w-button>
        </div>
    </transition>
</template>

<script>
    import Button from './Button/Button';
    export default {
        name: "w-sider",
        data() {
            return {
                visible: true
            };
        },
        components: {
            'w-button': Button
        }
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