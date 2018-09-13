<template>
    <div class="popover-hover">
        <w-popover>
            <w-button>Top</w-button>
            <template slot="content">
                Content
            </template>
        </w-popover>
        <w-popover position="bottom">
            <w-button>Bottom</w-button>
            <template slot="content">
                Content
            </template>
        </w-popover>
        <w-popover position="left">
            <w-button>Left</w-button>
            <template slot="content">
                Content
            </template>
        </w-popover>
        <w-popover position="right">
            <w-button>Right</w-button>
            <template slot="content">
                Content
            </template>
        </w-popover>
    </div>
</template>

<script>
    import Popover from '../../../../src/Popover';
    import Button from '../../../../src/Button';

    export default {
        name: "popover",
        components: {
            'w-popover': Popover,
            'w-button': Button
        }
    }
</script>

<style scoped lang="scss">
    .popover-hover {
        padding-top: 10px;
    }
</style>