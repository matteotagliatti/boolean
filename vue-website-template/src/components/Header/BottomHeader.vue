<template>
  <div>
    <div class="large-container">
      <div class="bottom-header">
        <!-- Logo -->
        <img src="../../assets/img/MasterStudy_logo.svg" alt="" />
        <!-- Category + Search -->
        <div class="cat-search">
          <div class="category">
            <i class="fa-solid fa-grip-lines"></i><span>Category</span>
          </div>
          <div class="input">
            <input type="text" />
            <div>
              <i class="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        <!-- Icons + Text -->
        <div class="icons-text">
          <div v-for="(element, index) in iconText" :key="index">
            <i class="fa-solid" :class="element.icon"></i
            ><span>{{ element.text }}</span>
          </div>
        </div>
        <!-- Log In + Sign Up -->
        <div class="login-signup">
          <div class="login">
            <i class="fa-solid fa-user"></i><span>Log In</span>
          </div>
          <div class="btn">Sign Up</div>
          <div class="bookmark">
            <i class="fa-solid fa-bookmark"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomHeader",
  data() {
    return {
      iconText: [
        {
          text: "Become an instructor",
          icon: "fa-bullhorn",
        },
        {
          text: "For Enterprise",
          icon: "fa-suitcase",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/style/style.scss";

.bottom-header {
  padding: 1rem 0;
  @include flex(row, space-between, center);

  .cat-search {
    @include flex(row, center, center);
    gap: 1rem;

    .category {
      opacity: 0.5;
      display: flex;
      gap: 0.3rem;
      text-transform: uppercase;
    }

    .input {
      display: flex;

      input {
        width: 20rem;
        border: none;
        color: black;
        background-color: $anthensgray;
        padding: 0.5rem;
      }

      div {
        padding: 0.9rem 1.3rem;
        background-color: $denim;
        @include flex(row, center, center);

        i {
          color: white;
        }
      }
    }
  }

  .icons-text {
    display: flex;
    gap: 1.5rem;

    div {
      display: flex;
      gap: 0.5rem;

      i {
        color: $denim;
      }
    }
  }

  .login-signup {
    @include flex(row, space-between, center);
    gap: 1.5rem;
    color: $denim;

    .login {
      color: $denim;
      display: flex;
      gap: 0.5rem;
    }
  }
}

@include xxl {
  .bottom-header {
    .icons-text {
      display: none;
    }

    .cat-search {
      .category {
        display: none;
      }
    }
  }
}

@include xl {
  .login-signup {
    .bookmark {
      display: none;
    }
  }
}

@include lg {
  .bottom-header {
    .cat-search {
      .input {
        input {
          width: 8rem;
        }
      }
    }
  }
}

@include md {
  .bottom-header {
    .cat-search {
      .input {
        display: none;
      }
    }

    .login-signup {
      gap: 0.5rem;
    }
  }
}

@include sm {
  .bottom-header {
    .login-signup {
      display: none;
    }
  }
}
</style>
