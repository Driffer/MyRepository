<template>
    <div class="home">
      <div v-if="!mobile" class="app flex flex-column">
  <Navigation />
  <router-view></router-view>
</div>
   
      <img alt="Vue logo" src="../assets/logo.png" />
    </div>
  </template>
  
  <script>
  import Navigation from "../components/Navigation.vue";
  export default {
    name: "Home-hom",
    components: {
      Navigation,
    },
  };
  </script>
  