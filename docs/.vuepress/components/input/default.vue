<template>
    <div class="input">
        <w-input value="Basic input"></w-input>
        <w-input value="Disabled input" disabled></w-input>
        <w-input value="Readonly input" readonly></w-input>
    </div>
</template>

<script>
    import Input from '../../../../src/Input';
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