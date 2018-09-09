<template>
    <div ref="popover" class="popover" @click="onClick">
        <div ref="contentWrapper" v-if="visible" class="content-wrapper">
            <!--Slot for popover content-->
            <slot name="content"></slot>
        </div>
        <!--Slot for button-->
        <span ref="triggerWrapper">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "w-popover",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            setContentPosition() {
                document.body.appendChild(this.$refs.contentWrapper);
                let {top, left} = this.$refs.triggerWrapper.getBoundingClientRect();
                this.$refs.contentWrapper.style.left = left + window.scrollX + 'px';
                this.$refs.contentWrapper.style.top = top + window.scrollY + 'px';
            },
            onClickDocument(e) {
                if (this.$refs.popover &&
                    (this.$refs.popover === e.target ||
                        this.$refs.popover.contains(e.target))) {
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
                console.log('CLose');
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
    .popover {
        display: inline-block;
        vertical-align: top;
        position: relative;
    }

    .content-wrapper {
        position: absolute;
        border: 1px solid red;
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        transform: translateY(-100%);
    }
</style>