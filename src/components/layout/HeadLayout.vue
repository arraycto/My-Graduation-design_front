<template>
    <a-layout-header :style="{ background: 'rgb(57,141,238)', padding: 0 ,'line-height':'46px', height:'46px'}">
        <a-row type="flex">
            <a-col :md="3" :xs="6">
                <div align="center">
                    <span style="text-align: center">这是logo位置</span>
                </div>
            </a-col>
            <a-col :md="3" :xs="6">
                <a-menu mode="horizontal" style="background: rgb(49,120,203)">
                    <a-icon type="highlight"/>云笔记
                </a-menu>
            </a-col>
            <a-col :md="{span:3,offset:12}" :xs="4">
                <a-row type="flex">
                    <a-col flex="50px">
                        <span @click="showModal" style="float: right">
                            <a-avatar icon="user" size="large"/>
                        </span>
                    </a-col>
                    <a-modal @ok="handleOk" title="Basic Modal" v-model="visible">
                        <p>头像：</p>
                        <p>账号：</p>
                        <p>昵称：</p>
                        <p>性别：</p>
                        <p>地区：</p>
                        <p>标签：</p>
                    </a-modal>
                    <a-divider :style="{height:'auto'}" type="vertical"/>
                    <a-col flex="50px">
                        <a-dropdown :style="{margin: '0 auto',display: 'block','text-align':'center'}"
                                    :trigger="['click']">
                            <a :style="{color:'#FFFFfF'}" @click="e => e.preventDefault()"
                               class="ant-dropdown-link">
                                <a-icon type="user"/>
                                <a-icon :style="{fontSize:'12px'}" type="down"/>
                            </a>
                            <a-menu slot="overlay">
                                <a-menu-item key="0">
                                    <a href="http://www.alipay.com/">新建笔记</a>
                                </a-menu-item>
                                <a-menu-item key="1">
                                    <a href="http://www.taobao.com/">新建文件夹</a>
                                </a-menu-item>
                                <a-menu-divider/>
                            </a-menu>
                        </a-dropdown>
                    </a-col>
                    <a-divider :style="{height:'auto'}" type="vertical"/>
                    <a-col flex="50px">
                    </a-col>
                </a-row>
            </a-col>
        </a-row>
    </a-layout-header>
</template>
<script>
    export default {
        name: 'HeaderLayout',
        comments: {},
        data() {
            return {
                visible: false,
            };
        },
        methods: {
            showModal() {
                this.visible = true;
            },
            handleOk(e) {
                console.log(e);
                this.visible = false;
            },
        }
    };
</script>

<style>
    .ant-layout-content {
        margin: 0px 0px 0px;
    }
</style>
