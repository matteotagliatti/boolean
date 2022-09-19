<template>
  <div id="app">
    <HeaderDiv @search="searchMoviesOrSeries" @genre="saveSelectedGenre" />
    <div v-if="movies">
      <h2 v-if="movies.length > 1">Movies</h2>
      <h2 v-else>No movies found</h2>
      <div class="grid">
        <ItemCard
          v-for="movie in movieFilter"
          :key="movie.id"
          :itemData="movie"
        />
      </div>
    </div>
    <div v-if="tvseries">
      <h2 v-if="movies.length > 1">Tv Series</h2>
      <h2 v-else>No tv series found</h2>
      <div class="grid">
        <ItemCard
          v-for="(serie, index) in tvFilter"
          :itemData="serie"
          :key="index"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderDiv from "./components/Header.vue";
import ItemCard from "./components/ItemCard.vue";

export default {
  name: "App",
  components: {
    ItemCard,
    HeaderDiv,
  },
  data() {
    return {
      search: "",
      movies: null,
      tvseries: null,
      selectedGenre: "",
    };
  },
  methods: {
    searchMoviesOrSeries(searchValue) {
      this.search = searchValue;
      // Get Movies
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?api_key=${process.env.VUE_APP_APIKEY}&query=${this.search}`
        )
        .then((response) => {
          this.movies = response.data.results;
        });
      // Get TV Series
      axios
        .get(
          `https://api.themoviedb.org/3/search/tv?api_key=${process.env.VUE_APP_APIKEY}&query=${this.search}`
        )
        .then((response) => {
          this.tvseries = response.data.results;
        });
    },
    saveSelectedGenre(genre) {
      this.selectedGenre = genre;
    },
  },
  computed: {
    movieFilter() {
      if (this.selectedGenre == "") {
        return this.movies;
      } else {
        return this.movies.filter((item) => {
          if (item.genre_ids.includes(parseInt(this.selectedGenre)))
            return true;
        });
      }
    },
    tvFilter() {
      if (this.selectedGenre == "") {
        return this.tvseries;
      } else {
        return this.tvseries.filter((item) => {
          if (item.genre_ids.includes(parseInt(this.selectedGenre)))
            return true;
        });
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  background-color: #f8f9ff;
}

#app {
  max-width: 1100px;
  min-width: 460px;
  min-height: 100vh;
  margin: 0 auto;
  font-family: "Inter", sans-serif;
  padding: 3rem;
  color: black;

  h2 {
    color: #565656;
    margin-bottom: 1.5rem;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
  }
}

@media screen and (max-width: 768px) {
  #app {
    padding: 1rem;
    min-width: 0;

    .grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }
}
</style>
