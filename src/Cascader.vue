<template>
    <div class="cascader">
        <div class="trigger" @click="itemsVisible = !itemsVisible">
            {{this.selectedValue || '&nbsp;'}}
        </div>
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
            selectedValue() {
                return this.selected.map((item) => item.name).join(' / ');
            }
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
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
            border: 1px solid red;
            height: $input-height;
            min-width: 1em;
            border: 1px solid $border-color;
            border-radius: $border-radius;
        }

        .items-wrapper {
            @include box-shadow;
            position: absolute;
            top: 100%;
            left: 0;
            display: flex;
            background: white;
            border-radius: $border-radius;
            margin-top: 8px;
            .label {
                flex-wrap: nowrap;
            }
        }
    }
</style>