// 路由配置
import Vue from 'vue'
// 引入路由模块
import VueRouter from 'vue-router'
// 显式安装该模块
Vue.use(VueRouter)
// 一层
// 首页路由
import App from '../App.vue';
import Xcollection from '../components/Xcollection.vue';
import Xhistory from '../components/Xhistory.vue';
import Xinform from '../components/Xinform.vue';
import Xlist from '../components/Xlist.vue';

// 配置路由
const routes = [
    // 如果url的路由为 /foo，进入Foo组件
    {
        path: '/',
        // 路由命名，方便跳转
        name: 'app',
        component: App,
    },
    {
        path: '/collection',
        name: 'collection',
        component: Xcollection
    },
    {
        path: '/history',
        name: 'history',
        component: Xhistory,
    },{
        path: '/inform',
        name: 'inform',
        component: Xinform,
    },{
        path: '/list',
        name: 'list',
        component: Xlist,
    },

    // // 重定向路由，比如刚进页面的时候，默认跳转的路由位置
    {
        path: '/',
        redirect: {
            name: 'app'
        }
    }
]

// 实例该路由配置
const router = new VueRouter({
    mode: 'hash',
    routes // (缩写) 相当于 routes: routes
})


export default router