<template>
    <div class="tabs-item" :class="tabsItemClasses" @click="xxx">
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
                    active: this.active
                }
            }
        },
        created() {
            this.eventBus.$on('update:selected', (name) => {
                this.active = name === this.name;
            });
        },
        methods: {
            xxx() {
                this.eventBus.$emit('update:selected', this.name);
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-item {
        display: flex;
        padding: 0 1em;
        flex-shrink: 0;
        cursor: pointer;
        height: 100%;
        align-items: center;

        &.active {
            background: red;
        }
    }
</style>