<template>
  <div class="grid-item">
    <div class="overlay"></div>
    <img
      :src="`http://image.tmdb.org/t/p/w185${itemData.poster_path}`"
      :alt="itemData.title"
    />
    <div class="text">
      <div>
        <p class="title">{{ itemData.title || itemData.name }}</p>
        <p
          class="og-title"
          v-if="
            itemData.original_title !== itemData.title ||
            itemData.original_name !== itemData.name
          "
        >
          Original title:
          <span>{{ itemData.original_title || itemData.original_name }}</span>
        </p>
        <p v-if="cast" class="cast">
          Cast: <span>{{ cast }}</span>
        </p>
      </div>

      <div class="icons">
        <span :class="selectFlag"></span>
        <span class="stars">{{ selectVote }}</span>
      </div>
      <p class="overview">{{ reduceOverview }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ItemCard",
  props: ["itemData"],
  data() {
    return {
      cast: null,
    };
  },
  mounted() {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${this.itemData.id}/credits?api_key=${process.env.VUE_APP_APIKEY}`
      )
      .then((response) => {
        this.cast = response.data.cast.slice(0, 5).map((cast) => {
          return cast.name;
        });
        this.cast = this.cast.join(", ");
      });
  },
  computed: {
    selectFlag() {
      if (this.itemData.original_language === "it") {
        return "fi fi-it";
      } else if (this.itemData.original_language === "en") {
        return "fi fi-us";
      } else if (this.itemData.original_language === "es") {
        return "fi fi-es";
      } else if (this.itemData.original_language === "ja") {
        return "fi fi-jp";
      } else if (this.itemData.original_language === "fr") {
        return "fi fi-fr";
      } else {
        return "fi fi-xx";
      }
    },
    selectVote() {
      const vote = this.itemData.vote_average;
      if (vote < 2) return "★";
      if (vote > 2 && vote < 4) return "★★";
      if (vote > 4 && vote < 6) return "★★★";
      if (vote > 6 && vote < 8) return "★★★★";
      if (vote > 8 && vote <= 10) return "★★★★★";
      return "";
    },
    reduceOverview() {
      if (this.itemData.overview.length > 100) {
        return this.itemData.overview.slice(0, 100) + "...";
      } else {
        return this.itemData.overview;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.grid-item {
  position: relative;
  border-radius: 2rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-image: url("@/assets/img/imgnotfound.png");
  background-size: cover;
  background-position: center;
  background-color: white;

  .overlay {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 2rem;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 2rem;
  }

  .text {
    display: none;
    padding: 2rem;
    position: absolute;
    bottom: 0;
    color: white;
    gap: 1rem;

    .title {
      font-size: 1.5rem;
      font-weight: bold;
    }

    .og-title,
    .cast {
      font-size: 0.8rem;

      span {
        font-weight: bold;
      }
    }

    .icons {
      display: flex;
      gap: 1rem;

      .stars {
        color: gold;
      }
    }

    .overview {
      font-size: 0.7rem;
    }
  }
}

.grid-item:hover .overlay {
  display: block;
}

.grid-item:hover .text {
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 768px) {
  .grid-item {
    .text {
      padding: 0.7rem;
    }
  }
}
</style>
