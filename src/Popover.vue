<template>
    <div ref="popover" class="popover" @click="onClick">
        <div ref="contentWrapper" v-if="visible" class="content-wrapper"
             :class="{[`position-${position}`]: true}">
            <!--Slot for popover content-->
            <slot name="content"></slot>
        </div>
        <!--Slot for button-->
        <span ref="triggerWrapper" style="display: inline-block;">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "w-popover",
        props: {
            position: {
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'bottom', 'left', 'right'].indexOf(value) >= 0;
                }
            }
        },
        data() {
            return {
                visible: false
            }
        },
        methods: {
            setContentPosition() {
                const {contentWrapper, triggerWrapper} = this.$refs;

                document.body.appendChild(contentWrapper);
                let {top, left, width, height} = triggerWrapper.getBoundingClientRect();

                if (this.position === 'top') {
                    contentWrapper.style.left = left + window.scrollX + 'px';
                    contentWrapper.style.top = top + window.scrollY + 'px';
                }
                else if (this.position === 'bottom') {
                    contentWrapper.style.left = left + window.scrollX + 'px';
                    contentWrapper.style.top = top + height + window.scrollY + 'px';
                }
                else if (this.position === 'left') {
                    let {height: height2} = contentWrapper.getBoundingClientRect();

                    contentWrapper.style.left = left + window.scrollX + 'px';
                    contentWrapper.style.top = top + window.scrollY
                        + (height - height2) / 2 + 'px';
                }
                else if (this.position === 'right') {
                    let {height: height2} = contentWrapper.getBoundingClientRect();

                    contentWrapper.style.left = left + width + window.scrollX + 'px';
                    contentWrapper.style.top = top + window.scrollY
                        + (height - height2) / 2 + 'px';
                }
            },
            onClickDocument(e) {
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target ||
                        this.$refs.popover.contains(e.target))) {
                    return;
                }

                if (this.$refs.contentWrapper &&
                    (this.$refs.contentWrapper === e.target ||
                        this.$refs.contentWrapper.contains(e.target))) {
                    return;
                }

                this.close();
            },
            open() {
                this.visible = true;
                this.$nextTick(() => {
                    this.setContentPosition();
                    document.addEventListener('click', this.onClickDocument);
                });
            },
            close() {
                this.visible = false;
                document.removeEventListener('click', this.onClickDocument);
            },
            onClick(event) {
                if (this.$refs.triggerWrapper.contains(event.target)) {
                    if (this.visible) {
                        this.close();
                    }
                    else {
                        this.open();
                    }
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $border-color: #42B983;
    $border-radius: 4px;
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        padding: .5em 1em;
        border: 1px solid $border-color;
        border-radius: $border-radius;
        filter: drop-shadow(0 1px 1px rgba(0, 0, 0, 0.5));
        background: white;
        max-width: 20em;
        word-break: break-all;

        &::before, &::after {
            content: '';
            display: block;
            border: 10px solid transparent;
            width: 0;
            height: 0;
            position: absolute;
        }

        &.position-top {
            transform: translateY(-100%);
            margin-top: -10px;
            &::before, &::after {
                left: 10px;
            }
            &::before {
                border-top-color: $border-color;
                top: 100%;
            }
            &::after {
                border-top-color: white;
                top: calc(100% - 1px);
            }
        }
        &.position-bottom {
            margin-top: 10px;
            &::before, &::after {
                left: 10px;
            }
            &::before {
                border-bottom-color: $border-color;
                bottom: 100%;
            }
            &::after {
                border-bottom-color: white;
                bottom: calc(100% - 1px);
            }
        }
        &.position-left {
            transform: translateX(-100%);
            margin-left: -10px;
            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }
            &::before {
                left: 100%;
                border-left-color: $border-color;
            }
            &::after {
                left: calc(100% - 1px);
                border-left-color: white;
            }
        }
        &.position-right {
            margin-left: 10px;
            &::before, &::after {
                transform: translateY(-50%);
                top: 50%;
            }
            &::before {
                right: 100%;
                border-right-color: $border-color;
            }
            &::after {
                right: calc(100% - 1px);
                border-right-color: white;
            }
        }
    }
</style>