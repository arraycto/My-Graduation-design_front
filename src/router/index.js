import Vue from 'vue'
import VueRouter from 'vue-router'

const Index = () => import('@/views/index') // index为我们建的视图，这里的写法为路由的懒加载

Vue.use(VueRouter)

// 配置路由
export default new VueRouter({
    mode: 'history',     // 设置为history模式，默认为hash模式
    routes: [
        {
            path: '/',      // 访问的路径
            name: 'index',  // 路由名称
            component: Index  //上面引入的视图组件
        }
    ]
})
