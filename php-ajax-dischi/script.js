const app = new Vue({
  el: "#app",
  data: () => ({
    dischi: [],
    genre: "",
  }),
  mounted() {
    axios.get("/php-ajax-dischi/api.php" + this.genre).then((result) => {
      this.dischi = result.data;
    });
  },
  methods: {
    filter() {
      axios
        .get("/php-ajax-dischi/api.php?genre=" + this.genre)
        .then((result) => {
          this.dischi = result.data;
        });
    },
  },
});
