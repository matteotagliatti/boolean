<template>
  <div class="container">
    <div class="ripple"></div>
  </div>
</template>

<script>
export default {
  name: "LoaderDiv",
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
}

.ripple {
  width: 10rem;
  height: 10rem;
  margin: 2rem;
  border-radius: 50%;
  border: 0.3rem solid white;
  transform: translate(50%);
  animation: 1s ripple ease-out infinite;
}

@keyframes ripple {
  from {
    transform: scale(0);
    opacity: 1;
  }

  to {
    transform: scale(1);
    opacity: 0;
  }
}
</style>
