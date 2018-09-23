<template>
    <div class="w-sub-nav" :class="{active}" v-click-outside="close">
        <!--Title-->
        <span class="w-sub-nav-title-wrapper" @click="onClick">
            <slot name="title"></slot>
            <!--Indicator-->
            <span class="w-sub-nav-icon" :class="{open}">
                <w-icon color="#666" name="right"></w-icon>
            </span>
        </span>

        <!--Content-->
        <div v-show="open" class="w-sub-nav-content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import Icon from '../Icon/Icon';
    import ClickOutside from '../click-outside';

    export default {
        name: "w-sub-nav",
        inject: ['root'],
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                open: false,
            }
        },
        computed: {
            active() {
                return this.root.namePath.indexOf(this.name) >= 0;
            }
        },
        directives: {
            ClickOutside
        },
        components: {
            'w-icon': Icon
        },
        methods: {
            onClick() {
                this.open = !this.open;
            },
            close() {
                this.open = false;
            },
            updateNamePath() {
                this.root.namePath.unshift(this.name);

                if (this.$parent.updateNamePath) {
                    this.$parent.updateNamePath();
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";

    .w-sub-nav {
        position: relative;
        &.active {
            position: relative;
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 2px solid $color;
                width: 100%;
            }
        }
        &-title-wrapper {
            display: block;
            padding: 10px 20px;
        }
        &-icon {
            display: none;
        }
        &-content {
            margin-top: 1px;
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid #ddd;
            border-radius: $border-radius;
            white-space: nowrap;
            background: white;
            box-shadow: 0 0 3px $light-grey;
            color: $medium-grey;
            font-size: $font-size;
            min-width: 6em;
        }
    }

    .w-sub-nav .w-sub-nav {
        &.active {
            &::after {
                display: none;
            }
        }
        .w-sub-nav-title-wrapper {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .w-sub-nav-content {
            top: 0;
            left: 100%;
            margin-left: 8px;
        }
        .w-sub-nav-label {
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        .w-sub-nav-icon {
            display: inline-flex;
            align-items: center;
            transition: transform 300ms;
            &.open {
                transform: rotate(180deg);
            }
        }
    }
</style>