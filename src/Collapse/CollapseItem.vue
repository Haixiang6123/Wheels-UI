<template>
    <div class="collapse-item">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div v-if="open" class="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "w-collapse-item",
        inject: ['eventBus'],
        props: {
            title: {
                type: String,
                required: true
            },
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
        mounted() {
            this.eventBus && this.eventBus.$on('update:selected', (names) => {
                if (names.indexOf(this.name) >= 0) {
                    this.open = true;
                }
                else {
                    this.open = false;
                }
            });
        },
        methods: {
            toggle() {
                if (this.open) {
                    this.eventBus && this.eventBus.$emit('update:removeSelected', this.name);
                }
                else {
                    this.eventBus && this.eventBus.$emit('update:addSelected', this.name);
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapse-item {
        > .title {
            display: flex;
            align-items: center;
            padding: 0 8px;
            min-height: 32px;
            border: 1px solid $grey;
            margin: -1px -1px 0;
        }
        &:first-child {
            > .title {
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child {
            > .title:last-child {
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
        > .content {
            padding: 8px;
        }
    }
</style>