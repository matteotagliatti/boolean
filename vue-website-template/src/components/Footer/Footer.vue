<template>
  <footer>
    <div class="container">
      <!-- First -->
      <div class="column">
        <h3>{{ about.title }}</h3>
        <p>{{ about.desc }}</p>
        <div class="icons">
          <i
            v-for="(icon, index) in about.icons"
            class="fa solid"
            :class="icon"
            :key="index"
          ></i>
        </div>
      </div>
      <!-- Second -->
      <div class="column contact">
        <h3>{{ contact.title }}</h3>
        <p>{{ contact.desc }}</p>
        <span>Tel: {{ contact.tel }}</span>
        <span class="mb">Fax: {{ contact.tel }}</span>
        <span class="email">{{ contact.email }}</span>
      </div>
      <!-- Third -->
      <div class="column">
        <h3>Pages</h3>
        <div class="list">
          <ul>
            <li v-for="(li, index) in firstUl" :key="index">{{ li }}</li>
          </ul>
          <ul>
            <li v-for="(li, index) in secondUl" :key="index">{{ li }}</li>
          </ul>
        </div>
      </div>
      <!-- Fourth -->
      <div class="column">
        <h3>Blog</h3>
        <div class="blog-post" v-for="(element, index) in blog" :key="index">
          <img :src="element.img" alt="element.title" />
          <div class="text">
            <h4>{{ element.title }}</h4>
            <span>- {{ element.date }}</span>
          </div>
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
      about: {
        title: "About",
        desc: `Masterstudy is Education WordPress theme featured by Learning
          Management System (LMS) for online education. Developed by
          Stylemix Themes`,
        icons: ["fa-facebook", "fa-twitter", "fa-instagram"],
      },
      contact: {
        title: "Contact",
        desc: "USA, California 20, First Avenue, California.",
        tel: "+1 212 000 000 00",
        email: "info@masterstudy.com",
      },
      firstUl: ["Blog", "Home", "Shortcodes"],
      secondUl: ["Courses", "Membership", "Typography"],
      blog: [
        {
          img: require("../../assets/img/photo-1517520287167-4bbf64a00d66-150x150.jpeg"),
          title: 'Our main target is to "Developing Yourself as a Leader"',
          date: "August 9, 2018",
        },
        {
          img: require("../../assets/img/photo-1490376840453-5f616fbebe5b-150x150.jpeg"),
          title: "Those Other College Expenses You Aren't Thinking About",
          date: "June 3, 2015",
        },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/style/style.scss";

footer {
  padding: 4rem 0;

  .container {
    @include grid(4);
    column-gap: 2rem;

    .column {
      a {
        color: $denim;
      }

      h3 {
        font-weight: bold;
        margin-bottom: 2rem;
      }

      p,
      span {
        font-size: 0.9rem;
      }

      p {
        margin-bottom: 1rem;
      }

      .icons {
        @include flex(row, flex-start, center);
        gap: 1rem;

        i {
          color: $gullgray;
        }
      }

      .email {
        color: $gullgray;
      }

      .list {
        @include flex(row, flex-start, flex-start);
        gap: 3rem;

        li {
          margin-bottom: 0.7rem;
        }
      }

      .blog-post {
        @include flex(row, space-between, center);
        gap: 1rem;
        margin-bottom: 1rem;

        img {
          width: 5rem;
          object-fit: cover;
        }

        .text {
          @include flex(column, flex-start, flex-start);

          h4 {
            font-size: 0.85rem;
            color: $grey;
          }

          span {
            color: $lightgrey;
          }
        }
      }
    }

    .contact {
      span {
        display: block;
      }

      .mb {
        margin-bottom: 1rem;
      }
    }
  }
}

@include lg {
  footer {
    .container {
      @include grid(2);

      .column {
        margin-bottom: 2rem;
      }
    }
  }
}

@include md {
  footer {
    .container {
      .column {
        .list {
          flex-direction: column;
          gap: 0;
        }
      }
    }
  }
}
</style>
