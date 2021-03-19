<template>
    <a-layout-sider
            :style="{ background: 'rgb(255,255,255)', padding: 0 }"
            @breakpoint="onBreakpoint"
            @collapse="onCollapse"
            breakpoint="lg"
            collapsed-width="0"
            width="240px"
    >
        <a-row :md="3" :xs="6" style="background: #eae2d7;">
            <a-col :style="{height:'50px',top:'10px'}">
                <div align="center">
                    <a-input-search @search="onSearch" placeholder="请输入笔记的标签" style="width: 180px"/>
                </div>
            </a-col>
        </a-row>
        <a-menu :default-selected-keys="['1']"
                :style="{ background: 'rgb(255,255,255)', padding: 0 }"
                mode="inline">
            <a-menu-item key="1">
                <a-icon type="user"/>
                <span class="nav-text">新建文档</span>
            </a-menu-item>
            <a-menu-item key="2">
                <a-icon type="video-camera"/>
                <span class="nav-text">与我分享</span>
            </a-menu-item>
            <a-menu-item key="3">
                <a-icon type="video-camera"/>
                <span class="nav-text">我的文件夹</span>
            </a-menu-item>
            <a-menu-item key="4">
                <a-icon type="video-camera"/>
                <span class="nav-text">加星文件</span>
            </a-menu-item>
            <a-menu-item key="5">
                <a-icon type="video-camera"/>
                <span class="nav-text">回收站</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>
<script>
    export default {
        name: 'SecondSiderLayout',
        comments: {},
        data() {
            return {
                collapsed: false,
            };
        },
        methods: {
            onCollapse(collapsed, type) {
                // console.log(collapsed, type);
            },
            onBreakpoint(broken) {
                // console.log(broken);
            },
            onSearch(value) {
                // console.log(value);
            },
        }
    };
</script>

<style>
    .ant-layout-sider-children > .ant-menu > .ant-menu-item {
        margin: 0px 45px;
        width: 180px;
    }
</style>
