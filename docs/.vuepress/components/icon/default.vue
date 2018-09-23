<template>
    <div class="demo-icon">
        <h3>Alerts</h3>

        <div class="alerts block">
            <div class="item">
                <w-icon name="info"/>
                <span class="name">info</span>
            </div>
            <div class="item">
                <w-icon name="error"/>
                <span class="name">error</span>
            </div>
            <div class="item">
                <w-icon name="success"/>
                <span class="name">success</span>
            </div>
        </div>

        <h3>General</h3>
        <div class="general block">
            <div class="item">
                <w-icon name="remove"/>
                <span class="name">remove</span>
            </div>
            <div class="item">
                <w-icon name="settings"/>
                <span class="name">settings</span>
            </div>
            <div class="item">
                <w-icon name="loading"/>
                <span class="name">loading</span>
            </div>
            <div class="item">
                <w-icon name="download"/>
                <span class="name">download</span>
            </div>
            <div class="item">
                <w-icon name="thumbs-up"/>
                <span class="name">thumbs-up</span>
            </div>
        </div>
    </div>
</template>

<script>
    import Icon from '../../../../src/Icon/Icon';
    export default {
        components: {
            'w-icon': Icon
        }
    }
</script>

<style scoped lang="scss">
    .demo-icon {
        .block {
            display: flex;
            padding-top: 10px;

            .item {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
        }
    }
</style>