<template>
  <div class="home">
      <div v-if="!mobile" class="app flex flex-column">
  <Navigation />
  <router-view></router-view>
</div></div>
</template>
<script>
import Navigation from "../components/Navigation.vue";
export default {
    name: "Profile-prof",
    components:{
      Navigation,
    },
  data() {
    return {
      bgColor: ''
    }
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
    },
    changeColor() {
      this.bgColor = '#FDE4DC'
    }
  }
}
</script>
<style>
.app{
background-color:rgb(255, 255, 255) !important;
}
</style>