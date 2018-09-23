<template>
    <div class="input">
        <w-input value="Error input" error="Invalid input!"></w-input>
    </div>
</template>

<script>
    import Input from '../../../../src/Input/Input';
    export default {
        name: "input",
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