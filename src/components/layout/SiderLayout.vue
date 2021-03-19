<template>
    <a-layout-sider
            :style="{ background: 'rgb(245,245,245)', padding: 0 }"
            @breakpoint="onBreakpoint"
            @collapse="onCollapse"
            breakpoint="lg"
            collapsed-width="0"
            width="240px">
        <a-row :md="3" :xs="6" style="background: #f0ebe4;">
            <a-col :style="{height:'50px',top:'15px'}">
                <div align="center">
                    <a-dropdown :trigger="['click']">
                        <a @click="e => e.preventDefault()" class="ant-dropdown-link">
                            <span style="{font-size:12px;}">新文档</span>
                            <a-icon :style="{fontSize:'12px'}" type="down"/>
                        </a>
                        <a-menu slot="overlay">
                            <a-menu-item key="0">
                                <a @click="addNote">新建笔记</a>
                            </a-menu-item>
                            <a-menu-item key="1">
                                <a @click="addNotes">新建文件夹</a>
                            </a-menu-item>
                            <a-menu-divider/>
                        </a-menu>
                    </a-dropdown>
                </div>
            </a-col>
        </a-row>
        <a-menu :default-selected-keys="['1']"
                :style="{ background: 'rgb(245,245,245)', padding: 0 }"
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
        name: 'SiderLayout',
        comments: {},
        data() {
            return {
                collapsed: false,
                info: '',
                url: {
                    addnote: '/cloutNote/note/addNote',
                    addnotes: '/cloutNote/notes/addNotes',
                }
            };
        },
        methods: {
            onCollapse(collapsed, type) {
                // console.log(collapsed, type);
            },
            onBreakpoint(broken) {
                // console.log(broken);
            },
            addNote() {
                this.$http.get(this.url.addnote)
                    .then(function (response) {
                        this.info = response
                    }).catch(function (error) { // 请求失败处理
                    // eslint-disable-next-line no-console
                    console.log(error);
                });
                console.log(this.info)
            },
            addNotes() {

            }
        }
    }
    ;
</script>

<style>

</style>
