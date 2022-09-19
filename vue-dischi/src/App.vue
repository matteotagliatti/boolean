<template>
  <div id="app">
    <header>
      <img src="@/assets/logo.png" alt="Logo" />
      <div class="select">
        <select v-model="genreToSearch">
          <option selected value>-- all the genres --</option>
          <option v-for="(genre, index) in genres" :value="genre" :key="index">
            {{ genre }}
          </option>
        </select>
      </div>
    </header>

    <div class="container">
      <div v-if="music" class="grid">
        <SingleCard
          v-for="(music, index) in setGenre"
          :musicData="music"
          :key="index"
        />
      </div>
      <div v-else class="loader">
        <LoaderDiv />
      </div>
    </div>
  </div>
</template>

<script>
import SingleCard from "./components/Card.vue";
import LoaderDiv from "./components/Loader.vue";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      music: null,
      genres: [],
      genreToSearch: "",
    };
  },
  components: {
    SingleCard,
    LoaderDiv,
  },
  mounted() {
    setTimeout(this.getAPI, 100);
  },
  methods: {
    getAPI() {
      axios
        .get("https://flynn.boolean.careers/exercises/api/array/music")
        .then((response) => {
          this.music = response.data.response;
          this.genres = Array.from(
            new Set(response.data.response.map((music) => music.genre))
          ); // populate array with unique values
          console.log(this.genres);
          console.log(this.music);
        });
    },
  },
  computed: {
    setGenre() {
      return this.music.filter((element) =>
        element.genre.includes(this.genreToSearch)
      );
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  background-color: #262626;
}

#app {
  font-family: sans-serif;
  color: black;
  min-width: 1100px;

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    img {
      width: 50px;
    }

    select {
      width: 100%;
      border: 1px solid #ccc;
      border-radius: 5px;
      padding: 0.5rem;
      font-size: 1rem;
      font-weight: bold;
      color: #262626;
      background-color: white;
      cursor: pointer;
    }
  }

  .container {
    max-width: 1100px;
    margin: 4rem auto;

    .grid {
      display: grid;
      grid-template-columns: repeat(5, minmax(0, 1fr));
      gap: 1rem;
    }
  }
}
</style>
