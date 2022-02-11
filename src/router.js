import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    redirect: '/developers',
  },
  {
    path: '/developers',
    component: null,
  },
  {
    path: '/developers/:id',
    component: null,
    children: [
      {
        path: '/contact',
        component: null, // (/developers/:id/contact)
      },
    ],
  },
  {
    path: '/register',
    component: null,
  },
  {
    path: '/requests',
    component: null,
  },
  {
    path: '/:notFound(.*)',
    component: null,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
