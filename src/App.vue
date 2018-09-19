<template>
    <div style="padding: 20px;">
        <w-cascader
                items-height="200px"
                :source="source"
                :selected.sync="selected">
        </w-cascader>
    </div>
</template>

<script>
    import Button from './Button';
    import Cascader from './Cascader';

    import db from './db';

    function ajax(parentId = 0) {
        return db.filter((item) => item.parent_id === parentId);
    }

    console.log(ajax());

    export default {
        name: "app",
        data() {
            return {
                selected: ['California'],
                source: ajax()
            }
        },
        components: {
            'w-button': Button,
            'w-cascader': Cascader
        },
        methods: {
            onUpdate(newSelected) {
                this.selected = newSelected;
            }
        }
    }
</script>

<style scoped lang="scss">

</style>