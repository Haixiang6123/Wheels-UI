<template>
    <div v-if="active" class="tabs-pane" :class="tabsPaneClasses">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "w-tabs-pane",
        inject: ['eventBus'],
        props: {
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
            tabsPaneClasses() {
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
    }
</script>

<style scoped lang="scss">
    .tabs-pane {
        padding: 1em;
        &.active {
        }
    }
</style>