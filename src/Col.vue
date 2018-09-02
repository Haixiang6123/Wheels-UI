<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]"
        :style="{paddingLeft: gutter/2 + 'px', paddingRight: gutter/2 + 'px'}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "w-col",
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
        },
        data() {
            return {
                gutter: 0
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        height: 100px;
        width: 50%;
        background: grey;
        border: 1px solid red;

        $class: col-;

        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                width: ($n / 24) * 100%;
            }
        }

        $class: offset-;

        @for $n from 1 through 24 {
            &.#{$class}#{$n} {
                margin-left: ($n / 24) * 100%;
            }
        }
    }
</style>