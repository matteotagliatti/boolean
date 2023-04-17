<template>
  <div class="mb">
    <div class="large-container">
      <div class="top-header">
        <!-- Left -->
        <div>
          <span class="lang">English</span
          ><i class="fa-solid fa-chevron-down"></i>
        </div>
        <!-- Right -->
        <div class="right">
          <!-- Link -->
          <div>
            <ul>
              <li v-for="(link, index) in topHeaderLinks" :key="index">
                <a :href="link.url">{{ link.name }}</a>
                <div v-if="index === 2 || index === 4">New</div>
              </li>
            </ul>
          </div>
          <!-- Icons -->
          <div class="icons">
            <i
              v-for="(icon, index) in topHeaderIcons"
              class="fa-brands"
              :class="icon"
              :key="index"
            ></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopHeader",
  data() {
    return {
      topHeaderLinks: [
        {
          name: "Courses",
          url: "#",
        },
        {
          name: "Zoom",
          url: "#",
        },
        {
          name: "Pages",
          url: "#",
        },
        {
          name: "Bundles",
          url: "#",
        },
        {
          name: "Course Formats",
          url: "#",
        },
        {
          name: "Add Course",
          url: "#",
        },
        {
          name: "Demos",
          url: "#",
        },
      ],
      topHeaderIcons: [
        "fa-twitter",
        "fa-instagram",
        "fa-behance",
        "fa-dribbble",
        "fa-git",
        "fa-linkedin",
        "fa-pinterest",
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/style/style.scss";

.mb {
  border-bottom: 1px solid $anthensgray;
}

.top-header {
  @include flex(row, space-between, center);
  padding: 1rem 0;

  a,
  span,
  i {
    opacity: 0.6;
    font-size: 0.9rem;
  }

  ul {
    @include flex(row, flex-end, center);
    gap: 2rem;
  }

  li {
    list-style: none;
    position: relative;

    div {
      position: absolute;
      color: white;
      background-color: $red;
      padding: 0.2rem;
      text-transform: uppercase;
      font-size: 0.6rem;
      top: -1rem;
      right: -0.5rem;
    }

    a {
      color: black;
    }
  }

  .lang {
    margin-right: 0.7rem;
  }

  .right {
    @include flex(row, flex-end, center);
    gap: 3rem;

    .icons {
      display: flex;
      gap: 1rem;
    }
  }
}

@include xl {
  .top-header {
    ul {
      display: none;
    }
  }
}
</style>
