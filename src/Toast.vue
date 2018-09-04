<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "w-toast"
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    $box-shadow: rgba(0, 0, 0, 0.5);

    .toast {
        display: flex;align-items: center;height: $toast-height;
        position: fixed;top: 0;left: 50%;transform: translateX(-50%);
        font-size: $font-size;line-height: 1.8;color: white;background: $toast-bg;
        border-radius: 4px;box-shadow: 0 0 3px 0 $box-shadow;padding: 0 16px;
    }
</style>