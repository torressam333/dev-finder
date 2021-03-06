import { createRouter, createWebHistory } from 'vue-router';
//Developer routes (pages)
import DevDetails from './pages/developers/DevDetails.vue';
import DevsList from './pages/developers/DevsList.vue';
import DevRegistration from './pages/developers/DevRegistration.vue';

//Requests routes
import ContactDev from './pages/requests/ContactDev.vue';
import RequestsReceived from './pages/requests/RequestsReceived.vue';

//Not found
import NotFound from './pages/NotFound.vue';

const routes = [
  {
    path: '/',
    redirect: '/developers',
  },
  {
    path: '/developers',
    component: DevsList,
  },
  {
    path: '/developers/:id',
    component: DevDetails,
    // https://router.vuejs.org/guide/essentials/passing-props.html
    props: true,
    children: [
      {
        path: 'contact',
        component: ContactDev, // (/developers/:id/contact)
        props: true,
      },
    ],
  },
  {
    path: '/register',
    component: DevRegistration,
  },
  {
    path: '/requests',
    component: RequestsReceived,
  },
  {
    path: '/:notFound(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
