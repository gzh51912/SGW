import Home from "../component/home"
import Ticket from "../component/ticket"
import Shopping from "../component/shopping"
import Find from "../component/find"
import Center from "../component/center"
import Notfound from "../component/notfound"

export const routers = [
    {
        path:"/home",  // 主页
        component:Home
    },
    {
        path:"/ticket",   // 购票
        component:Ticket
    },
    {
        path:"/shopping",  // 商城
        component:Shopping
    },
    {
        path:"/find",  // 发现
        component:Find
    },
    {
        path:"/center",  // 个人中心
        component:Center
    },
    {
        path:"/404",  // 404
        component:Notfound
    },
]