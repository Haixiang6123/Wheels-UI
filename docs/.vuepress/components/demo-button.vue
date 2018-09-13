<template>
    <div class="demo-button">
        <div class="default block">
            <w-button>Default</w-button>
        </div>
        <div class="iconPosition block">
            <w-button icon="remove">Left Icon</w-button>
            <w-button icon="remove" iconPosition="right">Right Icon</w-button>
        </div>
        <div class="loading block">
            <w-button :loading="true">Loading</w-button>
        </div>
    </div>
</template>

<script>
    import Button from '../../../src/Button';
    export default {
        components: {
            'w-button': Button
        }
    }
</script>

<style scoped lang="scss">
    .demo-button {
        .block {
            padding: 10px 0;
        }
    }
</style>