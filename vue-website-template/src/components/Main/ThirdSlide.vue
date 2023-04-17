<template>
  <div class="slide">
    <div class="large-container">
      <div class="single-slide" v-for="(element, index) in info" :key="index">
        <img :src="element.img" :alt="element.title" />
        <div>
          <h3>{{ element.title }}</h3>
          <p>{{ element.para }}</p>
          <a class="btn">{{ element.btn }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ThirdSlide",
  data() {
    return {
      info: [
        {
          img: require("../../assets/img/image_box_1-221x231.png"),
          title: "Become an Instructor",
          para: "Teach what you love. Masterstudy gives you the tools to create a course.",
          btn: "Start Teaching",
        },
        {
          img: require("../../assets/img/image_box_2-234x231.png"),
          title: "Setup for Business",
          para: "Get unlimited access to 2.500 of Udemy's top courses for your team.",
          btn: "Doing Business",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/style/style.scss";

.slide {
  padding: 3rem 0;

  .large-container {
    @include flex(row, space-between, center);
    gap: 2rem;
    padding: 0 2rem;

    .single-slide {
      border: 1px solid $anthensgray;
      padding: 4rem 4rem 4rem 2rem;
      gap: 2rem;
      @include flex(row, center, center);

      div {
        @include flex(column, center, flex-start);
        gap: 1rem;

        h3 {
          font-size: 1.5rem;
        }
      }
    }
  }
}

@include xl {
  .slide {
    .large-container {
      .single-slide {
        padding: 2rem;

        img {
          width: 50%;
        }
      }
    }
  }
}

@include md {
  .slide {
    .large-container {
      flex-direction: column;
    }
  }
}
</style>
