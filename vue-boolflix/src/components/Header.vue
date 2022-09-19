<template>
  <div>
    <h1>Boolflix<span>.</span></h1>
    <form @submit.prevent="$emit('search', searchValue)">
      <select @input="$emit('genre', $event.target.value)">
        <option selected value>All the genres</option>
        <option v-for="(genre, index) in genres" :value="genre.id" :key="index">
          {{ genre.name }}
        </option>
      </select>

      <input
        type="text"
        placeholder="Search for a movie or show"
        v-model="searchValue"
        required
      />
      <input type="submit" value="Search" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HeaderDiv",
  data() {
    return {
      searchValue: "",
      genres: null,
    };
  },
  mounted() {
    // Get Genres
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.VUE_APP_APIKEY}`
      )
      .then((response) => {
        this.genres = response.data.genres.map((genre) => {
          return {
            id: genre.id,
            name: genre.name,
          };
        });
      });
  },
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;

  form {
    display: flex;
    gap: 0.3rem;

    input,
    select {
      padding: 0.5rem;
      border: 2px solid #565656;
      border-radius: 0.7rem;
      background-color: transparent;
      color: black;
      font-size: 1rem;
    }

    input[type="submit"] {
      font-weight: 700;
    }

    select {
      font-size: 0.8rem;
      margin-right: 1rem;
    }
  }

  h1 {
    color: black;

    span {
      color: red;
    }
  }
}

@media screen and (max-width: 768px) {
  div {
    margin-bottom: 3rem;
    flex-direction: column;
  }

  form {
    display: flex;
    flex-direction: column;

    select {
      width: 100%;
    }
  }
}
</style>
