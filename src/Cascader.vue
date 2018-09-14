<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="items">
            <div v-for="item in source">
                <w-cascader-items :sourceItem="item"></w-cascader-items>
            </div>
        </div>
    </div>
</template>

<script>
    import CascaderItems from './CascaderItems';

    export default {
        name: "w-cascader",
        props: {
            source: {
                type: Array
            }
        },
        components: {
            'w-cascader-items': CascaderItems
        }
    }
</script>

<style scoped lang="scss">
    @import "var.scss";

    .cascader {
    }
</style>