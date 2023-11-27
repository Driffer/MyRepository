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
    name: "Explore-ep",
    components:{
      Navigation,
    },
  data() {
    return {
      bgColor: ''
    }
  },
  mounted() {
    this.$refs.buttonutton.addEventListener('click', this.handler)
  },
  unmounted() {
    this.$refs.button.removeEventListener('click', this.handler)
  },
  methods: {
    handler() {
      console.log('Button clicked!')
      this.$router.push('/Explore')
    },
    changeColor() {
      this.bgColor = '#FDE4DC'
    }
  }
}
</script>
<style>
.app{
background-color:blue !important;
}
</style>