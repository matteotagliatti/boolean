<template>
  <div id="app">
    <HeaderDiv />
    <MainDiv />
    <FooterDiv />
  </div>
</template>

<script>
import HeaderDiv from "./components/Header.vue";
import MainDiv from "./components/Main.vue";
import FooterDiv from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderDiv,
    MainDiv,
    FooterDiv,
  },
};
</script>

<style lang="scss">
@import "./assets/scss/style.scss";

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: sans-serif;
}

li {
  list-style: none;
}

.container {
  max-width: 1100px;
  min-width: 1000px;
  margin: 0 auto;
}
</style>
