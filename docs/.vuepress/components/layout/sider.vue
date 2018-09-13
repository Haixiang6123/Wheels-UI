<template>
    <div class="sider-layout">
        <w-layout class="w-layout">
            <w-header class="w-header">
                header
            </w-header>
            <w-layout>
                <w-sider class="w-sider">
                    sider
                </w-sider>
                <w-content class="w-content">
                    content
                </w-content>
            </w-layout>
            <w-footer class="w-footer">
                footer
            </w-footer>
        </w-layout>

        <hr>

        <w-layout class="w-layout">
            <w-sider class="w-sider">
                sider
            </w-sider>
            <w-layout>
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
        </w-layout>
    </div>
</template>

<script>
    import Layout from '../../../../src/Layout';
    import Header from '../../../../src/Header';
    import Content from '../../../../src/Content';
    import Footer from '../../../../src/Footer';
    import Sider from '../../../../src/Sider';
    export default {
        components: {
            'w-layout': Layout,
            'w-header': Header,
            'w-content': Content,
            'w-footer': Footer,
            'w-sider': Sider
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
    .sider-layout {
        .w-layout {
            padding: $layoutPadding;

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

            .w-sider {
                @include center();
                @extend %whiteColor;
                width: 100px;
                background: lighten($background, 10%);
            }
        }
    }
</style>