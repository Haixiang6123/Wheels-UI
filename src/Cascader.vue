<template>
    <div class="cascader">
        <div class="trigger" @click="itemsVisible = !itemsVisible"></div>
        <div v-if="itemsVisible" :style="{height: itemsHeight}" class="items-wrapper">
            <w-cascader-items
                    :items="source"
                    :items-height="itemsHeight"
                    :selected="selected"
                    @update:selected="onUpdateSelected">
            </w-cascader-items>
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
            },
            itemsHeight: {
                type: String,
            },
            selected: {
                type: Array,
                default: () => {
                    return [];
                }
            }
        },
        data() {
            return {
                itemsVisible: true,
            }
        },
        computed: {
        },
        methods: {
            onUpdateSelected(newSelected) {
                this.$emit('update:selected', newSelected);
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
        position: relative;
        .trigger {
            border: 1px solid red;
            height: 32px;
            width: 100px;
        }

        .items-wrapper {
            @include box-shadow;
            position: absolute;
            top: 100%;
            left: 0;
            display: flex;
            background: white;
            border-radius: $border-radius;
            .label {
                flex-wrap: nowrap;
            }
        }
    }
</style>