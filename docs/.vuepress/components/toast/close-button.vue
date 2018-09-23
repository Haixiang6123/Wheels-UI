<template>
    <div class="toast">
        <w-button @click="onClickButton">Show it</w-button>
    </div>
</template>

<script>
    import Vue from 'vue';
    import Toast from '../../../../src/Toast';
    import Button from '../../../../src/Button/Button';
    import plugin from '../../../../src/plugin';

    Vue.use(plugin);

    export default {
        name: "toast-close-button",
        methods: {
            onClickButton () {
                this.$toast('Do you love me?', {
                    closeButton: {
                        text: 'Yes, I do!',
                        callback: () => {
                            console.log('He said he does!');
                        }
                    }
                });
            }
        },
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