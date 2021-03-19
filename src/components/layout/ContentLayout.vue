<template>
    <a-layout-content>
        <a-row type="flex">
            <a-col :style="{height:'50px'}" flex="220px">
                <a-page-header
                        :ghost="ghost"
                        :sub-title="sub_title"
                        :title="Title"
                        @back="() => null"
                        backIcon=""
                        style="border: 1px solid rgb(235, 237, 240);padding: 0"/>
            </a-col>
            <a-col flex="auto">
                <a-row type="flex">
                    <a-col :flex="8"></a-col>
                    <a-col :flex="1"></a-col>
                    <a-col :flex="1">
                        <a-icon style="" type="arrows-alt"/>
                    </a-col>
                </a-row>

            </a-col>
        </a-row>

        <div :style="{ background: '#fff', minHeight: '100%' }">
        </div>
    </a-layout-content>
</template>
<script>

    export default {
        name: 'ContentLayout',
        comments: {},
        data() {
            return {
                Title: '一级标题',
                sub_title: '二级标题',
                collapsed: false,
                ghost: true,
            };
        },
        methods: {}
    };
</script>

<style>

</style>
