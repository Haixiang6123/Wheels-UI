<template>
    <div style="padding: 20px;">
        <w-nav :selected.sync="selected" >
            <w-nav-item name="Home">Home</w-nav-item>
            <w-nav-item name="About">About</w-nav-item>
            <w-nav-item name="Career">Career</w-nav-item>
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
                selected: ['Home']
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