<template>
    <div style="padding: 20px;">
        <w-cascader
                items-height="200px"
                :source.sync="source"
                :selected.sync="selected">
        </w-cascader>
    </div>
</template>

<script>
    import Cascader from '../../../../src/Cascader';

    export default {
        name: "w-cascader",
        data() {
            return {
                selected: [],
                source: [
                    {
                        name: 'California',
                        children: [
                            {name: 'Irvine', children: [{name: 'UCI'}]},
                            {name: 'LosAngles', children: [{name: 'UCLA'}, {name: 'UCB'}]},
                            {name: 'San Diego', children: [{name: 'UCSD'}]},
                        ]
                    },
                    {
                        name: 'Texas',
                        children: [
                            {name: 'El Paso', children: [{name: 'University 1'}]},
                            {name: 'Fort Worth', children: [{name: 'University 1'}, {name: 'University 2'}]}
                        ]
                    },
                    {
                        name: 'Washington',
                        children: [
                            {name: 'Spokane', children: [{name: 'University 1'}]},
                            {name: 'Tacoma', children: [{name: 'University 1'}, {name: 'University 2'}]},
                            {name: 'Vancouver', children: [{name: 'University 1'}, {name: 'University 2'}]}
                        ]
                    }
                ]
            }
        },
        components: {
            'w-cascader': Cascader,
        }
    }
</script>

<style scoped lang="scss">

</style>