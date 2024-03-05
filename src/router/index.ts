import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import MainLayout from '../views/MainLayout.vue';
import { defineAsyncComponent } from 'vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/LoginView.vue'),
  },
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '', 
        name: 'home',
        component: defineAsyncComponent(() => import('../views/home/HomeView.vue')),
      },
      {
        path: 'product',
        name: 'product',
        component: defineAsyncComponent(() => import('../views/product/ProductView.vue')),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
