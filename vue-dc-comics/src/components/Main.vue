<template>
  <div>
    <main>
      <div class="jumbotron">
        <img
          class="jumbotron"
          src="../assets/img/jumbotron.jpg"
          alt="Jumbotron"
        />
        <div class="container">
          <a href="#">Current Series </a>
        </div>
      </div>

      <div class="container">
        <div class="cards">
          <ComicCard
            v-for="(comic, index) in comics"
            :key="index"
            :comicProps="comic"
          />
        </div>
        <div class="load-more">
          <a href="#">Load More</a>
        </div>
      </div>
    </main>
    <LinskDiv />
  </div>
</template>

<script>
import LinskDiv from "./Links.vue";
import ComicCard from "./ComicCard.vue";
import comicsData from "../assets/data/dc-comics.json";

export default {
  name: "MainDiv",
  components: {
    LinskDiv,
    ComicCard,
  },
  data() {
    return {
      comics: comicsData,
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

main {
  padding-bottom: 3rem;
  background-color: black;

  .jumbotron {
    position: relative;

    img {
      margin-bottom: 3rem;
      width: 100%;
      height: 25rem;
      @include object-fit-top;
    }

    a {
      position: absolute;
      bottom: 1.8rem;
      padding: 0.7rem 1rem;
      font-size: 1.2rem;
    }
  }

  .cards {
    @include flex-between;
    flex-wrap: wrap;
  }

  .load-more {
    text-align: center;
  }

  a {
    padding: 1rem 3rem;
    @include base-button;
    background-color: $blue;
  }
}
</style>
