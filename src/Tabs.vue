<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "w-tabs",
        props: {
            selected: {
                type: String,
                required: true
            },
            orientation: {
                type: String,
                default: 'horizontal',
                validator(value) {
                    return ['horizontal', 'vertical'].indexOf(value) >= 0;
                }
            }
        },
        created() {
            this.$emit('update:selected', 'xx');
        }
    }
</script>

<style scoped lang="scss">
    .tabs {

    }
</style>