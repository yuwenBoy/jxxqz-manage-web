import type { AppRouteModule } from "/@/router/types";
import { LAYOUT } from "/@/router/constant";

const dashboard: AppRouteModule = {
    path:'/dashboard',
    name:'Dashboard',
    component: LAYOUT,
    redirect:'/dashboard/analysis',
    meta:{
        orderNo:10,
        icon:'',
        title:'工作台'
    },
    children:[
        {
            path:'analysis',
            name:'Analysis',
            component: () => import('/@/views/dashboard/analysis/index.vue'),
            meta:{
                title:'分析页'
            },
        },
        {
            path:'workbench',
            name:'Workbench',
            component: () => import('/@/views/dashboard/workbench/index.vue'),
            meta:{
                title:'分析页'
            },
        },
    ]
}

export default dashboard;