import type { AppRouteRecordRaw } from '/@/router/types';
import { EXCEPTION_COMPONENT, LAYOUT,PAGE_NOT_FOUND_NAME } from '../constant';
// 404 on a page
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
    path: '/:path(.*)*',
    name: PAGE_NOT_FOUND_NAME,
    component: LAYOUT,
    meta: {
      title: 'ErrorPage',
      hideBreadcrumb: true,
      hideMenu: true,
    },
    children: [
      {
        path: '/:path(.*)*',
        name: PAGE_NOT_FOUND_NAME,
        component:EXCEPTION_COMPONENT, // () => import('/@/views/system/redirect/index.vue')
        meta: {
          title: '1313',
          hideBreadcrumb: true,
        },
      },
    ],
  };

  
export const REDIRECT_ROUTE: AppRouteRecordRaw = {
  path: '/redirect',
  component: LAYOUT,
  name: 'RedirectTo',
  meta: {
    title: '23',
    hideBreadcrumb: true,
    hideMenu: true,
  },
  children: [
    {
      path: '/redirect/:path(.*)',
      name: 'Redirect',
      component: () => import('/@/views/system/redirect/index.vue'),
      meta: {
        title: '2323',
        hideBreadcrumb: true,
      },
    },
  ],
};

export const ERROR_LOG_ROUTE: AppRouteRecordRaw = {
  path: '/error-log',
  name: 'ErrorLog',
  component: LAYOUT,
  redirect: '/error-log/list',
  meta: {
    title: 'ErrorLog',
    hideBreadcrumb: true,
    hideChildrenInMenu: true,
  },
  children: [
    {
      path: 'list',
      name: 'ErrorLogList',
      component: () => import('/@/views/system/error-log/index.vue'),
      meta: {
        title:'routes.basic.errorLogList',// t('routes.basic.errorLogList'),
        hideBreadcrumb: true,
        currentActiveMenu: '/error-log',
      },
    },
  ],
};