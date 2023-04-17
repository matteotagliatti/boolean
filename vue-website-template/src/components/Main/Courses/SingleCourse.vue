<template>
  <div class="grid-element">
    <!-- Img -->
    <div class="image-container">
      <img :src="course.img" :alt="course.title" />
    </div>
    <div class="course-text-info">
      <!-- Text -->
      <div class="course-text">
        <p class="category">{{ course.category }} ></p>
        <h3>{{ course.title }}</h3>
      </div>
      <!-- Divider -->
      <hr />
      <!-- Info -->
      <div class="course-info">
        <!-- Left -->
        <div>
          <div v-if="course.hours" class="hours">
            <i class="fa-solid fa-clock"></i> {{ course.hours }} hours
          </div>
          <div v-if="course.stars">
            <span class="stars">{{ displayStars }}</span> {{ course.stars }}
          </div>
        </div>
        <!-- Right -->
        <div>
          <div v-if="course.free" class="free">Free</div>
          <div v-if="course.price_final" class="price">
            <span v-if="course.price_discount" class="discount"
              >${{ course.price_discount }}</span
            >
            <span class="final">${{ course.price_final }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SingleCourse",
  props: ["course"],
  computed: {
    displayStars() {
      return "★★★★★";
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/style/style.scss";

.grid-element {
  border: 1px solid $anthensgray;
  text-align: left;
  transition: box-shadow 0.5s;
  background-color: white;
  &:hover {
    box-shadow: rgba(99, 99, 99, 0.2) 0px 4px 12px 0px;
    cursor: pointer;
  }

  .image-container {
    height: 10rem;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .course-text-info {
    padding: 1.2rem;
    @include flex(column, space-between, flex-start);
    gap: 1rem;
    height: 10.5rem;

    .course-text {
      .category {
        font-size: 0.8rem;
        opacity: 0.4;
        margin-bottom: 0.6rem;
      }

      h3 {
        font-size: 1rem;
      }
    }

    hr {
      width: 100%;
      color: $anthensgray;
    }

    .course-info {
      width: 100%;
      @include flex(row, space-between, center);

      .hours {
        opacity: 0.5;
      }

      .stars {
        font-size: 1.3rem;
        color: goldenrod;
      }

      .free,
      .final {
        font-weight: bold;
      }

      .price {
        position: relative;

        .discount {
          position: absolute;
          top: -0.8rem;
          right: 0;
          font-size: 0.9rem;
          color: grey;
        }
      }
    }
  }
}
</style>
