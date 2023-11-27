
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from '../App.vue';
import Home from "../views/Home.vue";
import Explore from "../views/Explore.vue";
import Profile from "../views/Profile.vue";
import Navigation from '../components/Navigation.vue'



const routes = [
 {
    path: "/",
    name: "Home",
    component: Home,
 },
 { path: '/Navigation', 
 component: Navigation },

 {
    path: "/Profile",
    name: "Profile",
    component: Profile,
 },
 {
    path: "/Explore",
    name: "Explore",
    component: Explore,
 },
];


const router = createRouter({
 history: createWebHistory(),
 routes,
 });
 
const app = createApp(App);

app.use(router);
app.mount('#app');

export default routes;