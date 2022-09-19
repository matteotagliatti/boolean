<template>
  <div class="card">
    <img :src="musicData.poster" :alt="musicData.title" />
    <p class="title">{{ musicData.title }}</p>
    <p>{{ musicData.author }}</p>
    <p>{{ musicData.year }}</p>
  </div>
</template>

<script>
export default {
  name: "SingleCard",
  props: ["musicData"],
};
</script>

<style scoped lang="scss">
.card {
  background: white;
  padding: 1rem;
  border-radius: 1rem;

  img {
    margin-bottom: 1.3rem;
    border-radius: 1rem;
    width: 100%;
    height: 60%;
    object-fit: cover;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
      rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }

  .title {
    margin-bottom: 0.4rem;
    font-size: 1.2rem;
    font-weight: bold;
  }

  p {
    text-align: center;
  }
}
</style>
