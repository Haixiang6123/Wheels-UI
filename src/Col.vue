<template>
    <div class="col" :class="colClass"
         :style="colStyle">
        <slot></slot>
    </div>
</template>

<script>
    let validator = (value) => {
        let keys = Object.keys(value);
        let valid = true;
        keys.forEach(key => {
            if (!['span', 'offset'].includes(key)) {
                valid = false;
            }
        });
        return valid;
    };

    export default {
        name: "w-col",
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            ipad: {type: Object, validator,},
            narrowPc: {type: Object, validator,},
            pc: {type: Object, validator},
            widePc: {type: Object, validator,},
        },
        data() {
            return {
                gutter: 0,
            }
        },
        computed: {
            colClass() {
                let {span, offset, ipad, narrowPc, pc, widePc} = this;
                let {createClasses} = this;
                return [
                    ...createClasses({span, offset}),
                    ...createClasses(ipad, 'ipad-'),
                    ...createClasses(narrowPc, 'narrow-pc-'),
                    ...createClasses(pc, 'pc-'),
                    ...createClasses(widePc, 'wide-pc-')
                ];
            },
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            }
        },
        methods: {
            createClasses(obj, str = '') {
                if (!obj) {
                    return [];
                }

                let classes = [];
                if (obj.span) {
                    classes.push(`col-${str}${obj.span}`);
                }
                if (obj.offset) {
                    classes.push(`offset-${str}${obj.offset}`);
                }

                return classes;
            }
        }
    }
</script>

<style scoped lang="scss">
    .col {
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

        @media (min-width: 577px) {
            $class: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }

            $class: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }

        @media (min-width: 769px) {
            $class: col-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }

            $class: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }

        @media (min-width: 769px) {
            $class: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }

            $class: offset-narrow-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }

        @media (min-width: 1201px) {
            $class: col-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    width: ($n / 24) * 100%;
                }
            }

            $class: offset-wide-pc-;
            @for $n from 1 through 24 {
                &.#{$class}#{$n} {
                    margin-left: ($n / 24) * 100%;
                }
            }
        }
    }
</style>