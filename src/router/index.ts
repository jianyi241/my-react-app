// 导入路由组件
import Home from '../views/home/home'
import About from '../views/about/about'
import Contact from '../views/contact/contact'
// 导入路由管理工具
import {RouteConfig} from 'react-router-config'

const routes:RouteConfig = [
    {
        path:'/',
        exact:true,
        component:Home
    },
    {
        path:'/about',
        exact:true,
        component:About
    },
    {
        path:'/contact',
        exact:true,
        component:Contact
    }
]

export default routes;
