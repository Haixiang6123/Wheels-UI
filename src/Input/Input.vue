<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)">
        <template v-if="error">
            <w-icon v-if="error" class="icon-error" name="error"/>
            <span v-if="error" class="error-message">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from '../Icon/Icon';

    export default {
        name: "w-input",
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        },
        components: {
            'w-icon': Icon
        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    .wrapper {
        display: inline-flex;font-size: $font-size;align-items: center;

        > :not(:last-child) {margin-right: .5em}

        > input {height: $input-height;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: inherit;
            &:hover {border-color: $border-color-hover;}
            &:focus {box-shadow: 0 0 1px $box-shadow-color;outline: none;}
            &[disabled], &[readonly] {border-color: #ccc;color: #bbb;cursor: not-allowed;}
        }

        &.error {
            > input {border-color: $red;}
        }

        .icon-error {fill: $red;}
        .error-message {color: $red;}
    }
</style>