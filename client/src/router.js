import { createWebHistory, createRouter } from "vue-router";
import Search from './components/Search.vue';
import Profile from './components/Profile.vue';


const routes = [

  {
    path: "/profile/:platform/:gamertag",
    name: "profile",
    component: Profile
  },
  {
    path: "/",
    name: "search",
    component: Search
  },  

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});



export default router;