// main.js
import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue'; // Update path
import routes from './router';
import Navigation from "./components/Navigation.vue";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);

app.use(router);
app.component('Navigation-nav', Navigation);

app.mount('#app');
