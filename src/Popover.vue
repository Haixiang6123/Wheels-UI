<template>
    <div class="popover" @click.stop="xxx">
        <div v-if="visible" class="content-wrapper" @click.stop>
            <!--Slot for popover content-->
            <slot name="content"></slot>
        </div>
        <!--Slot for button-->
        <slot></slot>
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
            xxx() {
                this.visible = !this.visible;

                if (this.visible === true) {
                    this.$nextTick(() => {
                        let eventHandler = () =>{
                            this.visible = false;
                            document.removeEventListener('click', eventHandler);
                        };

                        document.addEventListener('click', eventHandler);
                    });
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

        .content-wrapper {
            position: absolute;
            bottom: 100%;
            left: 0;
            border: 1px solid red;
            box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
        }
    }
</style>