<template>
  <header class="flex">
    <div class="branding flex">
      <img src="@/assets/service-automobile-car-gear-accessories-icon.png" alt="" />
    </div>
    <div class=" branding  flex container">
      <router-link to="/Profile" class="button" @mouseover="changeColor" @mouseleave="resetColor" @click="handler">
   
        Profile
      </router-link>
    </div>
    <div class="branding flex">
      <router-link to="/Explore" class="button" @mouseover="changeColor" @mouseleave="resetColor" @click="handler">
  
        Explore
      </router-link>
    </div>

  </header>
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';

import Home from '@/views/Home.vue';
import Profile from '@/views/Profile.vue';
import Explore from '@/views/Explore.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/Profile', component: Profile },
    { path: '/Explore', component: Explore },
];

const router = createRouter({
 history: createWebHistory(),
 routes,
});

const app = createApp({});
app.use(router);
app.mount('#app');
export default {
  name:'navigation-nav',

  data() {
    return {
      bgColor: 'white'
    };
  },
  mounted() {
    this.$refs.button.addEventListener('click', this.handler)
    
  },
  unmounted() {
    this.$refs.button.removeEventListener('click', this.handler)
  },
  methods: {
 handler() {
    console.log('Button clicked!')
    
    this.$router.push('/Profile')
    this.$router.push('/Explore')
 },
 changeColor() {
    this.bgColor = '#FDE4DC';
 },
 resetColor() {
    this.bgColor = 'white';
 }
}

}
</script>

<style lang="scss" scoped>
header {
  z-index: 99;
  flex-direction: row;
  background-color: #30302F;
  @media (min-width: 900px) {
    min-height: 100%;
    min-width: 90px;
    flex-direction: column;
    border-radius: 0 20px 20px 0;
  }
  header .pexp {
    border-radius: 20px 20px 20px 20px !important;
  background-color: '#30302F'!important;
    justify-content: left;
    padding: 24px;
    @media (min-width: 900px) {
      width : 100%;
      background-color: rgb(8, 23, 143); /* Dark gray color with 0.7 alpha (semi-transparent) */
      padding: 24px;
    }
}
  .branding {
    border-radius: 0 20px 20px 0;
    background-color: #8B8B8B;
    justify-content: center;
    padding: 24px;
    @media (min-width: 900px) {
      width: 100%;
     
    }

#ph
{text-underline-position: below;
text-align: left;
text-decoration: underline white;
color: black;
}
    img {
      width: auto;
      height: 30px;
    }
  }
}
</style>
