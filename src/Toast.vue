<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
        <span
            v-if="closeButton"
            class="close"
            @click="onClickClose">
            {{closeButton.text}}
        </span>
    </div>
</template>

<script>
    export default {
        name: "w-toast",
        props: {
            autoClose: {
                type: Boolean,
                default: false
            },
            autoDelay: {
                type: Number,
                default: 3
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: 'Close', callback: (toast) => {
                            toast.close();
                        }
                    }
                }
            }
        },
        mounted() {
            if (this.autoClose) {
                setTimeout(() => {
                    this.close();
                }, this.autoDelay * 1000);
            }
        },
        methods: {
            close() {
                this.$el.remove();
                this.$destroy();
            },
            onClickClose() {
                this.close();
                this.closeButton.callback();
            }
        }
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

    .close {
        padding-left: 16px;
    }

    .line {
        height: 100%;
        border-left: 1px solid #666;
        margin-left: 16px;
    }
</style>