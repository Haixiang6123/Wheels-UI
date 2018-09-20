<template>
    <div class="cascader-items" :style="{height: itemsHeight}">
        <div class="left">
            <div class="label" v-for="(item, index) in items" :key="index" @click="onClickLabel(item)">
                <span class="name">{{item.name}}</span>
                <w-icon class="icon" v-if="rightArrowVisible(item)" name="right"></w-icon>
            </div>
        </div>
        <div v-if="rightItems" class="right">
            <w-cascader-items
                    :items="rightItems"
                    :items-height="itemsHeight"
                    :level="level + 1"
                    :selected="selected"
                    @update:selected="onUpdateSelected">
            </w-cascader-items>
        </div>
    </div>
</template>

<script>
    import Icon from './Icon';
    export default {
        name: "w-cascader-items",
        props: {
            items: {
                type: Array
            },
            itemsHeight: {
                type: String
            },
            selected: {
                type: Array,
                default: () => {
                    return [];
                }
            },
            level: {
                type: Number,
                default: 0
            },
            loadData: {
                type: Function
            }
        },
        data() {
            return {
            };
        },
        computed: {
            rightItems() {
                if (this.selected[this.level]) {
                    let selected = this.items.filter((item) => item.name === this.selected[this.level].name);
                    if (selected && selected[0].children && selected[0].children.length > 0) {
                        return selected[0].children;
                    }
                }
            },
        },
        methods: {
            onClickLabel(item) {
                let copy = JSON.parse(JSON.stringify(this.selected));
                copy[this.level] = item;
                copy.splice(this.level + 1);
                this.$emit('update:selected', copy);
            },
            onUpdateSelected(newSelected) {
                this.$emit('update:selected', newSelected);
            },
            rightArrowVisible(item) {
                return this.loadData ? !item.isLeaf : item.children;
            }
        },
        components: {
            'w-icon': Icon
        }
    };
</script>

<style scoped lang="scss">
    @import "var";
    .cascader-items {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        height: 100px;
        cursor: pointer;
        .left {
            box-sizing: border-box;
            overflow: auto;
            padding: 0.3em 0;
            height: 100%;
        }
        .right {
            height: 100%;
            border-left: 1px solid $grey;
        }
        .label {
            display: flex;
            align-items: center;
            padding: .5em 1em;
            white-space: nowrap;
            > .name {
                margin-right: 1em;
                user-select: none;
            }
            &:hover {
                background: $grey;
            }
            .icon {
                margin-left: auto;
                transform: scale(0.75);
            }
        }
    }
</style>