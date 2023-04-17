<template>
  <div class="container">
    <div class="jumbotron">
      <!-- Text + Button -->
      <div class="text-button">
        <h1>Start Investing in You</h1>
        <p>
          With over 1200 courses in 18 subjects, you're guaranteed to find
          something that's right for you.
        </p>
        <a class="btn"> Join for free</a>
      </div>
      <!-- Img -->
      <div class="image">
        <img src="../../assets/img/base.png" alt="jumbotron" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JumbotronDiv",
};
</script>

<style scoped lang="scss">
@import "../../assets/style/style.scss";

.jumbotron {
  display: flex;
  padding: 4rem 0;

  .text-button {
    width: 60%;
    @include flex(column, center, flex-start);
    gap: 1rem;

    h1 {
      font-size: 3rem;
    }
  }

  .image {
    width: 40%;

    img {
      width: 100%;
    }
  }
}

@include md {
  .jumbotron {
    .image {
      display: none;
    }
  }
}

@include sm {
  .jumbotron {
    .text-button {
      width: 100%;
    }
  }
}
</style>
