<template>
    <div class="cascader">
        <w-cascader
                items-height="200px"
                :source.sync="source"
                :selected.sync="selected"
                :load-data="loadData">
        </w-cascader>
    </div>
</template>

<script>
    import Cascader from '../../../../src/Cascader/Cascader';

    import db from './db';

    function ajax(parentId = 0) {
        return new Promise((success, fail) => {
            setTimeout(() => {
                let result = db.filter((item) => item.parent_id === parentId);
                result.map(node => {
                    node.isLeaf = db.filter(item => item.parent_id === node.id).length <= 0;
                });
                success(result);
            }, 300);
        })
    }

    export default {
        name: "app",
        data() {
            return {
                selected: [],
                source: []
            }
        },
        created() {
            ajax(0).then((result) => {
                this.source = result.map((item) => {
                    item.children = item.children || [];
                    return item;
                });
            });
        },
        components: {
            'w-cascader': Cascader,
        },
        methods: {
            loadData(item, updateSource) {
                let id = item.id;
                ajax(id).then(result => {
                    updateSource(result);
                });
            }
        }
    }
</script>

<style scoped lang="scss">
    .cascader {
        margin: 20px 0 100px;
    }
</style>