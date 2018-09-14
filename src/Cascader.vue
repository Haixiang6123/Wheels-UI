<template>
    <div class="cascader">
        <div class="trigger" @click="itemsVisible = !itemsVisible"></div>
        <div v-if="itemsVisible" class="items">
            <w-cascader-items :items="source"></w-cascader-items>
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
        data() {
            return {
                itemsVisible: true,
            }
        },
        computed: {
        },
        components: {
            'w-cascader-items': CascaderItems
        }
    }
</script>

<style scoped lang="scss">
    @import "var.scss";

    .cascader {
        .trigger {
            border: 1px solid red;
            height: 32px;
            width: 100px;
        }

        .items {
            display: flex;
            border: 2px solid green;
            height: 200px;
            .label {
                flex-wrap: nowrap;
            }
        }
    }
</style>