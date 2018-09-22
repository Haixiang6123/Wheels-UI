<template>
    <div style="padding: 20px;">
        <w-slides class="wrapper" :selected.sync="selected">
            <w-slides-item name="1">
                <div class="box">1</div>
            </w-slides-item>
            <w-slides-item name="2">
                <div class="box">2</div>
            </w-slides-item>
            <w-slides-item name="3">
                <div class="box">3</div>
            </w-slides-item>
        </w-slides>
    </div>
</template>

<script>
    import Slides from './Carousel';
    import SlidesItem from './CarouselItem';

    export default {
        name: 'app',
        data() {
            return {
                selected: undefined
            }
        },
        components: {
            'w-slides': Slides,
            'w-slides-item': SlidesItem
        }
    }
</script>

<style scoped lang="scss">
    @import "var";

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    .wrapper {
        display: block;
    }

    .box {
        width: 100%;
        height: 300px;
        background: $border-color;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 32px;
        color: white;
    }
</style>