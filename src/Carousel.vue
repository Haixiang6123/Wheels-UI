<template>
    <div class="w-carousel" @mouseenter="onMouseEnter" @mouseleave="onMouseLeave">
        <div class="w-carousel-window" ref="window">
            <div class="w-carousel-wrapper">
                <slot></slot>
            </div>
        </div>
        <!--Navigators-->
        <div class="w-carousel-navigators">
            <span
                v-for="n in childrenLength"
                :class="{active: selectedIndex === n - 1}"
                @click="select(n - 1)">
                {{n}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "w-carousel",
        props: {
            selected: {
                type: String
            },
            autoPlay: {
                type: Boolean,
                default: true
            }
        },
        data() {
            return {
                childrenLength: 0,
                lastSelectedIndex: undefined,
                timeId: undefined
            }
        },
        computed: {
            selectedIndex() {
                return this.names.indexOf(this.getSelected());
            },
            names() {
                return this.$children.map((vm) => vm.name);
            }
        },
        mounted() {
            // Init
            this.updateChildren();

            // Start auto play
            this.autoPlay && this.playAutomatically();

            // Get navigators
            this.childrenLength = this.$children.length;

            this.lastSelectedIndex = this.selected;
        },
        updated() {
            // Update when selected is changed
            this.updateChildren();
        },
        methods: {
            onMouseEnter() {
                this.pause();
            },
            onMouseLeave() {
                this.playAutomatically();
            },
            select(index) {
                // Mark last selected item
                this.lastSelectedIndex = this.selectedIndex;
                this.$emit('update:selected', this.names[index]);
            },
            playAutomatically() {
                if (this.timeId) {
                    return;
                }
                let index = this.names.indexOf(this.getSelected());

                // Use setTimeout() to simulate setInterval()
                let play = () => {
                    index++;

                    // Edge cases
                    if (index === -1) {
                        index = this.names.length - 1;
                    }
                    if (index === this.names.length) {
                        index = 0;
                    }

                    this.select(index);

                    this.timeId = setTimeout(play, 2000);
                };

                this.timeId = setTimeout(play, 2000);
            },
            pause() {
                window.clearTimeout(this.timeId);
                this.timeId = undefined;
            },
            getSelected() {
                let first = this.$children[0];

                return this.selected || first.name;
            },
            updateChildren() {
                let selected = this.getSelected();
                this.$children.forEach((vm) => {
                    let reverse = this.selectedIndex <= this.lastSelectedIndex;
                    if (this.timeId) {
                        // Last one
                        if (this.lastSelectedIndex === this.$children.length - 1 && this.selectedIndex === 0) {
                            reverse = false;
                        }
                        if (this.lastSelectedIndex === 0 && this.selectedIndex === this.$children.length - 1) {
                            reverse = true;
                        }
                    }
                    vm.reverse = reverse;
                    // Wait for next tick to do animation
                    this.$nextTick(() => {
                        // Inform children that selected is changed
                        vm.selected = selected;
                    });
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    @import 'var.scss';
    .w-carousel {
        &-window {
            overflow: hidden;
        }
        &-wrapper {
            position: relative;
        }
        &-navigators {
            padding: 8px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            > span {
                margin: 0 8px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background: #ddd;
                font-size: 12px;
                color: white;
                border: 1px solid white;
                &:hover {
                    cursor: pointer;
                }
                &.active {
                    color: $color;
                    border-color: $border-color;
                    &:hover {
                        cursor: default;
                    }
                }
            }
        }
    }
</style>