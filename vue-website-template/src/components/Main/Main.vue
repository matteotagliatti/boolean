<template>
  <div>
    <JumbotronDiv />
    <GridDiv />
    <FirstSlide />
    <CoursesDiv :info="allCourses" />
    <SecondSlide />
    <NewsletterDiv />
    <CoursesDiv :info="popularCourses" />
    <ThirdSlide />
    <ReviewDiv />
  </div>
</template>

<script>
import JumbotronDiv from "./Jumbotron.vue";
import GridDiv from "./Grid.vue";
import FirstSlide from "./FirstSlide.vue";
import CoursesDiv from "./Courses.vue";
import SecondSlide from "./SecondSlide.vue";
import NewsletterDiv from "./Newsletter.vue";
import ThirdSlide from "./ThirdSlide.vue";
import ReviewDiv from "./ReviewDiv.vue";

export default {
  name: "MainDiv",
  components: {
    JumbotronDiv,
    GridDiv,
    FirstSlide,
    CoursesDiv,
    SecondSlide,
    NewsletterDiv,
    ThirdSlide,
    ReviewDiv,
  },
  data() {
    return {
      allCourses: {
        title: "Recent courses",
        bg: "white",
      },
      popularCourses: {
        title: "Popular courses",
        bg: "$backgroundlightblue",
      },
    };
  },
};
</script>

<style lang="scss"></style>
