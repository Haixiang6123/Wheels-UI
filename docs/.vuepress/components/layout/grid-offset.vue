<template>
    <div class="grid">
        <w-row class="w-row" gutter="10">
            <w-col span="8">
                <div class="w-col">8</div>
            </w-col>
            <w-col span="8" offset="8">
                <div class="w-col">8</div>
            </w-col>
        </w-row>
        <w-row class="w-row" gutter="10">
            <w-col span="6" offset="6">
                <div class="w-col">6</div>
            </w-col>
            <w-col span="6" offset="6">
                <div class="w-col">6</div>
            </w-col>
        </w-row>
        <w-row class="w-row" gutter="10">
            <w-col span="4">
                <div class="w-col">4</div>
            </w-col>
            <w-col span="4" offset="4">
                <div class="w-col">4</div>
            </w-col>
            <w-col span="4" offset="8">
                <div class="w-col">4</div>
            </w-col>
        </w-row>
        <w-row class="w-row" gutter="10">
            <w-col span="2">
                <div class="w-col">2</div>
            </w-col>
            <w-col span="2" offset="2">
                <div class="w-col">2</div>
            </w-col>
            <w-col span="2">
                <div class="w-col">2</div>
            </w-col>
            <w-col span="2" offset="2">
                <div class="w-col">2</div>
            </w-col>
            <w-col span="2">
                <div class="w-col">2</div>
            </w-col>
            <w-col span="2" offset="2">
                <div class="w-col">2</div>
            </w-col>
            <w-col span="2">
                <div class="w-col">2</div>
            </w-col>
            <w-col span="2" offset="2">
                <div class="w-col">2</div>
            </w-col>
        </w-row>
    </div>
</template>

<script>
    import Row from '../../../../src/Row';
    import Col from '../../../../src/Col';
    export default {
        components: {
            'w-row': Row,
            'w-col': Col
        }
    }
</script>

<style scoped lang="scss">
    * {
        box-sizing: border-box;
    }

    @mixin center() {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    %whiteColor {
        color: white;
    }

    $layoutPadding: 10px 0;
    $basicHeight: 50px;
    $background: #42B983;
    .grid {
        .w-row {
            padding: $layoutPadding;

            .w-col {
                @include center();
                @extend %whiteColor;
                border: 1px solid #ddd;
                height: $basicHeight;
                background: lighten($background, 20%);
            }
        }
    }
</style>