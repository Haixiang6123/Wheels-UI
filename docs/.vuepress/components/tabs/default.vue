<template>
    <div class="tabs">
        <w-tabs :selected="selected">
            <w-tabs-head>
                <w-tabs-item name="1">Home</w-tabs-item>
                <w-tabs-item name="2">Introduction</w-tabs-item>
                <w-tabs-item name="3">Components</w-tabs-item>
                <w-tabs-item name="4">Contributions</w-tabs-item>
            </w-tabs-head>
            <w-tabs-body>
                <w-tabs-pane name="1">Home page</w-tabs-pane>
                <w-tabs-pane name="2">Introduction page</w-tabs-pane>
                <w-tabs-pane name="3">Components page</w-tabs-pane>
                <w-tabs-pane name="4">Contributions page</w-tabs-pane>
            </w-tabs-body>
        </w-tabs>
    </div>
</template>

<script>
    import Tabs from '../../../../src/Tabs/Tabs';
    import TabsItem from '../../../../src/Tabs/TabsItem';
    import TabsPane from '../../../../src/Tabs/TabsPane';
    import TabsHead from '../../../../src/Tabs/TabsHead';
    import TabsBody from '../../../../src/Tabs/TabsBody';
    export default {
        name: "tabs",
        data() {
            return {
                selected: "1"
            }
        },
        components: {
            'w-tabs': Tabs,
            'w-tabs-item': TabsItem,
            'w-tabs-pane': TabsPane,
            'w-tabs-head': TabsHead,
            'w-tabs-body': TabsBody
        }
    }
</script>

<style scoped lang="scss">

</style>