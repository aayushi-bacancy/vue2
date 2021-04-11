import { createRouter, createWebHistory } from 'vue-router';
import TheForm from './components/TheForm.vue';
import ShowDetails from './components/ShowDetails.vue';
import TheMain from './components/TheMain.vue';
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', redirect: '/main' },
    { name: 'main', path: '/main', component: TheMain },
    { name: 'reg', path: '/reg', component: TheForm },
    { name: 'show', path: '/show', component: ShowDetails }
  ]
});

export default router;
