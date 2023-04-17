<template>
  <div class="review">
    <div class="container">
      <div>
        <h2>{{ info.title }}</h2>
        <p>{{ info.para }}</p>
        <span class="name">{{ info.name }}</span>
        <span class="position">{{ info.position }}</span>
        <i class="fa-solid fa-play"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ReviewDiv",
  data() {
    return {
      info: {
        title: "Come as you are",
        para: "Masterstudy used in excellenet workshop whether you come as a conselor, advisor, administrator, or faculty member. I am going home empowered. I am looking forward to attending the On Course Masterstudy and the MasterStudy National Conference next year and facilitating the use of this excellent retention/student course at my college.",
        name: "Tim Sab",
        position: "General Developer, Stylemix Themes",
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/style/style.scss";

.review {
  background-image: url("../../assets/img/brooke-cagle-224821-unsplash-1-1920x700.jpg");
  background-position: center;
  background-size: cover;

  padding: 4rem 0;

  .container {
    div {
      position: relative;
      width: 50%;
      padding: 4rem;
      background-color: white;

      h2,
      p {
        margin-bottom: 1rem;
      }

      span {
        display: block;
      }

      .name {
        font-weight: bold;
      }

      i {
        position: absolute;
        font-size: 3rem;
        right: -1.5rem;
        top: 44%;
        color: white;
      }
    }
  }
}

@include lg {
  .review {
    .container {
      div {
        width: 100%;
        padding: 2rem;

        i {
          display: none;
        }
      }
    }
  }
}
</style>
