<template>
    <button class="ow-button" :class="{[`icon-${iconPosition}`]: true}"
        @click="$emit('click')">
        <ow-icon class="icon" v-if="icon && !loading" :name="icon"/>
        <ow-icon v-if="loading" class="loading icon" name="loading"/>
        <span class="content">
            <slot/>
        </span>
    </button>
</template>

<script>
    export default {
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
        }
    };
</script>

<style lang="scss">
    @keyframes spin {
        0% {
            transform: rotate(0);
        }

        100% {
            transform: rotate(360deg);
        }
    }

    .ow-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: top;

        &:hover {
            border-color: var(--border-color-hover);
        }
        &:active {
            background-color: var(--button-active-bg);
        }
        &:focus {
            outline: none;
        }

        > .content {
            order: 2;
        }
        > .icon {
            order: 1;
            margin-right: .1em;
        }

        &.icon-right {
            > .content {
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