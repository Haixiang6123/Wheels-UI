<template>
    <div class="cascader-items">
        <div class="left">
            <div class="label" v-for="item in items" @click="leftSelected = item">
                {{item.name}}
            </div>
        </div>
        <div v-if="rightItems" class="right">
            <w-cascader-items :items="rightItems"></w-cascader-items>
        </div>
    </div>
</template>

<script>
    export default {
        name: "w-cascader-items",
        props: {
            items: {
                type: Array
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
        }
    };
</script>

<style scoped lang="scss">
    .cascader-items {
        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        .left {
            border: 1px solid red;
        }
        .right {
            margin-top: -1px;
        }
    }
</style>