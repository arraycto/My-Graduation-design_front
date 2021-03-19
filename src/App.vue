<template>
    <a-layout style="height: 100%">
        <Header-Layout></Header-Layout>
        <a-layout>
            <Sider-Layout></Sider-Layout>
            <Second-Sider-Layout></Second-Sider-Layout>
            <Content-Layout></Content-Layout>
        </a-layout>
    </a-layout>
</template>

<script>
    import HeaderLayout from "@/components/layout/HeadLayout";
    import SiderLayout from "@/components/layout/SiderLayout";
    import SecondSiderLayout from "@/components/layout/SecondSiderLayout";
    import ContentLayout from "@/components/layout/ContentLayout";

    export default {
        name: 'app',
        components: {
            HeaderLayout, SiderLayout, ContentLayout, SecondSiderLayout
        },
        methods: {},
    }
</script>

<style>

</style>

