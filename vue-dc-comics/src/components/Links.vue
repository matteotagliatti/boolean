<template>
  <div id="links">
    <div class="container">
      <div v-for="(element, index) in links" :key="index">
        <img :src="`${element.img}`" :alt="element.text" />
        <span>{{ element.text }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LinksDiv",
  data() {
    return {
      links: [
        {
          text: "Digital comics",
          img: require("../assets/img/buy-comics-digital-comics.png"),
        },
        {
          text: "DC Merchandise",
          img: require("../assets/img/buy-comics-merchandise.png"),
        },
        {
          text: "Sybscription",
          img: require("../assets/img/buy-comics-subscriptions.png"),
        },
        {
          text: "Comic Shop Locator",
          img: require("../assets/img/buy-comics-shop-locator.png"),
        },
        {
          text: "DC Power Visa",
          img: require("../assets/img/buy-dc-power-visa.svg"),
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

#links {
  position: relative;
  padding: 3rem 0;
  background-color: $blue;
  z-index: 1;

  .container {
    @include flex-between;
    align-items: center;

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        width: 50px;
        height: 50px;
        object-fit: contain;
      }

      span {
        font-size: 0.8rem;
        color: white;
        text-transform: uppercase;
      }
    }
  }
}
</style>
