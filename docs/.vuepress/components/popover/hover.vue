<template>
    <div class="popover">
        <w-popover trigger="hover">
            <w-button>Top</w-button>
            <template slot="content">
                Content
            </template>
        </w-popover>
        <w-popover position="bottom" trigger="hover">
            <w-button>Bottom</w-button>
            <template slot="content">
                Content
            </template>
        </w-popover>
        <w-popover position="left" trigger="hover">
            <w-button>Left</w-button>
            <template slot="content">
                Content
            </template>
        </w-popover>
        <w-popover position="right" trigger="hover">
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
    .popover {
        padding-top: 10px;
    }
</style>