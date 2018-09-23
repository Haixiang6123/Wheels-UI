<template>
    <div style="padding: 20px;">
        <w-nav :selected.sync="selected">
            <w-nav-item name="home">Home</w-nav-item>
            <w-sub-nav>
                <template slot="title">About</template>
                <w-nav-item name="culture">Culture</w-nav-item>
                <w-nav-item name="developers">Developers</w-nav-item>
                <w-nav-item name="contact">Contact</w-nav-item>
            </w-sub-nav>
            <w-nav-item name="career">Career</w-nav-item>
        </w-nav>
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