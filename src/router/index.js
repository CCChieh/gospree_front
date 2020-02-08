import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Note from '../views/note/Note.vue';
import Base64 from '../views/Base64.vue';

Vue.use(VueRouter);

const routes = [{
  path: '/',
  name: 'home',
  component: Home,
},
{
  path: '/note/create',
  name: 'createNote',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "createNote" */ '../views/note/Create.vue'),
},
{
  path: '/note/:id',
  name: 'note',
  component: Note,
  props: true,
},

{
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
},
{
  path: '/base64',
  name: 'base64',
  component: Base64,
},
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
