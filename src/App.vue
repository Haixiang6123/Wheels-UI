<template>
    <div style="padding: 20px;">
        <w-nav :selected.sync="selected">
            <w-nav-item name="home">Home</w-nav-item>
            <w-sub-nav>
                <template slot="title">About</template>
                <w-nav-item name="culture">Culture</w-nav-item>
                <w-nav-item name="developers">Developers</w-nav-item>

                <w-sub-nav>
                    <template slot="title">Contact</template>
                    <w-nav-item name="facebook">Facebook</w-nav-item>
                    <w-nav-item name="linkedin">Linkedin</w-nav-item>

                    <w-sub-nav>
                        <template slot="title">Tel</template>
                        <w-nav-item name="iphone">iPhone</w-nav-item>
                        <w-nav-item name="android">Android</w-nav-item>
                    </w-sub-nav>
                </w-sub-nav>
            </w-sub-nav>
            <w-nav-item name="career">Career</w-nav-item>
        </w-nav>

        <p>okokokokokokokokokokokokok</p>
    </div>
</template>

<script>
    import Nav from './Nav/Nav';
    import NavItem from './Nav/NavItem';
    import SubNav from './Nav/SubNav';

    export default {
        name: 'app',
        data() {
            return {
                selected: ['culture']
            }
        },
        components: {
            'w-nav': Nav,
            'w-nav-item': NavItem,
            'w-sub-nav': SubNav
        }
    }
</script>

<style scoped lang="scss">
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
</style>