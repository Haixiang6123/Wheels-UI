<template>
    <div class="cascader-items">
        {{sourceItem.name}}
        <w-cascader-items
                v-if="sourceItem.children"
                v-for="item in sourceItem.children"
                :sourceItem="item">
        </w-cascader-items>
    </div>
</template>

<script>
    export default {
        name: "w-cascader-items",
        props: {
            sourceItem: {
                type: Object
            }
        },
    };
</script>

<style scoped lang="scss">
    .cascader-items {

    }
</style>