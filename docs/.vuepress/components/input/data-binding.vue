<template>
    <div class="input">
        <w-input v-model="value"></w-input>
        <div>
            value: {{value}}
        </div>
    </div>
</template>

<script>
    import Input from '../../../../src/Input/Input';
    export default {
        name: "input",
        data() {
            return {
                value: 1
            }
        },
        components: {
            'w-input': Input
        }
    }
</script>

<style scoped lang="scss">
    .input {
        padding-top: 10px;
    }
</style>