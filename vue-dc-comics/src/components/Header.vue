<template>
  <header class="container">
    <img src="../assets/img/dc-logo.png" alt="Logo" />
    <ul>
      <li v-for="(li, index) in headerLis" :key="index">
        <a :class="index === 1 ? 'active' : ''" href="li.url"> {{ li.text }}</a>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: "HeaderDiv",
  data() {
    return {
      headerLis: [
        {
          text: "Characters",
          url: "#",
        },
        {
          text: "Comics",
          url: "#",
        },
        {
          text: "Movies",
          url: "#",
        },
        {
          text: "Tv",
          url: "#",
        },
        {
          text: "Games",
          url: "#",
        },
        {
          text: "Collectibles",
          url: "#",
        },
        {
          text: "Videos",
          url: "#",
        },
        {
          text: "Fans",
          url: "#",
        },
        {
          text: "News",
          url: "#",
        },
        {
          text: "Shop",
          url: "#",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

header {
  @include flex-between;
  align-items: center;
}

img {
  padding: 1rem 0;
  width: 80px;
}

ul {
  display: flex;
  justify-content: center;
  gap: 1.4rem;
}

li {
  text-transform: uppercase;
  font-size: 0.8rem;

  a {
    padding: 2.8rem 0;
    color: black;
    text-decoration: none;
    font-weight: bold;

    &.active {
      color: $blue;
      border-bottom: 5px solid $blue;
    }
  }
}
</style>
