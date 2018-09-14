<template>
    <div>
        <w-button>Hello</w-button>
        <w-cascader items-height="200px" :source="dataSource"></w-cascader>
    </div>
</template>

<script>
    import Button from './Button';
    import Cascader from './Cascader';

    export default {
        name: "app",
        data() {
            return {
                dataSource: [
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
            'w-button': Button,
            'w-cascader': Cascader
        }
    }
</script>

<style scoped lang="scss">

</style>