<template>
    <div ref="wrapper" class="toast">
        <div class="message">
            <slot v-if="!enableHtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>

        <div class="line" ref="line"></div>
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
                        text: 'Close',
                        callback: undefined
                    }
                }
            },
            enableHtml: {
                type: Boolean,
                default: false
            }
        },
        mounted() {
            this.execAutoClose();
            this.setHeightForLine();
        },
        methods: {
            execAutoClose() {
                if (this.autoClose) {
                    setTimeout(() => {
                        this.close();
                    }, this.autoDelay * 1000);
                }
            },
            setHeightForLine() {
                this.$nextTick(() => {
                    this.$refs.line.style.height = this.$refs.wrapper.getBoundingClientRect().height + 'px';
                });
            },
            close() {
                this.$el.remove();
                this.$destroy();
            },
            onClickClose() {
                this.close();
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback(this);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-min-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    $box-shadow: rgba(0, 0, 0, 0.5);

    .toast {
        display: flex;align-items: center;min-height: $toast-min-height;
        position: fixed;top: 0;left: 50%;transform: translateX(-50%);
        font-size: $font-size;line-height: 1.8;color: white;background: $toast-bg;
        border-radius: 4px;box-shadow: 0 0 3px 0 $box-shadow;padding: 0 16px;

        .message {
            padding: 8px 0;
        }

        .close {
            padding-left: 16px;
            flex-shrink: 0;
        }

        .line {
            height: 100%;
            border-left: 1px solid #666;
            margin-left: 16px;
        }
    }
</style>