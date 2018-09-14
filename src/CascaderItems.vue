<template>
    <div class="cascader-items" :style="{height: itemsHeight}">
        <div class="left">
            <div class="label" v-for="(item, index) in items" :key="index" @click="leftSelected = item">
                {{item.name}}
                <w-icon class="icon" v-if="item.children" name="right"></w-icon>
            </div>
        </div>
        <div v-if="rightItems" class="right">
            <w-cascader-items :items="rightItems" :items-height="itemsHeight"></w-cascader-items>
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
            }
        },
        data() {
            return {
                leftSelected: null
            };
        },
        computed: {
            rightItems() {
                if (this.leftSelected && this.leftSelected.children) {
                    return this.leftSelected.children;
                }
                else {
                    return null;
                }
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
        .left {
            padding: 0.3em 0;
            height: 100%;
        }
        .right {
            height: 100%;
            border-left: 1px solid lighten($grey, 30%);
        }
        .label {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 0.3em 1em;
            .icon {
                transform: scale(0.75);
            }
        }
    }
</style>