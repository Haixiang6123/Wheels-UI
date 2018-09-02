<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
               @change="$emit('change', $event)"
               @input="$emit('input', $event)"
               @focus="$emit('focus', $event)"
               @blur="$emit('blur', $event)">
        <template v-if="error">
            <w-icon v-if="error" class="icon-error" name="error"/>
            <span v-if="error" class="error-message">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './Icon';

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
    /*--button-height: 32px;*/
    /*--font-size: 14px;*/
    /*--button-bg: white;*/
    /*--button-active-bg: #eee;*/
    /*--border-radius: 4px;*/
    /*--color: #42B983;*/
    /*--border-color: #42B983;*/
    /*--border-color-hover: #42B983;*/

    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .wrapper {
        display: inline-flex;font-size: $font-size;align-items: center;

        > :not(:last-child) {margin-right: .5em}

        > input {height: 32px;border: 1px solid $border-color;border-radius: $border-radius;padding: 0 8px;font-size: inherit;
            &:hover {border-color: $border-color-hover;}
            &:focus {box-shadow: inset 0 1px 3px $box-shadow-color;outline: none;}
            &[disabled], &[readonly] {border-color: #ccc;color: #bbb;cursor: not-allowed;}
        }

        &.error {
            > input {border-color: $red;}
        }

        .icon-error {fill: $red;}
        .error-message {color: $red;}
    }
</style>