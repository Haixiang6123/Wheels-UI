<template>
    <div class="w-carousel">
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
                {{n - 1}}
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
                lastSelectedIndex: undefined
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
            select(index) {
                // Mark last selected item
                this.lastSelectedIndex = this.selectedIndex;
                this.$emit('update:selected', this.names[index]);
            },
            playAutomatically() {
                let index = this.names.indexOf(this.getSelected());

                // Use setTimeout() to simulate setInterval()
                let play = () => {
                    index--;

                    if (index === -1) {
                        index = this.names.length - 1;
                    }
                    if (index === this.names.length) {
                        index = 0;
                    }

                    this.select(index);

                    setTimeout(play, 10000);
                };

                setTimeout(play, 10000);
            },
            getSelected() {
                let first = this.$children[0];

                return this.selected || first.name;
            },
            updateChildren() {
                let selected = this.getSelected();
                this.$children.forEach((vm) => {
                    // Announce selected to children
                    vm.reverse = this.selectedIndex <= this.lastSelectedIndex;
                    // Wait for next tick to do animation
                    this.$nextTick(() => {
                        vm.selected = selected;
                    });
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .w-carousel {
        &-window {
            overflow: hidden;
        }
        &-wrapper {
            position: relative;
        }
        &-navigators {
            > span {
                &.active {
                    color: red;
                }
            }
        }
    }
</style>