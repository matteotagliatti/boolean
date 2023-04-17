<template>
  <div class="newsletter">
    <div class="container">
      <div class="text">
        <h3>Subscribe to our newsletter</h3>
        <p>
          There are many variations of passages of Lorem Ipsum avaiable, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words.
        </p>
      </div>
      <div class="input">
        <span>Your e-mail adress</span>
        <div class="input-field">
          <input type="text" placeholder="Your e-mail adress" />
          <a class="btn">Subscribe</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NewsletterDiv",
};
</script>

<style scoped lang="scss">
@import "../../assets/style/style.scss";

.newsletter {
  background-color: $shamrock;
  padding: 4rem 0;
  color: white;

  .container {
    @include flex(row, center, center);
    gap: 2rem;

    .text {
      width: 50%;

      h3 {
        margin-bottom: 1rem;
        font-weight: bold;
      }
    }

    .input {
      @include flex(column, flex-start, flex-start);

      span {
        text-transform: uppercase;
        margin-bottom: 1rem;
      }

      .input-field {
        @include flex(row, center, center);

        input {
          border: none;
          padding: 0.7rem;
          width: 17rem;
        }

        a {
          border-radius: 0;
          &:hover {
            background-color: $william;
          }
        }
      }
    }
  }
}

@include md {
  .newsletter {
    .container {
      flex-direction: column;

      .text,
      .input {
        width: 100%;

        .input-field {
          width: 100%;
          @include flex(row, flex-start, flex-start);
        }
      }
    }
  }
}
</style>
