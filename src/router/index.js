// 路由模块
// 1.导入相关资源
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2.注册路由
Vue.use(VueRouter);

// 3.准备组件配置对象
import HeroesList from '../view/HeroesList'
import HeroesAdd from '../view/HeroesAdd'
import ZbList from '../view/ZbList'
import JnList from '../view/JnList'

// 4.定义路由规则
const routes = [
    { path: '/', redirect: '/heroes' },
    { path: '/heroes', component: HeroesList },
    { path: '/heroes/add', component: HeroesAdd },
    { path: '/zb', component: ZbList },
    { path: '/jn', component: JnList }
]

// 5. 初始化路由
const router = new VueRouter({ routes, linkExactActiveClass: 'active' });

// 6.导出路由
export default router
