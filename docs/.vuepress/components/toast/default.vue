<template>
    <div class="toast">
        <w-button @click="$toast('Show on top')">Show on top</w-button>
        <w-button @click="$toast('Show in middle', {position:'middle'})">Show in middle</w-button>
        <w-button @click="$toast('Show at bottom', {position:'bottom'})">Show at bottom</w-button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Toast from '../../../../src/Toast/Toast';
    import Button from '../../../../src/Button/Button';
    import plugin from '../../../../src/plugin';

    Vue.use(plugin);

    export default {
        name: "toast",
        components: {
            'w-button': Button,
            'w-toast': Toast
        }
    }
</script>

<style scoped lang="scss">
    .toast {
        padding-top: 10px;
    }
</style>