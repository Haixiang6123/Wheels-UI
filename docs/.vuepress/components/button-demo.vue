<template>
    <div>
        <w-button>Default</w-button>
        <w-button icon="remove">Remove</w-button>
        <w-button :loading="true">Loading</w-button>
        <w-button :disabled="true">Disabled</w-button>
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

<style scoped>
    .content {
        max-width: 0;
        margin: 0;
        padding: 0;
    }
</style>