<template>
  <div>
    <TopHeader />
    <BottomHeader />
  </div>
</template>

<script>
import TopHeader from "./TopHeader.vue";
import BottomHeader from "./BottomHeader.vue";

export default {
  name: "HeaderDiv",
  components: {
    TopHeader,
    BottomHeader,
  },
};
</script>

<style lang="scss">
@import "../../assets/style/style.scss";
</style>
