<template>
    <button class="w-button" :class="{[`icon-${iconPosition}`]: true}"
        @click="$emit('click')">
        <w-icon class="icon" v-if="icon && !loading" :name="icon"/>
        <w-icon v-if="loading" class="loading icon" name="loading"/>
        <span class="content-wrapper">
            <slot></slot>
        </span>
    </button>
</template>

<script>
    import Icon from '../Icon/Icon';

    export default {
        name: "w-button",
        props: {
            loading: {
                type: Boolean,
                default: false
            },
            icon: {},
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return value === 'left' || value === 'right';
                }
            }
        },
        components: {
            'w-icon': Icon
        }
    };
</script>

<style scoped lang="scss">
    @import "var";

    .w-button {
        font-size: $font-size;
        height: $button-height;
        padding: 0 1em;
        color: $color;
        border-radius: $border-radius;
        border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;

        &:hover {
            border-color: $border-color-hover;
        }
        &:active {
            background-color: $button-active-bg;
        }
        &:focus {
            outline: none;
        }

        > .content-wrapper {
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right: .1em;
        }

        &.icon-right {
            > .content-wrapper {
                order: 1;
            }
            > .icon {
                order: 2;
                margin-right: 0;
                margin-left: .1em;
            }
        }

        .loading {
            animation: spin 2s infinite linear;
        }
    }
</style>