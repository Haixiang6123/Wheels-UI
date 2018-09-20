<template>
    <div class="cascader" ref="cascader" v-click-outside="close">
        <div class="trigger" @click="toggle">
            {{this.selectedValue || '&nbsp;'}}
        </div>
        <div v-if="itemsVisible" :style="{height: itemsHeight}" class="items-wrapper">
            <w-cascader-items
                    :items="source"
                    :items-height="itemsHeight"
                    :selected="selected"
                    :load-data="loadData"
                    @update:selected="onUpdateSelected">
            </w-cascader-items>
        </div>
    </div>
</template>

<script>
    import CascaderItems from './CascaderItems';
    import ClickOutside from './click-outside';

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
            },
            loadData: {
                type: Function
            }
        },
        data() {
            return {
                itemsVisible: true
            }
        },
        computed: {
            selectedValue() {
                return this.selected.map((item) => item.name).join(' / ');
            }
        },
        directives: {
            ClickOutside
        },
        methods: {
            open() {
                this.itemsVisible = true;
            },
            close() {
                console.log('closeme');
                this.itemsVisible = false;
            },
            toggle() {
                if (this.itemsVisible === true) {
                    this.close();
                }
                else {
                    this.open();
                }
            },
            onUpdateSelected(newSelected) {
                this.$emit('update:selected', newSelected);
                let lastItem = newSelected[newSelected.length - 1];

                let simplest = (children, id) => {
                    return children.filter(item => item.id === id)[0];
                };
                let complex = (children, id) => {
                    let noChildren = [];
                    let hasChildren = [];
                    children.forEach(item => {
                        if (item.children) {
                            hasChildren.push(item);
                        }
                        else {
                            noChildren.push(item);
                        }
                    });

                    let found = simplest(noChildren, id);
                    if (found) {
                        return found;
                    }
                    else {
                        found = simplest(hasChildren, id);
                        if (found) {
                            return found;
                        }
                        else {
                            for (let i = 0; i < hasChildren.length; i++) {
                                found = complex(hasChildren[i].children, id);
                                if (found) {
                                    return found;
                                }
                            }
                            return undefined;
                        }
                    }
                };
                // Update callback function
                let updateSource = (result) => {
                    let copy = JSON.parse(JSON.stringify(this.source));
                    let toUpdate = complex(copy, lastItem.id);
                    // Add children(new result) for the selected item
                    toUpdate.children = result;
                    this.$emit('update:source', copy);
                };
                // Callback: Call the function that is passed from parent component
                if (!lastItem.isLeaf) {
                    this.loadData && this.loadData(lastItem, updateSource);
                }
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
        display: inline-flex;
        position: relative;
        border: 1px solid red;
        .trigger {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            padding: 0 1em;
            height: $input-height;
            min-width: 5em;
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