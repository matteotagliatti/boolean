<template>
  <div class="container" id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <TitleComponent />
    <HeroComponent />
  </div>
</template>

<script>
import TitleComponent from "./components/Title.vue";
import HeroComponent from "./components/Hero.vue";

export default {
  name: "App",
  components: {
    TitleComponent,
    HeroComponent,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
