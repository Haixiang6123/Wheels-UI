<template>
    <div class="w-carousel"
         @mouseenter="onMouseEnter"
         @mouseleave="onMouseLeave"
         @touchstart="onTouchStart"
         @touchend="onTouchEnd">
        <div class="w-carousel-window" ref="window">
            <div class="w-carousel-wrapper">
                <slot></slot>
            </div>
        </div>
        <!--Navigators-->
        <div class="w-carousel-navigators">
            <span @click="onClickPrev">
                <w-icon color="#42B983" name="up"></w-icon>
            </span>
            <span
                :key="n"
                :data-index="n-1"
                v-for="n in childrenLength"
                :class="{active: selectedIndex === n - 1}"
                @click="select(n - 1)">
                {{n}}
            </span>
            <span @click="onCLickNext">
                <w-icon color="#42B983" name="down"></w-icon>
            </span>
        </div>
    </div>
</template>

<script>
    import Icon from '../Icon/Icon';

    export default {
        name: "w-carousel",
        props: {
            selected: {
                type: String
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            autoPlayDelay: {
                type: Number,
                default: 3000
            }
        },
        data() {
            return {
                childrenLength: 0,
                lastSelectedIndex: undefined,
                timeId: undefined,
                startTouch: undefined
            }
        },
        computed: {
            selectedIndex() {
                return this.names.indexOf(this.getSelected());
            },
            names() {
                return this.items.map((vm) => vm.name);
            },
            items() {
                return this.$children.filter(vm => vm.$options.name === 'w-carousel-item');
            }
        },
        components: {
            'w-icon': Icon
        },
        mounted() {
            // Init
            this.updateChildren();

            // Start auto play
            if (this.autoPlay) {
                this.playAutomatically();
            }

            // Get navigators
            this.childrenLength = this.items.length;

            this.lastSelectedIndex = this.selected;
        },
        updated() {
            // Update when selected is changed
            this.updateChildren();
        },
        methods: {
            onClickPrev() {
                this.select(this.selectedIndex - 1);
            },
            onCLickNext() {
                this.select(this.selectedIndex + 1);
            },
            onTouchStart(e) {
                this.pause();
                // Disable multi touch
                if (e.touches.length > 1) {
                    return;
                }

                this.startTouch = e.touches[0];
            },
            onTouchEnd(e) {
                let endTouch = e.changedTouches[0];

                let {clientX: x1, clientY: y1} = this.startTouch;
                let {clientX: x2, clientY: y2} = endTouch;


                let distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
                let deltaY = Math.abs(y2 - y1);
                let slope = distance / deltaY;

                if (slope > Math.sqrt(2)) {
                    if (x2 > x1) {
                        // Next slide
                        this.select(this.selectedIndex - 1);
                    }
                    else {
                        // Previous slide
                        this.select(this.selectedIndex + 1);
                    }
                }
                this.$nextTick(() => {
                    this.playAutomatically();
                });
            },
            onMouseEnter() {
                this.pause();
            },
            onMouseLeave() {
                this.playAutomatically();
            },
            select(index) {
                // Edge cases
                if (index === -1) {
                    index = this.names.length - 1;
                }
                if (index === this.names.length) {
                    index = 0;
                }
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

                    this.select(index);

                    this.timeId = setTimeout(play, this.autoPlayDelay);
                };

                this.timeId = setTimeout(play, this.autoPlayDelay);
            },
            pause() {
                window.clearTimeout(this.timeId);
                this.timeId = undefined;
            },
            getSelected() {
                let first = this.items[0];

                return this.selected || first.name;
            },
            updateChildren() {
                let selected = this.getSelected();
                this.items.forEach((vm) => {
                    let reverse = this.selectedIndex <= this.lastSelectedIndex;
                    if (!this.timeId) {
                        // Last one
                        if (this.lastSelectedIndex === this.items.length - 1 && this.selectedIndex === 0) {
                            reverse = false;
                        }
                        if (this.lastSelectedIndex === 0 && this.selectedIndex === this.items.length - 1) {
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
    @import 'var';

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