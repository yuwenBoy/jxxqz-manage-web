import type { AppRouteRecordRaw } from '../types';
import { LAYOUT } from '../constant';
export const PAGE_NOT_FOUND_ROUTE: AppRouteRecordRaw = {
    path: '/redirect',
    component: LAYOUT,
    name: 'RedirectTo',
    meta: {
      title: '2124124',
      hideBreadcrumb: true,
      hideMenu: true,
    },
    children: [
      {
        path: '/redirect/:path(.*)',
        name: 'index',
        component: () => import('/@/views/system/redirect/index.vue'),
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