<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: "w-collapse",
        props: {
            singleSelected: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                eventBus: new Vue()
            }
        },
        provide() {
            if (this.singleSelected) {
                return {
                    eventBus: this.eventBus
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    $grey: #ddd;
    $border-radius: 4px;
    .collapse {
        border: 1px solid $grey;
        border-radius: $border-radius;
    }
</style>