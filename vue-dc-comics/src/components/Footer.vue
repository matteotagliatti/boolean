<template>
  <footer>
    <div class="footer-up">
      <div class="container">
        <div id="links">
          <!-- First Column -->
          <div>
            <ul>
              <li v-for="(link, index) in dcComicsLinks" :key="index">
                {{ link }}
              </li>
            </ul>
            <ul>
              <li v-for="(link, index) in shopLinks" :key="index">
                {{ link }}
              </li>
            </ul>
          </div>
          <!-- Second Column -->
          <div>
            <ul>
              <li v-for="(link, index) in dcLinks" :key="index">
                {{ link }}
              </li>
            </ul>
          </div>
          <!-- Third Column -->
          <div>
            <ul>
              <li v-for="(link, index) in sitesLinks" :key="index">
                {{ link }}
              </li>
            </ul>
          </div>
        </div>
        <img src="../assets/img/dc-logo-bg.png" alt="Logo" />
      </div>
    </div>
    <div class="footer-down">
      <div class="container">
        <a href="#">SIGN-UP DOWN</a>
        <div id="social">
          <span>Follow Us</span>
          <img
            v-for="(social, index) in socialImg"
            :src="social.img"
            :alt="social.text"
            :key="index"
          />
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterDiv",
  data() {
    return {
      dcComicsLinks: [
        "DC Comics",
        "Characters",
        "Comics",
        "Movies",
        "Tv",
        "Games",
        "Collectibles",
        "Videos",
        "Fans",
        "News",
      ],
      shopLinks: ["Shop", "Shop DC", "Shop DC Collectibles"],
      dcLinks: [
        "DC",
        "Terms of Use",
        "Privacy policy",
        "Ad Choices",
        "Advertising",
        "Jobs",
        "Subscription",
        "Talent Workshop",
        "CPSC Certificates",
        "Ratings",
        "Shop Help",
        "Contact Us",
      ],
      sitesLinks: [
        "Sites",
        "DC",
        "MAD Magazine",
        "DC Kids",
        "DC Universe",
        "DC Power Use",
      ],
      socialImg: [
        {
          text: "Facebook",
          img: require("../assets/img/footer-facebook.png"),
          url: "#",
        },
        {
          text: "Twitter",
          img: require("../assets/img/footer-twitter.png"),
          url: "#",
        },
        {
          text: "Youtube",
          img: require("../assets/img/footer-youtube.png"),
          url: "#",
        },
        {
          text: "Pinterest",
          img: require("../assets/img/footer-pinterest.png"),
          url: "#",
        },
        {
          text: "Periscope",
          img: require("../assets/img/footer-periscope.png"),
          url: "#",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/style.scss";

.footer-up {
  background-image: url(../assets/img/footer-bg.jpg);

  .container {
    padding: 2rem 0;
    @include flex-between;

    #links {
      color: white;
      display: flex;
      gap: 3rem;

      ul {
        margin-bottom: 2rem;
      }

      li:first-child {
        margin-bottom: 0.8rem;
        font-size: 1.3rem;
        font-weight: bold;
        text-transform: uppercase;
        opacity: 1;
      }

      li {
        margin-bottom: 0.3rem;
        font-size: 0.8rem;
        opacity: 0.5;
      }
    }

    img {
      margin: -7rem 0;
      overflow: hidden;
    }
  }
}

.footer-down {
  position: relative;
  padding: 2.2rem 0;
  background-color: #303030;
  z-index: 1;

  .container {
    @include flex-between;
  }

  a {
    padding: 1rem;
    border: 2px solid $blue;
    @include base-button;
  }

  #social {
    display: flex;
    align-items: center;
    gap: 1rem;

    span {
      font-size: 1.3rem;
      font-weight: bold;
      text-transform: uppercase;
      color: $blue;
    }
  }
}
</style>
