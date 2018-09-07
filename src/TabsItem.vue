<template>
    <div class="tabs-item" :class="tabsItemClasses" @click="onClick">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "w-tabs-item",
        inject: ['eventBus'],
        props: {
            disabled: {
                type: Boolean,
                default: false
            },
            name: {
                type: [String, Number],
                required: true
            }
        },
        data() {
            return {
                active: false
            }
        },
        computed: {
            tabsItemClasses() {
                return {
                    active: this.active,
                    disabled: this.disabled
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            });
        },
        methods: {
            onClick() {
                if (this.disabled) return;
                this.eventBus.$emit('update:selected', this.name, this);
            }
        }
    }
</script>

<style scoped lang="scss">
    $primary-color: #42B983;
    $disabled-color: gray;

    .tabs-item {
        display: flex;
        padding: 0 1em;
        flex-shrink: 0;
        cursor: pointer;
        height: 100%;
        align-items: center;
        &.active {
            color: $primary-color;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-color;
        }
    }
</style>