<template>
    <div class="demo-button-group">
        <w-button-group>
            <w-button icon="up">Prev</w-button>
            <w-button icon="settings">Settings</w-button>
            <w-button icon="down">Next</w-button>
        </w-button-group>
    </div>
</template>

<script>
    import Button from '../../../src/Button';
    import ButtonGroup from '../../../src/ButtonGroup';
    export default {
        name: "button-group-demo",
        components: {
            'w-button': Button,
            'w-button-group': ButtonGroup
        }
    }
</script>

<style scoped lang="scss">
    .demo-button-group {
        padding: 10px 0;
    }
</style>