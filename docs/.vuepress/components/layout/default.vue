<template>
    <div class="default-layout">
        <w-layout class="w-layout">
            <w-header class="w-header">
                header
            </w-header>
            <w-content class="w-content">
                content
            </w-content>
            <w-footer class="w-footer">
                footer
            </w-footer>
        </w-layout>
    </div>
</template>

<script>
    import Layout from '../../../../src/Layout/Layout';
    import Header from '../../../../src/Layout/Header';
    import Content from '../../../../src/Layout/Content';
    import Footer from '../../../../src/Layout/Footer';
    export default {
        components: {
            'w-layout': Layout,
            'w-header': Header,
            'w-content': Content,
            'w-footer': Footer
        }
    }
</script>

<style scoped lang="scss">
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
    .default-layout {
        padding: $layoutPadding;
        .w-layout {
            .w-header, .w-footer {
                @include center();
                @extend %whiteColor;
                height: $basicHeight;
                background: lighten($background, 20%);
            }

            .w-content {
                @include center();
                @extend %whiteColor;
                height: $basicHeight * 2;
                background: $background;
            }
        }
    }
</style>